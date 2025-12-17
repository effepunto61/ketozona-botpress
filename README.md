# 💌 Ketozona Mail Server (Botpress Integration)

Questo piccolo server Node.js gestisce l'invio delle email dal bot **Botpress** di Ketozona.  
È pensato per essere **sempre online** su [Render.com](https://render.com) ed essere richiamato da Botpress tramite HTTP.

---

## 🚀 Funzionalità

✅ Riceve richieste HTTP `POST` dal bot Botpress  
✅ Invia email tramite **Mailjet SMTP**  
✅ Restituisce una risposta JSON con stato di invio  
✅ Compatibile con ambienti locali o cloud (Render)

---

## 🧩 Endpoint disponibile

**POST** `https://<tuo-nome>.onrender.com/sendMail`

### Esempio Body JSON
```json
{
  "to": "destinatario@email.com",
  "subject": "Oggetto dell'email",
  "text": "Corpo del messaggio"
}
