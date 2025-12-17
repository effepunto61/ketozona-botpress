// ✅ widget-server.js

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// ✅ serve il file inject.js
app.get('/inject.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'inject.js'));
});

// ✅ pagina di test
app.get('/', (req, res) => {
  res.send('<h2>✅ Widget Ketozona Botpress attivo</h2>');
});

app.listen(PORT, () => {
  console.log(`🚀 Widget server in ascolto su http://localhost:${PORT}`);
});
