// ✅ inject.js - Widget Ketozona Botpress

(function () {
  const script = document.createElement('script');
  script.src = 'https://ketozona-botpress.onrender.com/assets/modules/channel-web/inject.js';
  script.async = true;
  script.onload = function () {
    window.botpressWebChat.init({
      botId: 'assistenzaclienti',
      hostUrl: 'https://ketozona-botpress.onrender.com',
      messagingUrl: 'https://ketozona-botpress.onrender.com',
      showConversationsButton: true,
      enableReset: true,
      stylesheet: 'https://cdn.botpress.cloud/webchat/v0/inject.css',
      botName: 'Assistenza Ketozona',
      avatarUrl: 'https://ketozona.com/img/assistenza-bot-icon.png',
      layoutWidth: '400px',
      layoutHeight: '600px',
      enableTranscriptDownload: false,
      showUserAvatar: true,
      showBotAvatar: true,
    });
  };
  document.body.appendChild(script);
})();
