`# Websocket

<h1>Hasil Simulasi Websocket berserta Kode HTML dan Javascript</h1>

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>WebSocket Client Simulation</title>
</head>

<body>
    <h2>Simulasi WebSocket (tanpa Node.js)</h2>

    <input type="text" id="inputMessage" placeholder="Tulis pesan">
    <button onclick="sendMessage()">Kirim</button>

    <div id="log"></div>

    <script>
        // Ganti URL ini sesuai server publik WebSocket
        const socket = new WebSocket("wss://ws.ifelse.io");

        socket.onopen = () => {
            log("✅ WebSocket Terhubung.");
        };

        socket.onmessage = (event) => {
            log("📩 Balasan dari server: " + event.data);
        };

        socket.onclose = () => {
            log("❌ Koneksi WebSocket ditutup.");
        };

        socket.onerror = (error) => {
            log("⚠️ Terjadi error: " + error.message);
        };

        function sendMessage() {
            const message = document.getElementById("inputMessage").value;
            socket.send(message);
            log("📤 Pesan dikirim: " + message);
        }

        function log(message) {
            const logDiv = document.getElementById("log");
            logDiv.innerHTML += "<p>" + message + "</p>";
        }
    </script>
</body>

</html>
```

<h3>Javascript</h3>

```
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
```
