import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const GestionnaireModel = {
  create: (nom, prenom, email, telephone, callback) => {
    const query = 'INSERT INTO gestionnaire (nom, prenom, email, telephone) VALUES (?, ?, ?, ?)';
    const values = [nom, prenom, email, telephone];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du gestionnaire:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getAllGestionnaires: (callback) => {
    const query = 'SELECT * FROM gestionnaire';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des gestionnaires:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM gestionnaire WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du gestionnaire par ID:', err.message);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  },

  update: (id, nom, prenom, email, telephone, callback) => {
    const query = 'UPDATE gestionnaire SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?';
    const values = [nom, prenom, email, telephone, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du gestionnaire:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM gestionnaire WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du gestionnaire:', err.message);
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};
