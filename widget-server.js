// ✅ widget-server.js - Server statico per il widget Ketozona Botpress

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4001;

// 🔹 Serve automaticamente tutti i file dentro /public
app.use(express.static(path.join(__dirname, "public")));

// 🔹 Rotta base (pagina di test)
app.get("/", (req, res) => {
  res.send(`
    <h1>✅ Widget Ketozona Botpress attivo</h1>
    <p>Il file pubblico inject.js è servito correttamente.</p>
    <p><a href="/inject.js" target="_blank">Apri inject.js</a></p>
  `);
});

// 🔹 Avvia il server
app.listen(PORT, () => {
  console.log(`🚀 Server widget attivo su http://localhost:${PORT}`);
});
