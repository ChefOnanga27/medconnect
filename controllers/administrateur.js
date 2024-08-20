import { AdministrateurModel } from '../models/administrateur.js';

export const AdministrateurController = {
  // Récupérer tous les administrateurs
  getAllAdministrateurs: (req, res) => {
    AdministrateurModel.getAllAdministrateurs((err, administrateurs) => {
      if (err) {
        console.error('Erreur lors de la récupération des administrateurs:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des administrateurs' });
      } else {
        res.json(administrateurs);
      }
    });
  },

  // Récupérer un administrateur par ID
  getAdministrateurById: (req, res) => {
    const id = req.params.id;
    AdministrateurModel.getById(id, (err, administrateur) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'administrateur:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'administrateur' });
      } else if (!administrateur) {
        res.status(404).json({ message: 'Administrateur non trouvé' });
      } else {
        res.json(administrateur);
      }
    });
  },

  // Créer un administrateur
  createAdministrateur: (req, res) => {
    const { nom, prenom, email, motDePasse } = req.body;
    AdministrateurModel.create(nom, prenom, email, motDePasse, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'administrateur:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création de l\'administrateur' });
      } else {
        res.status(201).json({ message: 'Administrateur créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un administrateur
  updateAdministrateur: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, email, motDePasse } = req.body;
    AdministrateurModel.update(id, nom, prenom, email, motDePasse, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'administrateur:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'administrateur' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Administrateur non trouvé' });
      } else {
        res.json({ message: 'Administrateur mis à jour avec succès' });
      }
    });
  },

  // Supprimer un administrateur
  deleteAdministrateur: (req, res) => {
    const id = req.params.id;
    AdministrateurModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'administrateur:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'administrateur' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Administrateur non trouvé' });
      } else {
        res.json({ message: 'Administrateur supprimé avec succès' });
      }
    });
  }
};
