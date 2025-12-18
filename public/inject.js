// ✅ inject.js - Widget Assistenza Clienti Ketozona (versione finale)

(function () {
  // Carica lo script del webchat Botpress
  const bpScript = document.createElement("script");
  bpScript.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
  bpScript.async = true;

  bpScript.onload = function () {
    console.log("💬 Botpress WebChat caricato!");

    window.botpressWebChat.init({
      botId: "assistenzaclienti",
      hostUrl: "https://ketozona-botpress.onrender.com",
      messagingUrl: "https://ketozona-botpress.onrender.com",
      clientId: "web",
      showConversationsButton: false, // disattiviamo il pulsante standard
      enableReset: true,
      showCloseButton: true,
      showPoweredBy: false,
      hideWidget: false,
      stylesheet: "https://cdn.botpress.cloud/webchat/v0/inject.css",
      botName: "Assistenza Clienti Ketozona",
      useSessionStorage: true,
      enableTranscriptDownload: false,
      layoutWidth: "400px",
      layoutHeight: "600px",
      theme: "light",
    });

    // 🎨 Aggiungi bottone flottante personalizzato
    const button = document.createElement("img");
    button.src =
      "https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg"; // la tua immagine verde
    button.alt = "Assistenza clienti Ketozona";
    button.id = "assistenzabot-btn";

    Object.assign(button.style, {
      position: "fixed",
      right: "20px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "100px",
      height: "100px",
      cursor: "pointer",
      zIndex: "9999",
      borderRadius: "50%",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",
    });

    button.addEventListener("mouseenter", () => {
      button.style.transform = "translateY(-50%) scale(1.05)";
    });
    button.addEventListener("mouseleave", () => {
      button.style.transform = "translateY(-50%) scale(1)";
    });

    // ✅ Mostra/Nasconde la chat quando clicchi il bottone
    button.addEventListener("click", () => {
      window.botpressWebChat.sendEvent({ type: "toggle" });
    });

    document.body.appendChild(button);

    // 📱 Adattamento mobile
    function repositionChat() {
      const chatFrame = document.querySelector("iframe#bp-web-widget");
      if (chatFrame) {
        chatFrame.style.position = "fixed";
        chatFrame.style.right = "10px";
        chatFrame.style.zIndex = "9998";
        if (window.innerWidth <= 768) {
          chatFrame.style.width = "85vw";
          chatFrame.style.height = "75vh";
          chatFrame.style.bottom = "10px";
          chatFrame.style.top = "auto";
        } else {
          chatFrame.style.width = "400px";
          chatFrame.style.height = "600px";
          chatFrame.style.top = "45%";
          chatFrame.style.transform = "translateY(-50%)";
        }
      }
    }

    window.addEventListener("resize", repositionChat);
    setTimeout(repositionChat, 2000);
  };

  document.body.appendChild(bpScript);
})();
