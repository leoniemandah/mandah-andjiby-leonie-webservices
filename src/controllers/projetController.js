// Importer le modèle Projet
const Projet = require('../models/projet');

// Obtenir tous les projets
exports.getAllProjets = async (req, res) => {
    try {
        const projets = await Projet.findAll();
        res.json(projets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un projet par son ID
exports.getProjetById = async (req, res) => {
    const { id } = req.params;
    try {
        const projet = await Projet.findByPk(id);
        if (!projet) {
            return res.status(404).json({ message: 'Projet introuvable' });
        }
        res.json(projet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer un nouveau projet
exports.createProjet = async (req, res) => {
    const { nom, description, date_creation } = req.body;
    try {
        const projet = await Projet.create({ nom, description, date_creation });
        res.status(201).json(projet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un projet existant
exports.updateProjet = async (req, res) => {
    const { id } = req.params;
    const { nom, description, date_creation } = req.body;
    try {
        let projet = await Projet.findByPk(id);
        if (!projet) {
            return res.status(404).json({ message: 'Projet introuvable' });
        }
        projet = await projet.update({ nom, description, date_creation });
        res.json(projet);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un projet existant
exports.deleteProjet = async (req, res) => {
    const { id } = req.params;
    try {
        const projet = await Projet.findByPk(id);
        if (!projet) {
            return res.status(404).json({ message: 'Projet introuvable' });
        }
        await projet.destroy();
        res.json({ message: 'Projet supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};