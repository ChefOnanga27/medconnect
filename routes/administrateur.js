import express from 'express';
import { AdministrateurController } from '../controllers/administrateur.js';

const administrateur = express.Router();

administrateur.get('/administrateurs', AdministrateurController.getAllAdministrateurs);
administrateur.get('/administrateurs/:id', AdministrateurController.getAdministrateurById);
administrateur.post('/administrateurs', AdministrateurController.createAdministrateur);
administrateur.put('/administrateurs/:id', AdministrateurController.updateAdministrateur);
administrateur.delete('/administrateurs/:id', AdministrateurController.deleteAdministrateur);

export default administrateur;
