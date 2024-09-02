const fs = require('fs');
const path = require('path');

const create = (req, res) => {
  const tag = req.body.tag;
  const tagsText = fs.readFileSync(path.join(process.cwd(), 'db', 'tags.json'));
  const tags = JSON.parse(tagsText);
  tags.push(tag);
  fs.writeFileSync(
    path.join(process.cwd(), 'db', 'tags.json'),
    JSON.stringify(tags, null, 4),
    'utf-8',
  );
  res.json({
    status: 'ok',
  });
};

module.exports = create;
