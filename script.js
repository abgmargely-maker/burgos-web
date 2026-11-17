(() => {
  const chat = document.getElementById("chatbot");
  const toggle = document.getElementById("toggleChat");
  const close = document.getElementById("closeChat");
  const response = document.getElementById("chatResponse");
  if (!chat || !toggle || !close || !response) return;

  const options = [...document.querySelectorAll(".chat-option")];

  function showChat(open) {
    chat.classList.toggle("show", open);
    chat.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    if (open) close.focus();
    else toggle.focus();
  }

  toggle.addEventListener("click", () => showChat(!chat.classList.contains("show")));
  close.addEventListener("click", () => showChat(false));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && chat.classList.contains("show")) showChat(false);
  });

  options.forEach(option => {
    option.addEventListener("click", () => {
      const service = option.dataset.service || "asesoría jurídica";
      options.forEach(item => item.classList.toggle("active-option", item === option));
      response.replaceChildren();

      const message = document.createElement("div");
      message.className = "bot-message";
      message.textContent = `Gracias por tu interés en ${service}. Podemos orientarte de forma personalizada. Continúa por WhatsApp para compartirnos brevemente tu situación.`;

      const link = document.createElement("a");
      link.className = "chat-wa-btn";
      link.target = "_blank";
      link.rel = "noopener";
      link.href = "https://wa.me/529996082755?text=" + encodeURIComponent(
        `Hola, me comunico desde la página web de Burgos Abogados. Deseo asesoría sobre: ${service}.`
      );
      link.innerHTML = '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> Continuar por WhatsApp';

      response.append(message, link);
    });
  });
})();
