import express from 'express';
import { MedecinController } from '../controllers/medecin.js';

const medecin = express.Router();

medecin.get('/medecins', MedecinController.getAllMedecins);
medecin.get('/medecins/:id', MedecinController.getMedecinById);
medecin.post('/medecins', MedecinController.createMedecin);
medecin.put('/medecins/:id', MedecinController.updateMedecin);
medecin.delete('/medecins/:id', MedecinController.deleteMedecin);

export default medecin;
