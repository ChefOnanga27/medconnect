import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const MedecinModel = {
  // Créer un médecin
  create: (nom, prenom, specialite, hopitalId,email, callback) => {
    const query = 'INSERT INTO medecins (nom, prenom, specialite,email, hopitalId) VALUES (?, ?, ?, ?)';
    const values = [nom, prenom, specialite,email, hopitalId];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du médecin: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les médecins
  getAllMedecins: (callback) => {
    const query = 'SELECT * FROM medecin';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des médecins: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un médecin par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM medecin WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du médecin par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un médecin
  update: (id, nom, prenom, specialite,email, hopitalId, callback) => {
    const query = 'UPDATE medecin SET nom = ?, prenom = ?, specialite = ?,email= ?, hopitalId = ? WHERE id = ?';
    const values = [nom, prenom, specialite,email, hopitalId, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du médecin: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un médecin
  delete: (id, callback) => {
    const query = 'DELETE FROM medecin WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du médecin: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
