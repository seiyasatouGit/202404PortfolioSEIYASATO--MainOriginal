// const express = require('express');
// const app = express();
// const port = process.env.PORT || 4000; // PORT環境変数が定義されていない場合は3000ポートを使用

// const requestHandler = require('./requestHandler'); // ファイル名が変更されたので修正

// app.get('/', requestHandler); // requestHandlerをミドルウェアとして使用

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const requestHandler = require('./requestHandler');

app.get('/', requestHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
