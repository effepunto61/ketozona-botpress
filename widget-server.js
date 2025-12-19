// ✅ widget-server.js — versione definitiva
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Carica le variabili d’ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Calcola i percorsi assoluti
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Rende pubblici i file della cartella /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Rotta base per controllo
app.get('/', (req, res) => {
  res.send('<h2>✅ Widget Ketozona Botpress attivo e funzionante</h2>');
});

// ✅ Avvio server
app.listen(PORT, () => {
  console.log(`🚀 Server Ketozona-Botpress attivo su porta ${PORT}`);
});

