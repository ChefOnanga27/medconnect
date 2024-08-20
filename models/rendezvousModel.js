import mysql from 'mysql2/promise';
import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const RendezvousModel = {
  // Créer un rendezvous
  create: (date, heure, patientId, medecinId, callback) => {
    const query = 'INSERT INTO rendez_vous (date, heure, patientId, medecinId) VALUES (?, ?, ?, ?)';
    const values = [date, heure, patientId, medecinId];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création du rendez_vous: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les rendezvous
  getAllRendezvous: (callback) => {
    const query = 'SELECT * FROM rendez_vous';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des rendezvous: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un rendezvous par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM rendez_vous WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération du rendezvous par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // On renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un rendezvous
  update: (id, date, heure, patientId, medecinId, callback) => {
    const query = 'UPDATE rendez_vous SET date = ?, heure = ?, patientId = ?, medecinId = ? WHERE id = ?';
    const values = [date, heure, patientId, medecinId, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour du rendezvous: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un rendezvous
  delete: (id, callback) => {
    const query = 'DELETE FROM rendez_vous WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du rendezvous: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
