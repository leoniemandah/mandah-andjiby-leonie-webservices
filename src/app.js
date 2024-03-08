// Fermer la connexion à la base de données lorsque l'application s'arrête
process.on('SIGINT', () => {
    db.close((err) => {
      if (err) {
        console.error('Erreur lors de la fermeture de la connexion à la base de données :', err.message);
      } else {
        console.log('Connexion à la base de données SQLite fermée');
      }
      process.exit();
    });
});
  