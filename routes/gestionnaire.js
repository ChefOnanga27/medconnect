import express from 'express';
import { GestionnaireController } from '../controllers/gestionnaire.js';

const gestionnaire = express.Router();

gestionnaire.get('/gestionnaire', GestionnaireController.getAllGestionnaires);
gestionnaire.get('/gestionnaire/:id', GestionnaireController.getGestionnaireById);
gestionnaire.post('/gestionnaire', GestionnaireController.createGestionnaire);
gestionnaire.put('/gestionnaire/:id', GestionnaireController.updateGestionnaire);
gestionnaire.delete('/gestionnaire/:id', GestionnaireController.deleteGestionnaire);

export default gestionnaire;
