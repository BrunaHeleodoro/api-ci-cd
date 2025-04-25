const express = require('express');
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'Parabéns! Deu certo! :D' });
  });
  
  app.get('/users', (req, res) => {
    res.json([
      { id: 1, name: 'Bruna' },
      { id: 2, name: 'Aura' },
      { id: 3, name: 'Marina' },
    ]);
  });

module.exports = app;