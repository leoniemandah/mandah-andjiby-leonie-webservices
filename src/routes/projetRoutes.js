const express = require('express');
const router = express.Router();

// Importer les contrôleurs des projets
const projetController = require('../controllers/projetController');

// Définir les routes pour les projets
router.get('/projets', projetController.getAllProjets);
router.get('/projets/:id', projetController.getProjetById);
router.post('/projets', projetController.createProjet);
router.put('/projets/:id', projetController.updateProjet);
router.delete('/projets/:id', projetController.deleteProjet);

module.exports = router;