const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Chemin vers le fichier de la base de données SQLite
const dbPath = path.join(__dirname, '..', 'sqlite-tools-win-x64-3450100', 'webservices.db');


// Créer une nouvelle instance de la base de données SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erreur lors de la connexion à la base de données :', err.message);
  } else {
    console.log('Connexion à la base de données SQLite réussie');
  }
});

// Exporter la connexion à la base de données pour l'utiliser dans d'autres parties de l'application si nécessaire
module.exports = db;
