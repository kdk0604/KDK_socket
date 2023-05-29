const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8000 }); // 포트 번호를 원하는 대로 변경하세요

wss.on('connection', (ws) => {
  console.log('새로운 클라이언트가 연결되었습니다.');

  ws.on('message', (message) => {
    console.log(`클라이언트로부터 메시지를 받았습니다: ${message}`);

    // 클라이언트로부터 받은 메시지를 다시 클라이언트에게 전송합니다.
    ws.send(`서버에서 받은 메시지: ${message}`);
  });

  ws.on('close', () => {
    console.log('클라이언트 연결이 닫혔습니다.');
  });
});

console.log('WebSocket 서버가 시작되었습니다.');