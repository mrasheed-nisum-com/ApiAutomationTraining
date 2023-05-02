const axios = require('axios');
// TODO: add timing of request/response to request/response object
// so we can have an assert call based on SLA for response time
// https://gist.github.com/gnurgeldiyev/cbca8cc4dd0b4e144d0bd55ff3412ee5
// https://sabljakovich.medium.com/axios-response-time-capture-and-log-8ff54a02275d
const { I } = inject();

class ApiConnection {
  constructor() {
    const host = 'https://jsonplaceholder.typicode.com';
    this.connection = axios.create({
      baseURL: host,
      timeout: 20000,
    });
    
  }


  async get(url, options = {}) {
    try {
      const response = await this.connection.get(url, options);
      return {
        body: response.data,
        statusCode: response.status
      };
    } catch (error) {
      console.log("error")
    }
  }


  async post(url,payload, options = {}) {
    try {
      const response = await this.connection.post(url, payload, options);
      I.captureRequest({
        method: 'POST',
        url: `${url}`,
        status: response.status,
        responseTime: response.responseTime,
      });
      return {
        payload,
        body: response.data,
        statusCode: response.status
      };
    } catch (error) {
      console.log("error")
    }
  }

  async put(url,payload, options = {}) {
    try {
      const response = await this.connection.put(url, payload, options);
      I.captureRequest({
        method: 'POST',
        url: `${url}`,
        status: response.status,
        responseTime: response.responseTime,
      });
      return {
        payload,
        body: response.data,
        statusCode: response.status
      };
    } catch (error) {
      console.log("error")
    }
  }


  async delete(url, options = {}) {
    try {
      const response = await this.connection.delete(url, options);
      return {
        body: response.data,
        statusCode: response.status
      };
    } catch (error) {
      console.log("error")
    }
  }

}
module.exports = new ApiConnection();
