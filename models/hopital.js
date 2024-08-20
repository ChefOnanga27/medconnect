import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const HopitalModel = {
  // Créer un hôpital
  create: (nom, adresse, telephone, callback) => {
    const query = 'INSERT INTO hopitaux (nom, adresse, telephone) VALUES (?, ?, ?)';
    const values = [nom, adresse, telephone];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de l\'hôpital: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les hôpitaux
  getAllHopitaux: (callback) => {
    const query = 'SELECT * FROM hopitaux';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des hôpitaux: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un hôpital par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM hopitaux WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'hôpital par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un hôpital
  update: (id, nom, adresse, telephone, callback) => {
    const query = 'UPDATE hopitaux SET nom = ?, adresse = ?, telephone = ? WHERE id = ?';
    const values = [nom, adresse, telephone, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'hôpital: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un hôpital
  delete: (id, callback) => {
    const query = 'DELETE FROM hopitaux WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'hôpital: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
