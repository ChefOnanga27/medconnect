import express from 'express';
import { ServiceController } from '../controllers/service.js';

const service= express.Router();

// Routes pour les services
service.get('/service', ServiceController.getAllServices);

// Routes pour les services (avec id)
service.get('/service/:id', ServiceController.getServiceById);

// Routes pour les services (avec creation, modification, suppression)
service.post('/service', ServiceController.createService);
// Routes pour les services (avec modification)
service.put('/service/:id', ServiceController.updateService);
// Routes pour les services (avec suppression)
service.delete('/service/:id', ServiceController.deleteService);

export default service;
