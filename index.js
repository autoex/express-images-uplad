const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const tagsRouter = require('./src/tags/index.js');

app.use(express.json());
app.use(cors());
app.use('/tags', tagsRouter);
app.listen(PORT, () => console.log('SERVER is running...'));

app.get('/', (req, res) => {
  res.send('Server check');
});
