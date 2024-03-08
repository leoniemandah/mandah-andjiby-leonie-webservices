// Importer le modèle Utilisateur
const Utilisateur = require('../models/utilisateur');

// Obtenir tous les utilisateurs
exports.getAllUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.json(utilisateurs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir un utilisateur par son ID
exports.getUtilisateurById = async (req, res) => {
    const { id } = req.params;
    try {
        const utilisateur = await Utilisateur.findByPk(id);
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }
        res.json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer un nouvel utilisateur
exports.createUtilisateur = async (req, res) => {
    const { nom, prenom, email, role } = req.body;
    try {
        const utilisateur = await Utilisateur.create({ nom, prenom, email, role });
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour un utilisateur existant
exports.updateUtilisateur = async (req, res) => {
    const { id } = req.params;
    const { nom, prenom, email, role } = req.body;
    try {
        let utilisateur = await Utilisateur.findByPk(id);
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }
        utilisateur = await utilisateur.update({ nom, prenom, email, role });
        res.json(utilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer un utilisateur existant
exports.deleteUtilisateur = async (req, res) => {
    const { id } = req.params;
    try {
        const utilisateur = await Utilisateur.findByPk(id);
        if (!utilisateur) {
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        }
        await utilisateur.destroy();
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};