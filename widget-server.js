import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve solo i file statici dalla cartella /public
app.use("/assets", express.static(path.join(__dirname, "public")));

// ✅ Route diretta per /inject.js
app.get("/inject.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "inject.js"));
});

// ✅ Route di controllo principale
app.get("/", (req, res) => {
  res.send(`
    <h2>✅ Widget Ketozona Botpress attivo</h2>
    <p>Server operativo. Per testare lo script visita <a href="/inject.js">/inject.js</a></p>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Widget server attivo su http://localhost:${PORT}`);
});


