// api/data.js
const data = require('../server/db/data.json');

module.exports = (req, res) => {
  res.status(200).json(data);
};
