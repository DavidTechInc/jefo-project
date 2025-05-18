const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servir les fichiers HTML statiques à la racine
app.use(express.static(__dirname));

// Page 404
app.use((req, res) => {
  res.status(404).send('Page non trouvée.');
});

app.listen(PORT, () => {
  console.log(`Serveur en cours sur le port ${PORT}`);
});