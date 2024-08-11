document.addEventListener("DOMContentLoaded", function () {
  const text =
    "Hi, I'm Julia Philips. I'm a senior manager at Apple company . . .";
  const typingContainer = document.getElementById("typing-container");
  let index = 0;

  function typeText() {
    if (index < text.length) {
      typingContainer.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeText, 100); // Adjust speed by changing the value (in ms)
    }
  }
  typeText();
});
