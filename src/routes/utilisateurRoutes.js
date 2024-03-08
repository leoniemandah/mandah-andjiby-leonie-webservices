const express = require('express');
const router = express.Router();

// Importer les contrôleurs des utilisateurs
const utilisateurController = require('../controllers/utilisateurController');
const authMiddleware = require('../middlewares/authMiddleware');

// Définir les routes pour les utilisateurs
router.get('/utilisateurs', utilisateurController.getAllUtilisateurs);
router.get('/utilisateurs/:id', utilisateurController.getUtilisateurById);
router.post('/utilisateurs', utilisateurController.createUtilisateur);
router.put('/utilisateurs/:id', utilisateurController.updateUtilisateur);
router.delete('/utilisateurs/:id', utilisateurController.deleteUtilisateur);
// Route nécessitant une authentification et une autorisation d'administrateur
router.get('/utilisateurs', authMiddleware, utilisateurController.getAllUtilisateurs);

module.exports = router;