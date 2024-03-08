const express = require('express');
const router = express.Router();

// Importer les contrôleurs des utilisateurs compétences
const utilisateurCompetenceController = require('../controllers/utilisateurCompetenceController');

// Définir les routes pour les utilisateurs compétences
router.get('/utilisateurs/:userId/competences', utilisateurCompetenceController.getUtilisateurCompetences);
router.post('/utilisateurs/:userId/competences', utilisateurCompetenceController.addUtilisateurCompetence);
router.delete('/utilisateurs/:userId/competences/:competenceId', utilisateurCompetenceController.removeUtilisateurCompetence);

module.exports = router;