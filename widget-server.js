// ✅ widget-server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Percorsi assoluti
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve i file statici da /public
app.use(express.static(path.join(__dirname, 'public')));

// ✅ Rotta base per test
app.get('/', (req, res) => {
  res.send('<h2>✅ Widget Ketozona Botpress attivo</h2>');
});

// ✅ Rotta esplicita per webchat
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'webchat.html'));
});

// ✅ Avvio server
app.listen(PORT, () => {
  console.log(`🚀 Server Ketozona-Botpress attivo su porta ${PORT}`);
});
