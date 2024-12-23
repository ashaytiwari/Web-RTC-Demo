const socket = io("http://localhost:8000");

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

socket.on("message", (data) => {
  const li = document.createElement("li");
  li.textContent = data;
  document.getElementById("messages").appendChild(li);
});

function sendMessage() {
  const message = document.getElementById("message").value;
  socket.emit("message", message);
}