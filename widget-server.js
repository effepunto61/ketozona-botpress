// ✅ widget-server.js — versione finale corretta per Render

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

// ✅ Serve i file statici dalla cartella /public
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

// ✅ Rotta base di test
app.get('/', (req, res) => {
  res.send(`
    <h2>✅ Widget Ketozona Botpress attivo e funzionante</h2>
    <p>Prova a caricare i file statici:</p>
    <ul>
      <li><a href="/inject.js">/inject.js</a></li>
      <li><a href="/webchat.js">/webchat.js</a></li>
      <li><a href="/webchat.html">/webchat.html</a></li>
    </ul>
  `);
});

// ✅ Rotta esplicita per /webchat.html
app.get('/webchat.html', (req, res) => {
  res.sendFile(path.join(publicPath, 'webchat.html'));
});

// ✅ Avvio server
app.listen(PORT, () => {
  console.log(`🚀 Server Ketozona-Botpress attivo su porta ${PORT}`);
});
