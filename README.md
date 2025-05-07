# Websocket

<h1>Hasil Simulasi Websocket berserta Kode HTML dan Javascript</h1>

'''html
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
'''
