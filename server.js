const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    const decodedMessage = message.toString('utf8');
    console.log('Сообщение получено с cервера:(ws://localhost:8080):', decodedMessage);

  });
});
