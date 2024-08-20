import express from 'express';
import { PatientController } from '../controllers/patient.js';

const patient = express.Router();

//routes pour les patients
patient.get('/patients', PatientController.getAllPatients);

// routes pour les patients par ID
patient.get('/patients/:id', PatientController.getPatientById);

//routes pour les patients par création
patient.post('/patients', PatientController.createPatient);

//routes pour les patients par modification
patient.put('/patients/:id', PatientController.updatePatient);

//routes pour les patients par suppression
patient.delete('/patients/:id', PatientController.deletePatient);

export default patient;
