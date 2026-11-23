/* BURGOS ABOGADOS | Chatbot y botones de consulta */
(() => {
  const chat = document.getElementById("chatbot");
  const toggle = document.getElementById("toggleChat");
  const close = document.getElementById("closeChat");
  const response = document.getElementById("chatResponse");
  const options = [...document.querySelectorAll(".chat-option")];
  const hasChatUI = Boolean(chat && toggle && close && response);

  function showChat(open) {
    if (!hasChatUI) return;
    chat.classList.toggle("show", open);
    chat.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    if (open) close.focus();
    else toggle.focus();
  }

  if (hasChatUI) {
    toggle.addEventListener("click", () => showChat(!chat.classList.contains("show")));
    close.addEventListener("click", () => showChat(false));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && chat.classList.contains("show")) showChat(false);
    });
  }

  function choose(service) {
    if (!hasChatUI) return;
    showChat(true);
    options.forEach(button => {
      button.classList.toggle("active-option", button.dataset.service === service);
    });
    response.replaceChildren();

    const message = document.createElement("div");
    message.className = "bot-message";
    message.textContent = `Gracias por tu interés en ${service}. Podemos orientarte de forma personalizada en Yucatán, Campeche y Quintana Roo. Continúa por WhatsApp para compartirnos brevemente tu situación.`;

    const link = document.createElement("a");
    link.className = "chat-wa-btn";
    link.target = "_blank";
    link.rel = "noopener";
    link.href = "https://wa.me/529996082755?text=" + encodeURIComponent(
      `Hola, me comunico desde la página web de Burgos Abogados. Deseo asesoría sobre: ${service}.`
    );
    const iconWrap = document.createElement("span");
    iconWrap.innerHTML = '<svg class="icon-editorial" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>';
    link.append(iconWrap.firstElementChild, document.createTextNode(" Continuar por WhatsApp"));

    response.append(message, link);
    response.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  document.querySelectorAll("[data-service]").forEach(button => {
    button.addEventListener("click", () => choose(button.dataset.service));
  });
})();

