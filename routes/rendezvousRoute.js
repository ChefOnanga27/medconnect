import express from 'express';
import { RendezvousController } from '../controllers/rendezvousController.js';

export const RendezvousRouter = express.Router();

// Route pour obtenir tous les rendezvous
RendezvousRouter.get('/rendez_vous', RendezvousController.getAllRendezvous);

 // Route pour obtenir un rendezvous par ID
 RendezvousRouter.get('/rendez_vous/:id', RendezvousController.getRendezvousById);

 // Route pour créer un rendezvous
 RendezvousRouter.post('/rendez_vous', RendezvousController.createRendezvous);

 // Route pour mettre à jour un rendezvous
 RendezvousRouter.put('/rendez_vous/:id', RendezvousController.updateRendezvous);

// // Route pour supprimer un rendezvous
RendezvousRouter.delete('/rendez_vous/:id', RendezvousController.deleteRendezvous);
