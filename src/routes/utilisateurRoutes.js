const express = require('express');
const router = express.Router();

// Importer les contrôleurs des utilisateurs
const utilisateurController = require('../controllers/utilisateurController');

// Définir les routes pour les utilisateurs
router.get('/utilisateurs', utilisateurController.getAllUtilisateurs);
router.get('/utilisateurs/:id', utilisateurController.getUtilisateurById);
router.post('/utilisateurs', utilisateurController.createUtilisateur);
router.put('/utilisateurs/:id', utilisateurController.updateUtilisateur);
router.delete('/utilisateurs/:id', utilisateurController.deleteUtilisateur);

module.exports = router;