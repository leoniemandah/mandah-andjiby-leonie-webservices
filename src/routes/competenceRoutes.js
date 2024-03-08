const express = require('express');
const router = express.Router();

// Importer les contrôleurs des compétences
const competenceController = require('../controllers/competenceController');

// Définir les routes pour les compétences
router.get('/competences', competenceController.getAllCompetences);
router.get('/competences/:id', competenceController.getCompetenceById);
router.post('/competences', competenceController.createCompetence);
router.put('/competences/:id', competenceController.updateCompetence);
router.delete('/competences/:id', competenceController.deleteCompetence);

module.exports = router;