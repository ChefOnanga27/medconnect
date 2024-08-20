import express from 'express';
import { GestionnaireController } from '../controllers/gestionnaire.js';

const gestionnaire = express.Router();

gestionnaire.get('/gestionnaires', GestionnaireController.getAllGestionnaires);
gestionnaire.get('/gestionnaires/:id', GestionnaireController.getGestionnaireById);
gestionnaire.post('/gestionnaires', GestionnaireController.createGestionnaire);
gestionnaire.put('/gestionnaires/:id', GestionnaireController.updateGestionnaire);
gestionnaire.delete('/gestionnaires/:id', GestionnaireController.deleteGestionnaire);

export default gestionnaire;
