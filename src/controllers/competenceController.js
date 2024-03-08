// Importer le modèle Competence
const Competence = require('../models/competence');

// Obtenir toutes les compétences
exports.getAllCompetences = async (req, res) => {
    try {
        const competences = await Competence.findAll();
        res.json(competences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une compétence par son ID
exports.getCompetenceById = async (req, res) => {
    const { id } = req.params;
    try {
        const competence = await Competence.findByPk(id);
        if (!competence) {
            return res.status(404).json({ message: 'Compétence introuvable' });
        }
        res.json(competence);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer une nouvelle compétence
exports.createCompetence = async (req, res) => {
    const { libelle } = req.body;
    try {
        const competence = await Competence.create({ libelle });
        res.status(201).json(competence);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une compétence existante
exports.updateCompetence = async (req, res) => {
    const { id } = req.params;
    const { libelle } = req.body;
    try {
        let competence = await Competence.findByPk(id);
        if (!competence) {
            return res.status(404).json({ message: 'Compétence introuvable' });
        }
        competence = await competence.update({ libelle });
        res.json(competence);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une compétence existante
exports.deleteCompetence = async (req, res) => {
    const { id } = req.params;
    try {
        const competence = await Competence.findByPk(id);
        if (!competence) {
            return res.status(404).json({ message: 'Compétence introuvable' });
        }
        await competence.destroy();
        res.json({ message: 'Compétence supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
