import express from 'express';
import { HopitalController } from '../controllers/hopital.js';

const hopital = express.Router();

hopital.get('/hopitaux', HopitalController.getAllHopitaux);
hopital.get('/hopitaux/:id', HopitalController.getHopitalById);
hopital.post('/hopitaux', HopitalController.createHopital);
hopital.put('/hopitaux/:id', HopitalController.updateHopital);
hopital.delete('/hopitaux/:id', HopitalController.deleteHopital);

export default hopital;
