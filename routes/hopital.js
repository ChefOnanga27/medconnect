import express from 'express';
import { HopitalController } from '../controllers/hopital.js';

const hopital = express.Router();

hopital.get('/hopital', HopitalController.getAllHopitaux);
hopital.get('/hopital/:id', HopitalController.getHopitalById);
hopital.post('/hopital', HopitalController.createHopital);
hopital.put('/hopital/:id', HopitalController.updateHopital);
hopital.delete('/hopital/:id', HopitalController.deleteHopital);

export default hopital;
