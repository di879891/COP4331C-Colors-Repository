const fetch = require('node-fetch');

test('API returns JSON structure', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  expect(res.status).toBe(200);
  expect(data).toHaveProperty('id');
  expect(data).toHaveProperty('title');
});
