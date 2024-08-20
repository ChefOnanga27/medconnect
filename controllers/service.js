import { ServiceModel } from '../models/service.js';

export const ServiceController = {
  // Récupérer tous les services
  getAllServices: (req, res) => {
    ServiceModel.getAllServices((err, services) => {
      if (err) {
        console.error('Erreur lors de la récupération des services:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des services' });
      } else {
        res.json(services);
      }
    });
  },

  // Récupérer un service par ID
  getServiceById: (req, res) => {
    const id = req.params.id;
    ServiceModel.getById(id, (err, service) => {
      if (err) {
        console.error('Erreur lors de la récupération du service:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération du service' });
      } else if (!service) {
        res.status(404).json({ message: 'Service non trouvé' });
      } else {
        res.json(service);
      }
    });
  },

  // Créer un service
  createService: (req, res) => {
    const { nom,Id } = req.body;
    ServiceModel.create(nom,Id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du service:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création du service' });
      } else {
        res.status(201).json({ message: 'Service créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un service
  updateService: (req, res) => {
    const id = req.params.id;
    const { nom,Id } = req.body;
    ServiceModel.update(id, nom, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du service:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du service' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Service non trouvé' });
      } else {
        res.json({ message: 'Service mis à jour avec succès' });
      }
    });
  },

  // Supprimer un service
  deleteService: (req, res) => {
    const id = req.params.id;
    ServiceModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du service:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression du service' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Service non trouvé' });
      } else {
        res.json({ message: 'Service supprimé avec succès' });
      }
    });
  }
};
