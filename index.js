const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

const tagsRouter = require('./src/tags/index.js');
const imagesRouter = require('./src/images/index.js');

app.use(cors());
app.use('/static', express.static('static'));
app.use('/tags', tagsRouter);
app.use('/images', imagesRouter);
app.listen(PORT, () => console.log('SERVER is running...'));

app.get('/', (req, res) => {
  res.send('Server check');
});
