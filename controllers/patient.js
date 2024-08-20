import { PatientModel } from '../models/patient.js';

 export const PatientController = {
  // Récupérer tous les patients
  getAllPatients: (req, res) => {
    PatientModel.getAllPatients((err, patients) => {
      if (err) {
        console.error('Erreur lors de la récupération des patients:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des patients' });
      } else {
        res.json(patients);
      }
    });
  },

  // Récupérer un patient par ID
  getPatientById: (req, res) => {
    const id = req.params.id;
    PatientModel.getById(id, (err, patient) => {
      if (err) {
        console.error('Erreur lors de la récupération du patient:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération du patient' });
      } else if (!patient) {
        res.status(404).json({ message: 'Patient non trouvé' });
      } else {
        res.json(patient);
      }
    });
  },

  // Créer un patient
  createPatient: (req, res) => {
    const { nom, prenom, dateNaissance, email, telephone } = req.body;
    PatientModel.create(nom, prenom, dateNaissance, email, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création du patient:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création du patient' });
      } else {
        res.status(201).json({ message: 'Patient créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un patient
  updatePatient: (req, res) => {
    const id = req.params.id;
    const { nom, prenom, dateNaissance, email, telephone } = req.body;
    PatientModel.update(id, nom, prenom, dateNaissance, email, telephone, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du patient:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour du patient' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Patient non trouvé' });
      } else {
        res.json({ message: 'Patient mis à jour avec succès' });
      }
    });
  },

  // Supprimer un patient
  deletePatient: (req, res) => {
    const id = req.params.id;
    PatientModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression du patient:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression du patient' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Patient non trouvé' });
      } else {
        res.json({ message: 'Patient supprimé avec succès' });
      }
    });
  }
};
