import { MedecinModel } from '../models/medecin.js';

export const MedecinController = {
  // Récupérer tous les médecins
  getAllMedecins: (req, res) => {
    MedecinModel.getAllMedecins((err, medecins) => {
      if (err) {
        console.error('Erreur lors de la récupération des médecins:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des médecins' });
      } else {
        res.json(medecins);
      }
    });
  },

  // Récupérer un médecin par ID
  getMedecinById: (req, res) => {
    const id = req.params.id;
    MedecinModel.getById(id, (err, medecin) => {
      if (err) {
        console.error('Erreur lors de la récupération du médecin:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération du médecin' });
      } else if (!medecin) {
        res.status(404).json({ message: 'Médecin non trouvé' });
      } else {
        res.json(medecin);
      }
    });
  },

  // Créer un médecin
  createMedecin: (req, res) => {
    const { nom, prenom, specialite, email, hopitalId } = req.body;
    MedecinModel.create(nom, prenom, email, specialite, hopitalId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du médecin:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création du médecin' });
      } else {
        res.status(201).json({ message: 'Médecin créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un médecin
  updateMedecin: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, specialite, email, hopitalId } = req.body;
    MedecinModel.update(id, nom, prenom, specialite, email, hopitalId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du médecin:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du médecin' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Médecin non trouvé' });
      } else {
        res.json({ message: 'Médecin mis à jour avec succès' });
      }
    });
  },

  // Supprimer un médecin
  deleteMedecin: (req, res) => {
    const id = req.params.id;
    MedecinModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du médecin:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression du médecin' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Médecin non trouvé' });
      } else {
        res.json({ message: 'Médecin supprimé avec succès' });
      }
    });
  }
};
