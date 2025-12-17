// ✅ widget-server.js - Server per widget Botpress Ketozona
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4001;

// Necessario per ricavare il percorso assoluto della cartella corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Serve i file statici nella cartella "public"
app.use(express.static(path.join(__dirname, "public")));

// ✅ Route principale per testare se il server funziona
app.get("/", (req, res) => {
  res.send("<h2>✅ Widget Ketozona Botpress attivo</h2>");
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`🚀 Server widget in esecuzione su http://localhost:${PORT}`);
});

