import mysql from 'mysql2/promise';

import { dbConnect } from '../config/db.js';

  const db = dbConnect();

  export const PatientModel = {
  // Créer un patient
  create: (nom, prenom, dateNaissance, email, telephone, callback) => {
    const query = 'INSERT INTO patient (nom, prenom, dateNaissance, email, telephone) VALUES (?, ?, ?, ?, ?)';
    const values = [nom, prenom, dateNaissance, email, telephone];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du patient: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les patients
  getAllPatients: (callback) => {
    const query = 'SELECT * FROM patient';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des patients: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un patient par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM patient WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du patient par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // On renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un patient
  update: (id, nom, prenom, dateNaissance, email, telephone, callback) => {
    const query = 'UPDATE patient SET nom = ?, prenom = ?, dateNaissance = ?, email = ?, telephone = ? WHERE id = ?';
    const values = [nom, prenom, dateNaissance, email, telephone, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du patient: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un patient
  delete: (id, callback) => {
    const query = 'DELETE FROM patient WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du patient: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
 
export default PatientModel;