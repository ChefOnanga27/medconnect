import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const AdministrateurModel = {
  // Créer un administrateur
  create: (nom, prenom, email, motDePasse, callback) => {
    const query = 'INSERT INTO administrateurs (nom, prenom, email, motDePasse) VALUES (?, ?, ?, ?)';
    const values = [nom, prenom, email, motDePasse];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de l\'administrateur: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les administrateurs
  getAllAdministrateurs: (callback) => {
    const query = 'SELECT * FROM administrateurs';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des administrateurs: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un administrateur par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM administrateurs WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'administrateur par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un administrateur
  update: (id, nom, prenom, email, motDePasse, callback) => {
    const query = 'UPDATE administrateurs SET nom = ?, prenom = ?, email = ?, motDePasse = ? WHERE id = ?';
    const values = [nom, prenom, email, motDePasse, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'administrateur: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un administrateur
  delete: (id, callback) => {
    const query = 'DELETE FROM administrateurs WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'administrateur: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
