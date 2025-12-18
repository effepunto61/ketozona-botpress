// ✅ inject.js - Versione funzionante (bot attivo al clic)
(function () {
  // Carica script Botpress
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
  script.async = true;

  script.onload = function () {
    console.log("✅ Botpress WebChat caricata");

    // Inizializza la chat
    window.botpressWebChat.init({
      botId: "assistenzaclienti",
      hostUrl: "https://ketozona-botpress.onrender.com",
      messagingUrl: "https://ketozona-botpress.onrender.com",
      clientId: "web",
      showConversationsButton: false,
      showCloseButton: true,
      showPoweredBy: false,
      hideWidget: true, // 👈 nasconde il widget originale
      enableReset: true,
      stylesheet: "https://cdn.botpress.cloud/webchat/v0/inject.css",
      botName: "Assistenza Clienti Ketozona",
      layoutWidth: "400px",
      layoutHeight: "600px",
      useSessionStorage: true,
      enableTranscriptDownload: false,
    });

    // 🎨 Bottone personalizzato
    const btn = document.createElement("img");
    btn.src = "https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg";
    btn.alt = "Assistenza Clienti Ketozona";
    btn.id = "assistenzaclienti-btn";

    Object.assign(btn.style, {
      position: "fixed",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "95px",
      height: "95px",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: "9999",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: "transform 0.2s ease-in-out",
    });

    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "translateY(-50%) scale(1.08)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translateY(-50%)";
    });

    // ✅ Al click → mostra/nasconde la chat
    btn.addEventListener("click", () => {
      console.log("💬 Click su bottone assistenza");
      window.botpressWebChat.sendEvent({ type: "toggle" });
    });

    document.body.appendChild(btn);

    // 📱 Adattamento mobile
    function repositionChat() {
      const frame = document.querySelector("iframe#bp-web-widget");
      if (frame) {
        frame.style.position = "fixed";
        frame.style.right = "10px";
        frame.style.zIndex = "9998";
        if (window.innerWidth <= 768) {
          frame.style.width = "85vw";
          frame.style.height = "75vh";
          frame.style.bottom = "10px";
          frame.style.top = "auto";
        } else {
          frame.style.width = "400px";
          frame.style.height = "600px";
          frame.style.top = "45%";
          frame.style.transform = "translateY(-50%)";
        }
      }
    }
    window.addEventListener("resize", repositionChat);
    setTimeout(repositionChat, 2000);
  };

  document.body.appendChild(script);
})();
