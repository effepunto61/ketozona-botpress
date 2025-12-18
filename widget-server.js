// ✅ widget-server.js — versione corretta per servire i file statici da /public

import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Percorso assoluto
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve i file statici dalla cartella /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Rotta base di test
app.get('/', (req, res) => {
  res.send('<h2>✅ Widget Ketozona Botpress attivo</h2>');
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`🚀 Server in esecuzione su porta ${PORT}`);
});
