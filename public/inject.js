// ✅ inject.js - Widget Assistenza Clienti Ketozona (versione corretta con caricamento sicuro)

// 1. Crea e carica la libreria Botpress ufficiale prima della configurazione
(function () {
  const coreScript = document.createElement('script');
  coreScript.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
  coreScript.async = true;

  coreScript.onload = function () {
    console.log('✅ Libreria Botpress ufficiale caricata.');

    // Ora inizializza il widget
    window.botpressWebChat.init({
      botId: 'assistenzaclienti',
      hostUrl: 'https://ketozona-botpress.onrender.com',
      messagingUrl: 'https://ketozona-botpress.onrender.com',
      clientId: 'web',
      showConversationsButton: true,
      enableReset: true,
      showCloseButton: true,
      showPoweredBy: false,
      hideWidget: false,
      stylesheet: 'https://cdn.botpress.cloud/webchat/v0/inject.css',
      botName: 'Assistenza Clienti Ketozona',
      avatarUrl: 'https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg',
      useSessionStorage: true,
      enableTranscriptDownload: false,
      theme: 'light',
      position: 'right',
      layoutWidth: '400px',
      layoutHeight: '600px'
    });

    console.log('🤖 Widget Botpress inizializzato.');
  };

  coreScript.onerror = function () {
    console.error('❌ Errore nel caricamento della libreria Botpress ufficiale.');
  };

  document.head.appendChild(coreScript);
})();

