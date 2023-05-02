class APIHelper extends Helper {
    // eslint-disable-next-line no-unused-vars
    captureRequest(requestDetail) {
      // This is just to capture data for reporting. Nothing to do here.
    }
  
    /**
     * Wrapper around the say method so that we can see this call in the resulting output.
     */
    log(message) {
      output.say(message);
    }
  
    wait(sec = 1) {
      return new Promise(res => setTimeout(res, sec * 1000));
    }
  }
  
  module.exports = APIHelper;