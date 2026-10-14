const chat=document.getElementById('chatbot');const toggle=document.getElementById('toggleChat');const close=document.getElementById('closeChat');const response=document.getElementById('chatResponse');const options=[...document.querySelectorAll('.chat-option')];function showChat(open){chat.classList.toggle('show',open);chat.setAttribute('aria-hidden',String(!open));toggle.setAttribute('aria-expanded',String(open));if(open)close.focus();else toggle.focus()}toggle.addEventListener('click',()=>showChat(!chat.classList.contains('show')));close.addEventListener('click',()=>showChat(false));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&chat.classList.contains('show'))showChat(false)});function choose(service){showChat(true);options.forEach(b=>b.classList.toggle('active-option',b.dataset.service===service));response.replaceChildren();const box=document.createElement('div');box.className='bot-message';box.textContent='Gracias por tu interés en '+service+'. Podemos orientarte de forma personalizada. Continúa por WhatsApp para compartirnos brevemente tu situación.';const a=document.createElement('a');a.className='chat-wa-btn';a.target='_blank';a.rel='noopener';a.href='https://wa.me/529996082755?text='+encodeURIComponent('Hola, me comunico desde la página web de Burgos Abogados. Deseo asesoría sobre: '+service+'.');a.innerHTML='<i class="fa-brands fa-whatsapp"></i> Continuar por WhatsApp';response.append(box,a);response.scrollIntoView({block:'nearest',behavior:'smooth'})}document.querySelectorAll('[data-service]').forEach(b=>b.addEventListener('click',()=>choose(b.dataset.service)))
// ======================================================
// CHATBOT
// ======================================================

const chatbot = document.getElementById("chatbot");

const toggleChat = document.getElementById("toggleChat");

const options = document.querySelectorAll(".chat-option");

const responseBox = document.getElementById("chatResponse");



// ABRIR / CERRAR

toggleChat.addEventListener("click", () => {

  chatbot.classList.toggle("show");

});



// RESPUESTAS AUTOMATICAS

const responses = {

  "Divorcios": `
    <div class="bot-message">

      <strong>Divorcios</strong><br><br>

      Podemos ayudarte en:
      <br><br>

      • Divorcio incausado<br>
      • Divorcio voluntario<br>
      • Convenios<br>
      • Custodia<br>
      • Pensión alimenticia

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Divorcios"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,



  "Pensión alimenticia": `
    <div class="bot-message">

      <strong>Pensión alimenticia</strong><br><br>

      Te asesoramos en:
      <br><br>

      • Demanda de pensión<br>
      • Incumplimiento<br>
      • Aumento o reducción<br>
      • Ejecución judicial

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Pensión%20alimenticia"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,



  "Custodia y convivencia": `
    <div class="bot-message">

      <strong>Custodia y convivencia</strong><br><br>

      Atendemos asuntos relacionados con:
      <br><br>

      • Guarda y custodia<br>
      • Régimen de convivencia<br>
      • Patria potestad<br>
      • Protección de menores

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Custodia%20y%20convivencia"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,


  
  "Procedimientos familiares": `
    <div class="bot-message">

      <strong>Procedimientos familiares</strong><br><br>

      Atendemos asuntos relacionados con:
      <br><br>

      • Sucesión Testamentaria<br>
      • Sucesión Legítima<br>
      • Suspensión de Patria Potestad<br>
      • Reconocimiento de Concubinato<br>
      • Reconocimiento de Interventor<br>
      
      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Procedimientos%20familiares"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,


  
  "Derecho civil": `
    <div class="bot-message">

      <strong>Derecho civil</strong><br><br>

      Podemos ayudarte con:
      <br><br>

      • Contratos<br>
      • Prescripción<br>
      • Proforma<br>
      • Hipotecas<br>
      • Daños y perjuicios<br>
      • Incumplimientos<br>
      • Recuperación de adeudos

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Derecho%20civil"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,



  "Derecho mercantil": `
    <div class="bot-message">

      <strong>Derecho mercantil</strong><br><br>

      Servicios disponibles:
      <br><br>

      • Cobranza judicial<br>
      • Cobranza extrajudicial<br>
      • Juicio ejecutivo mercantil<br>
      • Pagarés<br>
      • Contratos mercantiles<br>
      • Conflictos empresariales

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Derecho%20mercantil"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `,



  "Servicios notariales": `
    <div class="bot-message">

      <strong>Servicios notariales</strong><br><br>

      Brindamos asesoría en:
      <br><br>

      • Donaciones<br>
      • Compraventas<br>
      • Testamentos<br>
      • Operaciones inmobiliarias<br>
      • Revisión de contratos<br>
      • Seguridad patrimonial<br>
      • Formalización legal

      <a
      href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información%20sobre%20Servicios%20notariales"
      target="_blank"
      class="chat-wa-btn">

        <i class="fab fa-whatsapp"></i>

        Continuar por WhatsApp

      </a>

    </div>
  `

};



// EVENTOS OPCIONES

options.forEach(option => {

  option.addEventListener("click", () => {

    // REMOVER ACTIVAS
    options.forEach(btn => {
      btn.classList.remove("active-option");
    });

    // ACTIVAR
    option.classList.add("active-option");

    // SERVICIO
    const service = option.dataset.service;

    // RESPUESTA
    responseBox.innerHTML = responses[service];

  });

});



// ======================================================
// AUTO OPEN CHATBOT
// ======================================================

setTimeout(() => {

  chatbot.classList.add("show");

}, 4000);



// =====================================================

// MENSAJE AUTOMATICO INICIAL

// =====================================================

window.addEventListener('load', () => {

  chatResponse.innerHTML = `

    <div class="bot-message">

      Hola 👋

      <br><br>

      Bienvenido a Burgos Abogados.

      <br><br>

      Selecciona el servicio jurídico

      que necesitas y uno de nuestros

      abogados podrá ayudarte.

    </div>

  `;

});



// ======================================================
// CERRAR AL HACER CLICK FUERA
// ======================================================

document.addEventListener("click", (e) => {

  if(
    !chatbot.contains(e.target)
    &&
    !toggleChat.contains(e.target)
  ){

    chatbot.classList.remove("show");

  }

});
