
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { dbConnect } from './config/db.js';

import administrateur from './routes/administrateur.js';
import gestionnaire from './routes/gestionnaire.js';
import hopital from './routes/hopital.js';
import medecin from './routes/medecin.js';
import patient from './routes/patients.js';
import { RendezvousRouter } from './routes/rendezvousRoute.js';
import service from './routes/service.js';


// Charger les variables d'environnement
dotenv.config();

import express from 'express';
const app = express();

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


//appel des routes 
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/api', RendezvousRouter)
app.use('/api', patient)
 app.use('/api', medecin)
app.use('/api', hopital)
 app.use('api',gestionnaire)
 app.use('api',administrateur)
 app.use('/api', service)

