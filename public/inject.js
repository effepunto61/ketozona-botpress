// ✅ inject.js — Widget Assistenza Ketozona (versione finale FIX webchat)

document.addEventListener('DOMContentLoaded', function () {
  console.log("🚀 DOM pronto — caricamento Botpress Ketozona");

  // 1️⃣ Carica la libreria corretta del webchat (attenzione al .js finale)
  const coreScript = document.createElement('script');
  coreScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
  coreScript.async = true;

  coreScript.onload = function () {
    console.log("✅ Libreria Botpress caricata con successo");

    // 2️⃣ Attendi che botpressWebChat sia disponibile
    const checkReady = setInterval(() => {
      if (window.botpressWebChat && window.botpressWebChat.init) {
        clearInterval(checkReady);
        console.log("🤖 Botpress pronto — inizializzo il widget");

        // 3️⃣ Inizializza il widget (nascosto all'avvio)
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
          botName: 'Assistenza Ketozona',
          avatarUrl: 'https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg',
          theme: 'light',
          useSessionStorage: true,
          layoutWidth: '400px',
          layoutHeight: '600px'
        });

        // 4️⃣ Crea bottone chat a sinistra, metà pagina
        createChatButton();
      }
    }, 500);
  };

  coreScript.onerror = function () {
    console.error("❌ Errore nel caricamento della libreria webchat.js");
  };

  document.head.appendChild(coreScript);

  // 🔹 Funzione per creare il bottone chat
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

    // Effetto hover
    chatBtn.addEventListener('mouseenter', () => chatBtn.style.transform = 'translateY(-50%) scale(1.1)');
    chatBtn.addEventListener('mouseleave', () => chatBtn.style.transform = 'translateY(-50%) scale(1)');

    // Clic per aprire il widget
    chatBtn.addEventListener('click', function () {
      console.log("💬 Bottone chat cliccato");
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
});
