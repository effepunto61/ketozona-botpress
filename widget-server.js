// ✅ widget-server.js - Server minimal per Ketozona Botpress

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4000;

// Necessario per i percorsi ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve file statici nella cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// Route principale (solo messaggio di conferma)
app.get("/", (req, res) => {
  res.send("<h2>✅ Widget Ketozona Botpress attivo</h2>");
});

// Avvia server
app.listen(PORT, () => {
  console.log(`🚀 Widget server attivo su http://localhost:${PORT}`);
});
