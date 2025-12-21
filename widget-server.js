// ✅ widget-server.js — versione finale compatibile con Render

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Log diagnostico
console.log("📁 Public path:", path.join(__dirname, 'public'));

// ✅ Serve i file statici
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Rotta di test
app.get('/', (req, res) => {
  res.send(`
    <h2>✅ Widget Ketozona Botpress attivo e funzionante</h2>
    <p>File disponibili:</p>
    <ul>
      <li><a href="/inject.js">/inject.js</a></li>
      <li><a href="/webchat.js">/webchat.js</a></li>
      <li><a href="/webchat.html">/webchat.html</a></li>
    </ul>
  `);
});

// ✅ Rotta esplicita per webchat.html (fallback totale)
app.get(['/webchat', '/webchat.html'], (req, res) => {
  const filePath = path.join(__dirname, 'public', 'webchat.html');
  console.log("📄 Tentativo di invio file:", filePath);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error("❌ Errore nel servire webchat.html:", err);
      res.status(500).send("Errore interno nel caricamento del file");
    }
  });
});

// ✅ Avvia il server
app.listen(PORT, () => {
  console.log(`🚀 Server Ketozona-Botpress attivo su porta ${PORT}`);
});
