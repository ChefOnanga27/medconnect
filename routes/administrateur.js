import express from 'express';
import { AdministrateurController } from '../controllers/administrateur.js';

const administrateur = express.Router();

administrateur.get('/administrateur', AdministrateurController.getAllAdministrateurs);
administrateur.get('/administrateur/:id', AdministrateurController.getAdministrateurById);
administrateur.post('/administrateur', AdministrateurController.createAdministrateur);
administrateur.put('/administrateur/:id', AdministrateurController.updateAdministrateur);
administrateur.delete('/administrateur/:id', AdministrateurController.deleteAdministrateur);

export default administrateur;
