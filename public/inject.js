// ✅ inject.js - Versione stabile e compatibile per Ketozona
(function () {
  console.log("🚀 Avvio script assistenza Ketozona...");

  // Carica dinamicamente lo script Botpress Cloud
  const bpScript = document.createElement("script");
  bpScript.src = "https://cdn.botpress.cloud/webchat/v0/inject.js";
  bpScript.async = true;

  // Quando lo script è caricato
  bpScript.onload = function () {
    console.log("✅ Libreria Botpress caricata, attendo inizializzazione...");

    // Attendi finché la variabile globale non è disponibile
    const waitForBotpress = setInterval(() => {
      if (window.botpressWebChat && typeof window.botpressWebChat.init === "function") {
        clearInterval(waitForBotpress);
        console.log("💬 Botpress pronto, inizializzo...");

        // Inizializza la chat
        window.botpressWebChat.init({
          botId: "assistenzaclienti",
          hostUrl: "https://ketozona-botpress.onrender.com",
          messagingUrl: "https://ketozona-botpress.onrender.com",
          clientId: "web",
          hideWidget: true,
          showCloseButton: true,
          showPoweredBy: false,
          enableReset: true,
          stylesheet: "https://cdn.botpress.cloud/webchat/v0/inject.css",
          botName: "Assistenza Clienti Ketozona",
          layoutWidth: "400px",
          layoutHeight: "600px",
          useSessionStorage: true,
        });

        // 🎨 Bottone personalizzato
        const btn = document.createElement("img");
        btn.src = "https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg";
        btn.alt = "Assistenza Clienti Ketozona";
        btn.id = "assistenzaclienti-btn";

        Object.assign(btn.style, {
          position: "fixed",
          right: "15px",
          top: "45%",
          transform: "translateY(-50%)",
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: "9999",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          transition: "transform 0.2s ease-in-out",
        });

        btn.addEventListener("mouseenter", () => {
          btn.style.transform = "translateY(-50%) scale(1.05)";
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.transform = "translateY(-50%)";
        });

        btn.addEventListener("click", () => {
          console.log("🟢 Click su bottone assistenza");
          window.botpressWebChat.sendEvent({ type: "toggle" });
        });

        document.body.appendChild(btn);

        // 📱 Gestione responsive
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
        setTimeout(repositionChat, 2500);
      }
    }, 500);
  };

  document.body.appendChild(bpScript);
})();
