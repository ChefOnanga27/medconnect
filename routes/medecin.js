import express from 'express';
import { MedecinController } from '../controllers/medecin.js';

const medecin = express.Router();

medecin.get('/medecin', MedecinController.getAllMedecins);
medecin.get('/medecin/:id', MedecinController.getMedecinById);
medecin.post('/medecin', MedecinController.createMedecin);
medecin.put('/medecin/:id', MedecinController.updateMedecin);
medecin.delete('/medecin/:id', MedecinController.deleteMedecin);

export default medecin;
