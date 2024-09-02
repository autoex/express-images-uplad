const cors = require('cors');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(cors());
app.listen(PORT, () => console.log('SERVER is running...'));

app.get('/', (req, res) => {
  res.send('Server check');
});
