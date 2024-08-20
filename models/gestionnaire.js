import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const GestionnaireModel = {
  // Créer un gestionnaire
  create: (nom, prenom, email, telephone, callback) => {
    const query = 'INSERT INTO gestionnaires (nom, prenom, email, telephone) VALUES (?, ?, ?, ?)';
    const values = [nom, prenom, email, telephone];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du gestionnaire: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les gestionnaires
  getAllGestionnaires: (callback) => {
    const query = 'SELECT * FROM gestionnaires';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des gestionnaires: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un gestionnaire par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM gestionnaires WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du gestionnaire par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un gestionnaire
  update: (id, nom, prenom, email, telephone, callback) => {
    const query = 'UPDATE gestionnaires SET nom = ?, prenom = ?, email = ?, telephone = ? WHERE id = ?';
    const values = [nom, prenom, email, telephone, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du gestionnaire: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un gestionnaire
  delete: (id, callback) => {
    const query = 'DELETE FROM gestionnaires WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du gestionnaire: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
