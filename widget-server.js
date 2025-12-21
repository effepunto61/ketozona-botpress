// ✅ widget-server.js — versione definitiva e corretta per Render + Botpress
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Carica le variabili d’ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Percorsi assoluti
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve correttamente tutti i file statici dalla cartella /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Gestione fallback: se qualcuno accede a /public/..., ridireziona alla root corretta
app.get('/public/*', (req, res) => {
  const filePath = req.params[0]; // prende il percorso dopo /public/
  res.sendFile(path.join(__dirname, 'public', filePath));
});

// ✅ Rotta base di test
app.get('/', (req, res) => {
  res.send(`
    <h2>✅ Widget Ketozona Botpress attivo e funzionante</h2>
    <p>Prova a caricare i file statici:</p>
    <ul>
      <li><a href="/inject.js">/inject.js</a></li>
      <li><a href="/webchat.js">/webchat.js</a></li>
    </ul>
  `);
});
// ✅ Gestisce il rendering della webchat
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'webchat.html'));
});

// ✅ Avvio server
app.listen(PORT, () => {
  console.log(`🚀 Server Ketozona-Botpress attivo su porta ${PORT}`);
});

