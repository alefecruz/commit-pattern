const express = require('express');

const app = express();
const PORT = 3335;

app.get('/', (require, response) => response.json({ message: 'Hello World!' }));

app.listen(PORT, () => {
  console.log(`Running in port ${PORT}`);
});
