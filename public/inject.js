// ✅ inject.js — Debug versione assistenza Ketozona
(function () {
  console.log("🚀 Script inject.js avviato");

  // 1️⃣ Carica la libreria Botpress ufficiale
  const coreScript = document.createElement('script');
  coreScript.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
  coreScript.async = true;

  coreScript.onload = function () {
    console.log("✅ Libreria Botpress caricata — inizializzo controllo...");

    // 2️⃣ Aspetta che window.botpressWebChat esista
    const checkReady = setInterval(() => {
      if (window.botpressWebChat && window.botpressWebChat.init) {
        clearInterval(checkReady);
        console.log("✅ botpressWebChat disponibile — inizializzo widget");

        // 3️⃣ Inizializzazione
        window.botpressWebChat.init({
          botId: 'assistenzaclienti',
          hostUrl: 'https://ketozona-botpress.onrender.com',
          messagingUrl: 'https://ketozona-botpress.onrender.com',
          clientId: 'web',
          showConversationsButton: false,
          enableReset: true,
          showCloseButton: true,
          showPoweredBy: false,
          hideWidget: true,
          stylesheet: 'https://cdn.botpress.cloud/webchat/v0/inject.css',
          botName: 'Assistenza Ketozona',
          avatarUrl: 'https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg',
          theme: 'light',
          useSessionStorage: true,
          layoutWidth: '400px',
          layoutHeight: '600px'
        });

        console.log("🤖 Widget Botpress inizializzato con successo");
        createChatButton();
      }
    }, 500);
  };

  coreScript.onerror = function () {
    console.error("❌ Errore nel caricamento della libreria Botpress!");
  };

  document.head.appendChild(coreScript);

  // 4️⃣ Crea il bottone sinistro
  function createChatButton() {
    console.log("🟢 Creo bottone chat personalizzato...");

    if (document.getElementById('botpress-chat-launcher')) {
      console.warn("⚠️ Bottone già presente, salto creazione.");
      return;
    }

    const chatBtn = document.createElement('div');
    chatBtn.id = 'botpress-chat-launcher';
    chatBtn.style.position = 'fixed';
    chatBtn.style.left = '20px';
    chatBtn.style.top = '50%';
    chatBtn.style.transform = 'translateY(-50%)';
    chatBtn.style.zIndex = '99999';
    chatBtn.style.cursor = 'pointer';
    chatBtn.innerHTML = `
      <img src="https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg"
           alt="Assistenza Ketozona"
           style="width:80px;height:80px;border-radius:50%;
                  box-shadow:0 4px 10px rgba(0,0,0,0.25);
                  border:3px solid #fff;">
    `;
    document.body.appendChild(chatBtn);

    // 🧠 Clic: apri widget
    chatBtn.addEventListener('click', function () {
      console.log("💬 Clic bottone chat rilevato");
      if (window.botpressWebChat && window.botpressWebChat.sendEvent) {
        console.log("✅ Apro widget Botpress");
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        console.warn("⏳ Botpress non ancora pronto, ritento tra 1s...");
        setTimeout(() => {
          if (window.botpressWebChat && window.botpressWebChat.sendEvent) {
            window.botpressWebChat.sendEvent({ type: 'show' });
          }
        }, 1000);
      }
    });
  }
})();

