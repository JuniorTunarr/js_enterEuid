// server.js
const fs = require('fs');

const express = require('express');

const app = express();
const data = require('./db/data.json');

app.use(express.static('client')); // 정적 파일 제공

app.get('/api/data', (req, res) => {
  res.json(data); // 데이터 json 형식으로 반환
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
