/* BURGOS ABOGADOS | Chatbot y botones de consulta */
(() => {
  const chat = document.getElementById("chatbot");
  const toggle = document.getElementById("toggleChat");
  const close = document.getElementById("closeChat");
  const response = document.getElementById("chatResponse");
  const options = [...document.querySelectorAll(".chat-option")];
  if (!chat || !toggle || !close || !response) return;

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

  function choose(service) {
    showChat(true);
    options.forEach(button => {
      button.classList.toggle("active-option", button.dataset.service === service);
    });
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
    const icon = document.createElement("i");
    icon.className = "fa-brands fa-whatsapp";
    link.append(icon, document.createTextNode(" Continuar por WhatsApp"));

    response.append(message, link);
    response.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  document.querySelectorAll("[data-service]").forEach(button => {
    button.addEventListener("click", () => choose(button.dataset.service));
  });
})();
