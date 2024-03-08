const express = require('express');
const router = express.Router();

// Importer les contrôleurs des projets et les middlewares
const projetController = require('../controllers/projetController');
const authMiddleware = require('../middlewares/authMiddleware');

// Définir les routes pour les projets
router.get('/projets', projetController.getAllProjets);
router.get('/projets/:id', projetController.getProjetById);
router.post('/projets', projetController.createProjet);
router.put('/projets/:id', projetController.updateProjet);
router.delete('/projets/:id', projetController.deleteProjet);
// Route nécessitant une authentification et une autorisation d'administrateur
router.get('/projets', authMiddleware, projetController.getAllProjets);

module.exports = router;