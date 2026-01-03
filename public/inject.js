<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Chat Assistenza Ketozona</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- 1) Carica la libreria ufficiale Botpress Cloud -->
  <script src="https://cdn.botpress.cloud/webchat/v1/inject.js" async></script>
</head>
<body>
  <script>
    // 2) Aspetta che la libreria sia pronta e inizializza il widget
    document.addEventListener('DOMContentLoaded', function () {
      function initWebchat() {
        if (!window.botpressWebChat) {
          console.error('botpressWebChat non definito ancora, ritento...');
          setTimeout(initWebchat, 500);
          return;
        }

        window.botpressWebChat.init({
          botId: 'assistenzaclienti',
          clientId: 'web',
          messagingUrl: 'https://ketozona-botpress-2z7d.onrender.com',
          transport: 'polling',
          showConversationsButton: false,
          enableReset: true,
          showCloseButton: true,
          showPoweredBy: false,
          hideWidget: false, // QUI la chat si vede subito nella pagina iframe
          botName: 'Assistenza Ketozona',
          avatarUrl: 'https://ketozona.com/themes/warehousechild/assets/img/bot-assistenza.jpg',
          theme: 'light',
          useSessionStorage: true,
          layoutWidth: '400px',
          layoutHeight: '600px'
        });
      }

      initWebchat();
    });
  </script>
</body>
</html>

