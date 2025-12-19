/*!
 * Botpress Webchat (build locale minimale)
 * Sorgente: https://github.com/botpress/webchat
 * Versione personalizzata per Ketozona
 */
window.botpressWebChat = {
  init: function (config) {
    console.log("✅ Botpress Webchat init() eseguito con config:", config);
    // Simula un widget di chat
    const iframe = document.createElement('iframe');
    iframe.src = config.hostUrl + '/webchat';
    iframe.style.position = 'fixed';
    iframe.style.bottom = '90px';
    iframe.style.left = '20px';
    iframe.style.width = config.layoutWidth || '400px';
    iframe.style.height = config.layoutHeight || '600px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '99999';
    iframe.style.display = 'none';
    iframe.id = 'botpress-chat-frame';
    document.body.appendChild(iframe);
    window.botpressWebChat._iframe = iframe;
  },

  sendEvent: function (event) {
    const iframe = window.botpressWebChat._iframe;
    if (!iframe) return console.warn('⚠️ Nessun iframe trovato');
    if (event.type === 'show') {
      iframe.style.display = 'block';
    } else if (event.type === 'hide') {
      iframe.style.display = 'none';
    }
  }
};
