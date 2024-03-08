// Importer le modèle Utilisateur_Competence
const UtilisateurCompetence = require('../models/Utilisateur_Competence.sql');

// Obtenir les compétences d'un utilisateur
exports.getUtilisateurCompetences = async (req, res) => {
    const { userId } = req.params;
    try {
        const competences = await UtilisateurCompetence.findAll({ where: { utilisateur_id: userId } });
        res.json(competences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Ajouter une compétence à un utilisateur
exports.addUtilisateurCompetence = async (req, res) => {
    const { userId } = req.params;
    const { competenceId, niveau } = req.body;
    try {
        const nouvelleRelation = await UtilisateurCompetence.create({ utilisateur_id: userId, competence_id: competenceId, niveau });
        res.status(201).json(nouvelleRelation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Supprimer une compétence d'un utilisateur
exports.removeUtilisateurCompetence = async (req, res) => {
    const { userId, competenceId } = req.params;
    try {
        const relation = await UtilisateurCompetence.findOne({ where: { utilisateur_id: userId, competence_id: competenceId } });
        if (!relation) {
            return res.status(404).json({ message: 'Relation utilisateur-compétence introuvable' });
        }
        await relation.destroy();
        res.json({ message: 'Relation utilisateur-compétence supprimée avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
