import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

// Servire i file statici del webchat Botpress
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Reindirizza alla tua istanza Botpress
app.get('/bot', (req, res) => {
  res.redirect('https://ketozona-botpress.onrender.com');
});

// Endpoint di test
app.get('/', (req, res) => {
  res.send('<h2>✅ Widget Ketozona Botpress attivo</h2>');
});

app.listen(PORT, () => {
  console.log(`🚀 Widget server in ascolto su http://localhost:${PORT}`);
});
