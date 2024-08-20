import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const ServiceModel = {
  // Créer un service
  create: (nom,Id,description, callback) => {
    const query = 'INSERT INTO service (nom,Id,description) VALUES (?, ?, ?)';
    const values = [nom, description,Id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du service: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les services
  getAllServices: (callback) => {
    const query = 'SELECT * FROM service';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des services: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un service par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM service WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du service par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // On renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un service
  update: (id, nom,description, callback) => {
    const query = 'UPDATE service SET nom = ?, description = ?, hopitalId = ? WHERE id = ?';
    const values = [nom,id,description];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du service: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un service
  delete: (id, callback) => {
    const query = 'DELETE FROM service WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du service: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
