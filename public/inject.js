// ✅ inject.js — Widget Assistenza Clienti Ketozona (versione stabile)
document.addEventListener('DOMContentLoaded', function () {
  console.log("🚀 DOM pronto — avvio script Botpress Ketozona");

  // 1️⃣ Carica la libreria Botpress ufficiale dal CDN
  const coreScript = document.createElement('script');
  coreScript.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
  coreScript.async = true;

  coreScript.onload = function () {
    console.log("✅ Libreria Botpress caricata, inizializzo...");

    const checkReady = setInterval(() => {
      if (window.botpressWebChat && window.botpressWebChat.init) {
        clearInterval(checkReady);
        console.log("🤖 Botpress disponibile — inizializzo widget");

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

        createChatButton();
      }
    }, 500);
  };

  coreScript.onerror = function () {
    console.error("❌ Errore nel caricamento della libreria Botpress!");
  };

  document.head.appendChild(coreScript);

  // 5️⃣ Bottone sinistro personalizzato
  function createChatButton() {
    console.log("🟢 Creo bottone chat personalizzato...");
    if (document.getElementById('botpress-chat-launcher')) return;

    const chatBtn = document.createElement('div');
    chatBtn.id = 'botpress-chat-launcher';
    chatBtn.style.position = 'fixed';
    chatBtn.style.left = '20px';
    chatBtn.style.top = '50%';
    chatBtn.style.transform = 'translateY(-50%)';
    chatBtn.style.zIndex = '99999';
    chatBtn.style.cursor = 'pointer';
    chatBtn.style.transition = 'transform 0.2s ease';
    chatBtn.innerHTML = `
      <img src="https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg"
           alt="Assistenza Ketozona"
           style="width:80px;height:80px;border-radius:50%;
                  box-shadow:0 4px 10px rgba(0,0,0,0.25);
                  border:3px solid #fff;">
    `;
    document.body.appendChild(chatBtn);

    chatBtn.addEventListener('mouseenter', () => chatBtn.style.transform = 'translateY(-50%) scale(1.1)');
    chatBtn.addEventListener('mouseleave', () => chatBtn.style.transform = 'translateY(-50%) scale(1)');

    chatBtn.addEventListener('click', function () {
      console.log("💬 Clic bottone chat rilevato");
      if (window.botpressWebChat && window.botpressWebChat.sendEvent) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        console.warn("⏳ Botpress non pronto, ritento tra 1s...");
        setTimeout(() => {
          if (window.botpressWebChat && window.botpressWebChat.sendEvent)
            window.botpressWebChat.sendEvent({ type: 'show' });
        }, 1000);
      }
    });
  }
});

