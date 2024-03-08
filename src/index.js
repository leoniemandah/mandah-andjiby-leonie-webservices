const express = require('express');
const app = express();
const port = 3000; 

// Connexion à la base de données SQLite
const db = require('./db/connect'); // Assurez-vous d'ajuster le chemin en fonction de l'emplacement de votre fichier de connexion à la base de données

// Configuration du middleware pour permettre de parser les requêtes JSON
app.use(express.json());

// Routes API pour les projets
const projetRoutes = require('./routes/projetRoutes');
app.use('/projetRoutes', projetRoutes);

// Routes API pour les utilisateurs
const utilisateurRoutes = require('./routes/utilisateurRoutes');
app.use('/utilisateurRoutes', utilisateurRoutes);

// Autres routes API...

// Gestion des erreurs 404 (Not Found)
app.use((req, res, next) => {
  res.status(404).send("Page introuvable");
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur Express démarré sur le port ${port}`);
});
