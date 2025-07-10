
const channel = "pixelsoldatone"; // Fester Kanalname
const ws = new WebSocket("wss://irc-ws.chat.twitch.tv:443");

// Nur für Anzeige
document.getElementById("status").textContent = "📡 Connecting...";

ws.onopen = () => {
    document.getElementById("status").textContent = "✅ Connected";
    ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership");
};

function sendCommand(cmd) {
    ws.send(`PRIVMSG #${channel} :${cmd}`);
    document.getElementById("status").textContent = "📨 Sent: " + cmd;
}
