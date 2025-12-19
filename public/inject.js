// ✅ inject.js — Widget Assistenza Clienti Ketozona (versione stabile per PrestaShop + IQITElementor)
(function () {
  console.log("🚀 Avvio widget Botpress Ketozona (versione PrestaShop-safe)");

  // Evita doppi caricamenti
  if (window.__botpressLoading) return;
  window.__botpressLoading = true;

  // 1️⃣ Carica solo il JS Botpress, senza CSS globali
  const script = document.createElement('script');
  script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
  script.async = true;

  script.onload = () => {
    console.log("✅ Libreria Botpress caricata — inizializzo...");

    const waitForBP = setInterval(() => {
      if (window.botpressWebChat && window.botpressWebChat.init) {
        clearInterval(waitForBP);

        console.log("🤖 Botpress pronto — avvio widget");

        // 2️⃣ Inizializza widget SENZA caricare inject.css
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
          stylesheet: '', // ⛔ evita il CSS Botpress che gonfia il sito
          botName: 'Assistenza Ketozona',
          avatarUrl: 'https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg',
          theme: 'light',
          useSessionStorage: true,
          layoutWidth: '400px',
          layoutHeight: '600px'
        });

        console.log("✅ Widget Botpress inizializzato");
        createChatButton();
      }
    }, 1000);
  };

  script.onerror = () =>
    console.error("❌ Errore nel caricamento della libreria Botpress");

  document.head.appendChild(script);

  // 3️⃣ Bottone chat sinistro personalizzato
  function createChatButton() {
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
      console.log("💬 Clic su bottone chat");
      if (window.botpressWebChat && window.botpressWebChat.sendEvent) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        console.warn("⏳ Botpress non ancora pronto, ritento...");
        setTimeout(() => {
          if (window.botpressWebChat && window.botpressWebChat.sendEvent)
            window.botpressWebChat.sendEvent({ type: 'show' });
        }, 1000);
      }
    });
  }
})();


