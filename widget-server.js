import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Serve i file statici dalla cartella /public
app.use(express.static(path.join(__dirname, "public")));

// ✅ Route diretta per lo script del widget
app.get("/inject.js", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "inject.js"));
});

// ✅ Homepage di controllo (al posto di index.html mancante)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Ketozona Botpress</title></head>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h2>✅ Widget Ketozona Botpress attivo</h2>
        <p>Server Node attivo su Render. Lo script pubblico è disponibile su:<br>
        <a href="/inject.js">/inject.js</a></p>
      </body>
    </html>
  `);
});

// ✅ Gestione di qualsiasi altra rotta inesistente
app.use((req, res) => {
  res.status(404).send("❌ Pagina non trovata");
});

app.listen(PORT, () => {
  console.log(`🚀 Widget server attivo su http://localhost:${PORT}`);
});
