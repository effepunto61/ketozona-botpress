// ✅ inject.js - Widget Ketozona Botpress (versione corretta)
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
  avatarUrl: 'https://ketozona.com/img/assistenza-bot-icon.png',
  useSessionStorage: true,
  enableTranscriptDownload: false,
  theme: 'light',
  position: 'right',
  layoutWidth: '400px',
  layoutHeight: '600px'
});

// 📱 Posizionamento adattivo (mobile e desktop)
function repositionChat() {
  const chatFrame = document.querySelector('iframe#bp-web-widget');
  if (chatFrame) {
    chatFrame.style.position = 'fixed';
    chatFrame.style.right = '10px';
    chatFrame.style.zIndex = '9999';

    if (window.innerWidth <= 768) {
      chatFrame.style.width = '85vw';
      chatFrame.style.height = '75vh';
      chatFrame.style.bottom = '10px';
      chatFrame.style.top = 'auto';
    } else {
      chatFrame.style.width = '400px';
      chatFrame.style.height = '600px';
      chatFrame.style.top = '45%';
      chatFrame.style.transform = 'translateY(-50%)';
    }
  }
}

window.addEventListener('resize', repositionChat);
setTimeout(repositionChat, 2000);

