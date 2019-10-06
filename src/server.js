const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const config = require('./config/config-envs');
const routes = require('./routes');
const app = express();

mongoose.connect(config.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

if (app.listen) {
  console.log(`Servidor rodando na porta: ${config.PORT}`);
}

app.listen(config.PORT);
