const express = require('express');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

app.use(history());
app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get(/.*/, function (_req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});

/* O Heroku atribui automaticamente a porta,
  então deixe-o fazer o seu trabalho,
  não defina uma porta no painel do Heroku.
  Quanto ao 5000 ou qualquer número que você definir será para sua máquina local.
 */
const port = process.env.PORT || 5000;
app.listen(port);
