// Importer le modèle Projet_Utilisateur
const ProjetUtilisateur = require('../models/Projet_Utilisateur.sql');

// Obtenir toutes les relations projet-utilisateur
exports.getAllProjetsUtilisateurs = async (req, res) => {
    try {
        const projetsUtilisateurs = await ProjetUtilisateur.findAll();
        res.json(projetsUtilisateurs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtenir une relation projet-utilisateur par ID projet et ID utilisateur
exports.getProjetUtilisateur = async (req, res) => {
    const { projetId, utilisateurId } = req.params;
    try {
        const projetUtilisateur = await ProjetUtilisateur.findOne({ where: { projet_id: projetId, utilisateur_id: utilisateurId } });
        if (!projetUtilisateur) {
            return res.status(404).json({ message: 'Relation projet-utilisateur introuvable' });
        }
        res.json(projetUtilisateur);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Créer une nouvelle relation projet-utilisateur
exports.createProjetUtilisateur = async (req, res) => {
    const { projetId, utilisateurId, date_debut, date_fin } = req.body;
    try {
        const nouvelleRelation = await ProjetUtilisateur.create({ projet_id: projetId, utilisateur_id: utilisateurId, date_debut, date_fin });
        res.status(201).json(nouvelleRelation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Mettre à jour une relation projet-utilisateur
exports.updateProjetUtilisateur = async (req, res) => {
    const { projetId, utilisateurId } = req.params;
    const { date_debut, date_fin } = req.body;
    try {
        let relation = await ProjetUtilisateur.findOne({ where: { projet_id: projetId, utilisateur_id: utilisateurId } });
        if (!relation) {
            return res.status(404).json({ message: 'Relation projet-utilisateur introuvable' });
        }
        relation = await relation.update({ date_debut, date_fin });
        res.json(relation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une relation projet-utilisateur
exports.deleteProjetUtilisateur = async (req, res) => {
    const { projetId, utilisateurId } = req.params;
    try {
        const relation = await ProjetUtilisateur.findOne({ where: { projet_id: projetId, utilisateur_id: utilisateurId } });
        if (!relation) {
            return res.status(404).json({ message: 'Relation projet-utilisateur introuvable' });
        }
        await relation.destroy();
        res.json({ message: 'Relation projet-utilisateur supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
