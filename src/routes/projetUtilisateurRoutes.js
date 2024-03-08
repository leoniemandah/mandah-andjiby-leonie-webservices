const express = require('express');
const router = express.Router();

// Importer les contrôleurs des projets utilisateurs
const projetUtilisateurController = require('../controllers/projetUtilisateurController');

// Définir les routes pour les projets utilisateurs
router.get('/projets-utilisateurs', projetUtilisateurController.getAllProjetsUtilisateurs);
router.get('/projets-utilisateurs/:projetId/:utilisateurId', projetUtilisateurController.getProjetUtilisateur);
router.post('/projets-utilisateurs', projetUtilisateurController.createProjetUtilisateur);
router.put('/projets-utilisateurs/:projetId/:utilisateurId', projetUtilisateurController.updateProjetUtilisateur);
router.delete('/projets-utilisateurs/:projetId/:utilisateurId', projetUtilisateurController.deleteProjetUtilisateur);

module.exports = router;