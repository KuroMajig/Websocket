const WebSocket = require('ws');

// Membuat server WebSocket pada port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', ws => {
    console.log('Client connected');

    // Kirim pesan ke klien saat terhubung
    ws.send('Welcome to the WebSocket server!');

    // Menerima pesan dari klien
    ws.on('message', message => {
        console.log(`Received: ${message}`);
    });

    // Menangani penutupan koneksi
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
