const app = require('./app');

const PORT = process.env.PORT || 3097;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on('error', (err) => {
  console.error('Erro no servidor:', err);
});

app.get('/', (req, res) => {
  res.send('API está rodando com sucesso 🚀');
});