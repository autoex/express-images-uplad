
const path = require('path');


function list(req, res) {
  res.sendFile(path.join(process.cwd(), 'db', 'tags.json'));
}

module.exports =  list ;
