Feature('demo');

const httpClient = require('./httpClient');
Scenario('test something',async ({ I }) => {
//GET
//const response = await httpClient.get('/todos/2')

//POST
 const payload = {
  body: JSON.stringify({
  title: 'foo',
  body: 'bar',
  userId: 1,
})}
 const response  = await httpClient.post('/posts',payload);

//PUT
// const payloadUpdate = {
//   body: JSON.stringify({
//   id: 1,
//   title: 'foo UPDATE',
//   body: 'bar',
//   userId: 1,
// })}
// const response  = await httpClient.put('/posts/1',payloadUpdate);

//DELETE
//const response = await httpClient.delete('/posts/1')

console.log(response)
});