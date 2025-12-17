// ✅ inject.js - Widget Assistenza Clienti Ketozona (versione stabile e responsive)

(function () {
  console.log("✅ Avvio widget Botpress Ketozona...");

  // Carica il webchat client ufficiale (se non già presente)
  if (!window.botpressWebChat) {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
    script.async = true;

    script.onload = function () {
      console.log("🚀 Botpress WebChat client caricato, inizializzo il bot...");
      initBotpressWidget();
    };

    document.body.appendChild(script);
  } else {
    initBotpressWidget();
  }

  // 🔹 Funzione principale per inizializzare il widget
  function initBotpressWidget() {
    try {
      window.botpressWebChat.init({
        botId: "assistenzaclienti",
        hostUrl: "https://ketozona-botpress.onrender.com",
        messagingUrl: "https://ketozona-botpress.onrender.com",
        clientId: "web",
        showConversationsButton: true,
        enableReset: true,
        showCloseButton: true,
        showPoweredBy: false,
        hideWidget: false,
        stylesheet: "https://cdn.botpress.cloud/webchat/v0/inject.css",
        botName: "Assistenza Clienti Ketozona",
        avatarUrl: "https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg",
        useSessionStorage: true,
        enableTranscriptDownload: false,
        theme: "light",
        position: "right",
        layoutWidth: "400px",
        layoutHeight: "600px"
      });

      console.log("💬 Widget Ketozona inizializzato correttamente.");
      setTimeout(repositionChat, 2000);
    } catch (err) {
      console.error("❌ Errore durante l'inizializzazione del widget:", err);
    }
  }

  // 🔹 Gestione responsive e posizione
  function repositionChat() {
    const chatFrame = document.querySelector("iframe#bp-web-widget");
    if (chatFrame) {
      chatFrame.style.position = "fixed";
      chatFrame.style.right = "10px";
      chatFrame.style.zIndex = "9999";

      if (window.innerWidth <= 768) {
        // 📱 Mobile / tablet
        chatFrame.style.width = "85vw";
        chatFrame.style.height = "75vh";
        chatFrame.style.bottom = "10px";
        chatFrame.style.top = "auto";
      } else {
        // 💻 Desktop (centrato a metà altezza)
        chatFrame.style.width = "400px";
        chatFrame.style.height = "600px";
        chatFrame.style.top = "45%";
        chatFrame.style.transform = "translateY(-50%)";
      }

      console.log("🎯 Widget posizionato correttamente.");
    } else {
      console.warn("⏳ Widget non ancora pronto, riprovo...");
      setTimeout(repositionChat, 1500);
    }
  }

  // 🔁 Riadatta in caso di resize
  window.addEventListener("resize", repositionChat);
})();

