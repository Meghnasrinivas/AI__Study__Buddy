function sendMessage() {

  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const userText = input.value;
  if (!userText) return;

  // show user message
  chatBox.innerHTML += `<div class="message user">${userText}</div>`;
  input.value = "";

  // send to backend
fetch("http://localhost:3000/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ message: userText })
})
.then(res => res.json())
.then(data => {
  chatBox.innerHTML += `<div class="message bot">${data.reply}</div>`;
})
.catch(error => {
  console.error("Error:", error);
  chatBox.innerHTML += `<div class="message bot">ERROR ❌</div>`;
});
}
