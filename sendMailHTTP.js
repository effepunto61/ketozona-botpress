import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/sendMail", async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    if (!to || !subject || !text) {
      return res.status(400).json({ success: false, error: "Missing fields" });
    }

    const info = await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to,
      subject,
      text,
    });

    console.log("Email inviata:", info.messageId);
    res.json({ success: true, message: "Email inviata con successo!" });
  } catch (error) {
    console.error("Errore invio email:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server HTTP attivo su http://localhost:${PORT}`);
});
