function toggleText(button, message) {
    const nextElement = button.nextElementSibling;
    
    if (nextElement && nextElement.classList.contains("text-container")) {

      nextElement.remove();
    } else {
      const textDiv = document.createElement("div");
      textDiv.className = "text-container";

      const newText = document.createElement("p");
      newText.className = "text-output";
      newText.innerText = message;

      textDiv.appendChild(newText);

      button.insertAdjacentElement('afterend', textDiv);
    }
  }