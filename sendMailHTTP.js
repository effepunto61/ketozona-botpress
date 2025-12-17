const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.post('/sendMail', async (req, res) => {
  const { to, subject, text } = req.body;
  console.log('📩 Richiesta ricevuta per:', to);

  try {
    const response = await axios.post(
      'https://api.mailjet.com/v3.1/send',
      {
        Messages: [
          {
            From: {
              Email: process.env.MAIL_FROM,
              Name: 'Ketozona Bot'
            },
            To: [
              {
                Email: to
              }
            ],
            Subject: subject,
            TextPart: text
          }
        ]
      },
      {
        auth: {
          username: process.env.MJ_APIKEY_PUBLIC,
          password: process.env.MJ_APIKEY_PRIVATE
        }
      }
    );

    console.log('✅ Email inviata con successo:', response.data);
    res.json({ success: true, message: 'Email inviata con successo!' });
  } catch (error) {
    console.error('❌ Errore Mailjet:', error.response?.data || error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server attivo su http://localhost:${PORT}`));

