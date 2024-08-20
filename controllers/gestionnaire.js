import { GestionnaireModel } from '../models/gestionnaire.js';

export const GestionnaireController = {
  // Récupérer tous les gestionnaires
  getAllGestionnaires: (req, res) => {
    GestionnaireModel.getAllGestionnaires((err, gestionnaires) => {
      if (err) {
        console.error('Erreur lors de la récupération des gestionnaires:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des gestionnaires' });
      } else {
        res.json(gestionnaires);
      }
    });
  },

  // Récupérer un gestionnaire par ID
  getGestionnaireById: (req, res) => {
    const id = req.params.id;
    GestionnaireModel.getById(id, (err, gestionnaire) => {
      if (err) {
        console.error('Erreur lors de la récupération du gestionnaire:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération du gestionnaire' });
      } else if (!gestionnaire) {
        res.status(404).json({ message: 'Gestionnaire non trouvé' });
      } else {
        res.json(gestionnaire);
      }
    });
  },

  // Créer un gestionnaire
  createGestionnaire: (req, res) => {
    const { nom, prenom, email, telephone } = req.body;
    GestionnaireModel.create(nom, prenom, email, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du gestionnaire:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création du gestionnaire' });
      } else {
        res.status(201).json({ message: 'Gestionnaire créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un gestionnaire
  updateGestionnaire: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, email, telephone } = req.body;
    GestionnaireModel.update(id, nom, prenom, email, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du gestionnaire:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du gestionnaire' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Gestionnaire non trouvé' });
      } else {
        res.json({ message: 'Gestionnaire mis à jour avec succès' });
      }
    });
  },

  // Supprimer un gestionnaire
  deleteGestionnaire: (req, res) => {
    const id = req.params.id;
    GestionnaireModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du gestionnaire:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression du gestionnaire' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Gestionnaire non trouvé' });
      } else {
        res.json({ message: 'Gestionnaire supprimé avec succès' });
      }
    });
  }
};
