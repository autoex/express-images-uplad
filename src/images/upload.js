const path = require('path');
const fs = require('fs');

const getLastImgId = () => {
  let id = 1;

  while (true) {
    const filePath = path.join(process.cwd(), 'db', 'images', `${id}.json`);

    if (!fs.existsSync(filePath)) return id - 1;

    id += 1;
  }
};

const upload = (req, res) => {
  console.log(req.body.tags.split(','));

  const newId = getLastImgId() + 1;

  const data = {
    filename: req.file.filename,
    tags: req.body.tags.split(',').map((item) => item.trim()),
  };

  fs.writeFileSync(
    path.join(process.cwd(), 'db', 'images', `${newId}.json`),
    JSON.stringify(data, null, 4),
    'utf-8',
  );
  res.json({
    ...data,
    id: newId,
  });
};
module.exports = upload;
