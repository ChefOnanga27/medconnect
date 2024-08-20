import { GestionnaireModel } from '../models/gestionnaire.js';

export const GestionnaireController = {
  createGestionnaire: (req, res) => {
    const { nom, prenom, email, telephone } = req.body;
    GestionnaireModel.create(nom, prenom, email, telephone, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la création du gestionnaire");
      } else {
        res.status(201).json(results);
      }
    });
  },

  getAllGestionnaires: (req, res) => {
    GestionnaireModel.getAllGestionnaires((err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération des gestionnaires");
      } else {
        res.json(results);
      }
    });
  },

  getGestionnaireById: (req, res) => {
    const id = req.params.id;
    GestionnaireModel.getById(id, (err, gestionnaire) => {
      if (err) {
        res.status(500).send("Erreur lors de la récupération du gestionnaire");
      } else if (!gestionnaire) {
        res.status(404).send("Gestionnaire non trouvé");
      } else {
        res.json(gestionnaire);
      }
    });
  },

  updateGestionnaire: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, email, telephone } = req.body;
    GestionnaireModel.update(id, nom, prenom, email, telephone, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la mise à jour du gestionnaire");
      } else {
        res.json(results);
      }
    });
  },

  deleteGestionnaire: (req, res) => {
    const id = req.params.id;
    GestionnaireModel.delete(id, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de la suppression du gestionnaire");
      } else {
        res.json({ message: 'Gestionnaire supprimé avec succès' });
      }
    });
  }
};
