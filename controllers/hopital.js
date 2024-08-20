import { HopitalModel } from '../models/hopital.js';

export const HopitalController = {
  // Récupérer tous les hôpitaux
  getAllHopitaux: (req, res) => {
    HopitalModel.getAllHopitaux((err, hopitaux) => {
      if (err) {
        console.error('Erreur lors de la récupération des hôpitaux:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des hôpitaux' });
      } else {
        res.json(hopitaux);
      }
    });
  },

  // Récupérer un hôpital par ID
  getHopitalById: (req, res) => {
    const id = req.params.id;
    HopitalModel.getById(id, (err, hopital) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'hôpital:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'hôpital' });
      } else if (!hopital) {
        res.status(404).json({ message: 'Hôpital non trouvé' });
      } else {
        res.json(hopital);
      }
    });
  },

  // Créer un hôpital
  createHopital: (req, res) => {
    const { nom, adresse, telephone } = req.body;
    HopitalModel.create(nom, adresse, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'hôpital:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création de l\'hôpital' });
      } else {
        res.status(201).json({ message: 'Hôpital créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un hôpital
  updateHopital: (req, res) => {
    const id = req.params.id;
    const { nom, adresse, telephone } = req.body;
    HopitalModel.update(id, nom, adresse, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'hôpital:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'hôpital' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Hôpital non trouvé' });
      } else {
        res.json({ message: 'Hôpital mis à jour avec succès' });
      }
    });
  },

  // Supprimer un hôpital
  deleteHopital: (req, res) => {
    const id = req.params.id;
    HopitalModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'hôpital:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'hôpital' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Hôpital non trouvé' });
      } else {
        res.json({ message: 'Hôpital supprimé avec succès' });
      }
    });
  }
};
