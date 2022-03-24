const express = require('express');
const { readData } = require('./services')
const cors = require('cors');

const app = express();
const port = 6000;

app.use(cors({ origin: ['http://localhost:3000'] }));

app.get('/api/messages', async (req, res) => {
  const messages = await readData();

  res.status(200).json(messages);
})

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
