// =====================================================
// FAQ ACORDEON
// =====================================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {

    faqItems.forEach(faq => {

      if(faq !== item){

        faq.classList.remove('active');

        const icon = faq.querySelector('i');

        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');

      }

    });

    item.classList.toggle('active');

    const icon = item.querySelector('i');

    if(item.classList.contains('active')){

      icon.classList.remove('fa-chevron-down');
      icon.classList.add('fa-chevron-up');

    }else{

      icon.classList.remove('fa-chevron-up');
      icon.classList.add('fa-chevron-down');

    }

  });

});




// =====================================================
// CHATBOT PROFESIONAL
// =====================================================

const chatbot = document.getElementById('chatbot');

const toggleChat = document.getElementById('toggleChat');

const chatResponse = document.getElementById('chatResponse');

const chatOptions = document.querySelectorAll('.chat-option');




// =====================================================
// ABRIR / CERRAR CHATBOT
// =====================================================

toggleChat.addEventListener('click', () => {

  chatbot.classList.toggle('show');

});




// =====================================================
// RESPUESTAS DEL CHATBOT
// =====================================================

chatOptions.forEach(option => {

  option.addEventListener('click', () => {

    // SERVICIO SELECCIONADO
    const service = option.dataset.service;

    // MENSAJE AUTOMATICO
    const message =
    `Hola, quiero más información sobre ${service}.`;

    // CONVERTIR URL
    const encodedMessage =
    encodeURIComponent(message);

    // LINK WHATSAPP
    const waLink =
    `https://wa.me/529996082755?text=${encodedMessage}`;

    // RESPUESTA VISUAL
    chatResponse.innerHTML = `

      <div class="bot-message">

        <strong>${service}</strong>

        <br><br>

        Hemos identificado tu consulta.

        Uno de nuestros asesores jurídicos
        podrá ayudarte inmediatamente.

        <a
        href="${waLink}"
        target="_blank"
        class="chat-wa-btn">

          Continuar por WhatsApp

        </a>

      </div>

    `;

    // REMOVER ACTIVO
    chatOptions.forEach(btn => {
      btn.classList.remove('active-option');
    });

    // ACTIVAR SELECCIONADO
    option.classList.add('active-option');

  });

});




// =====================================================
// SCROLL SUAVE MENU
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target =
    document.querySelector(
      this.getAttribute('href')
    );

    if(target){

      target.scrollIntoView({
        behavior:'smooth'
      });

    }

  });

});




// =====================================================
// SOMBRA HEADER
// =====================================================

window.addEventListener('scroll', () => {

  const header =
  document.querySelector('header');

  if(window.scrollY > 20){

    header.style.boxShadow =
    '0 8px 25px rgba(0,0,0,.06)';

  }else{

    header.style.boxShadow = 'none';

  }

});




// =====================================================
// CERRAR CHATBOT AL DAR CLICK FUERA
// =====================================================

document.addEventListener('click', (e) => {

  const isClickInside =
  chatbot.contains(e.target) ||
  toggleChat.contains(e.target);

  if(!isClickInside){

    chatbot.classList.remove('show');

  }

});




// =====================================================
// ABRIR CHAT AUTOMATICAMENTE
// =====================================================

setTimeout(() => {

  chatbot.classList.add('show');

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
      asesores podrá ayudarte.

    </div>

  `;

});
