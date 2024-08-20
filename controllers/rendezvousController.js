import { RendezvousModel } from '../models/rendezvousModel.js';

export const RendezvousController = {
  // Récupérer tous les rendezvous
  getAllRendezvous: (req, res) => {
    RendezvousModel.getAllRendezvous((err, rendezvous) => {
      if (err) {
        console.error('Erreur lors de la récupération des rendez_vous:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des rendezvous' });
      } else {
        res.json(rendezvous);
      }
    });
  },

  // Récupérer un rendezvous par ID
  getRendezvousById: (req, res) => {
    const id = req.params.id;
    RendezvousModel.getById(id, (err, rendezvous) => {
      if (err) {
        console.error('Erreur lors de la récupération du rendez_vous:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération du rendezvous' });
      } else if (!rendezvous) {
        res.status(404).json({ message: 'Rendez_vous non trouvé' });
      } else {
        res.json(rendezvous);
      }
    });
  },

  // Créer un rendezvous
  createRendezvous: (req, res) => {
    const { date, heure, patientId, medecinId } = req.body;
    RendezvousModel.create(date, heure, patientId, medecinId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du rendez_vous:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création du rendezvous' });
      } else {
        res.status(201).json({ message: 'Rendez_vous créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un rendezvous
  updateRendezvous: (req, res) => {
    const id = req.params.id;
    const { date, heure, patientId, medecinId } = req.body;
    RendezvousModel.update(id, date, heure, patientId, medecinId, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du rendezvous:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du rendez_vous' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Rendez_vous non trouvé' });
      } else {
        res.json({ message: 'Rendez_vous mis à jour avec succès' });
      }
    });
  },

  // Supprimer un rendezvous
  deleteRendezvous: (req, res) => {
    const id = req.params.id;
    RendezvousModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du rendezvous:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression du rendez_vous' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Rendez_vous non trouvé' });
      } else {
        res.json({ message: 'Rendez_vous supprimé avec succès' });
      }
    });
  }
};
