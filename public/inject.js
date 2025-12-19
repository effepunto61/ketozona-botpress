// ✅ inject.js — Widget Assistenza Clienti Ketozona (versione anti-Elementor)
(function loadBotpressWidget() {
  console.log("🚀 Avvio forzato widget Botpress Ketozona");

  // Evita doppi caricamenti
  if (window.__botpressLoading) return;
  window.__botpressLoading = true;

  // 1️⃣ Inietta manualmente lo script Botpress ufficiale
  const script = document.createElement("script");
  script.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
  script.async = true;

  script.onload = () => {
    console.log("✅ Libreria Botpress caricata — attendo disponibilità...");

    const waitForBP = setInterval(() => {
      if (window.botpressWebChat && window.botpressWebChat.init) {
        clearInterval(waitForBP);
        console.log("🤖 Botpress pronto — inizializzo widget");

        // 2️⃣ Inizializza il widget
        window.botpressWebChat.init({
          botId: "assistenzaclienti",
          hostUrl: "https://ketozona-botpress.onrender.com",
          messagingUrl: "https://ketozona-botpress.onrender.com",
          clientId: "web",
          showConversationsButton: false,
          enableReset: true,
          showCloseButton: true,
          showPoweredBy: false,
          hideWidget: true,
          stylesheet: "https://cdn.botpress.cloud/webchat/v0/inject.css",
          botName: "Assistenza Ketozona",
          avatarUrl:
            "https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg",
          theme: "light",
          useSessionStorage: true,
          layoutWidth: "400px",
          layoutHeight: "600px",
        });

        console.log("✅ Widget Botpress inizializzato con successo");
        createChatButton();
      }
    }, 1000);
  };

  script.onerror = () =>
    console.error("❌ Errore nel caricamento della libreria Botpress");

  document.head.appendChild(script);

  // 3️⃣ Bottone personalizzato sinistro
  function createChatButton() {
    if (document.getElementById("botpress-chat-launcher")) return;

    const chatBtn = document.createElement("div");
    chatBtn.id = "botpress-chat-launcher";
    chatBtn.style.position = "fixed";
    chatBtn.style.left = "20px";
    chatBtn.style.top = "50%";
    chatBtn.style.transform = "translateY(-50%)";
    chatBtn.style.zIndex = "99999";
    chatBtn.style.cursor = "pointer";
    chatBtn.style.transition = "transform 0.2s ease";
    chatBtn.innerHTML = `
      <img src="https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg"
           alt="Assistenza Ketozona"
           style="width:80px;height:80px;border-radius:50%;
                  box-shadow:0 4px 10px rgba(0,0,0,0.25);
                  border:3px solid #fff;">
    `;
    document.body.appendChild(chatBtn);

    chatBtn.addEventListener("mouseenter", () =>
      (chatBtn.style.transform = "translateY(-50%) scale(1.1)")
    );
    chatBtn.addEventListener("mouseleave", () =>
      (chatBtn.style.transform = "translateY(-50%) scale(1)")
    );

    chatBtn.addEventListener("click", () => {
      console.log("💬 Clic su bottone chat");
      if (window.botpressWebChat && window.botpressWebChat.sendEvent) {
        window.botpressWebChat.sendEvent({ type: "show" });
      } else {
        console.warn("⏳ Botpress non ancora pronto, ritento...");
        setTimeout(() => {
          if (window.botpressWebChat && window.botpressWebChat.sendEvent)
            window.botpressWebChat.sendEvent({ type: "show" });
        }, 1000);
      }
    });
  }
})();

