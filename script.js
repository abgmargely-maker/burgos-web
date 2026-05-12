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
// OPCIONES CHATBOT + WHATSAPP DINAMICO
// =====================================================

const chatOptions = document.querySelectorAll('.chat-option');

chatOptions.forEach(option => {

  option.addEventListener('click', () => {

    // SERVICIO
    const service = option.dataset.service;

    // MENSAJE PERSONALIZADO
    const message =
    `Hola, quiero más información sobre ${service}.`;

    // ENCODE URL
    const encodedMessage = encodeURIComponent(message);

    // LINK WHATSAPP
    const waLink =
    `https://wa.me/529996082755?text=${encodedMessage}`;

    // RESPUESTA VISUAL
    chatResponse.innerHTML = `

      <div class="bot-message">

        <strong>${service}</strong>

        <br><br>

        Hemos identificado tu consulta.

        Un asesor jurídico podrá ayudarte inmediatamente.

        <a
        href="${waLink}"
        target="_blank"
        class="chat-wa-btn">

          Continuar por WhatsApp

        </a>

      </div>

    `;

    // ESTADO ACTIVO
    chatOptions.forEach(btn => {
      btn.classList.remove('active-option');
    });

    option.classList.add('active-option');

  });

});
// =====================================================
// SCROLL SUAVE
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener('click', function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

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

  const header = document.querySelector('header');

  if(window.scrollY > 20){

    header.style.boxShadow = '0 8px 25px rgba(0,0,0,.06)';

  }else{

    header.style.boxShadow = 'none';

  }

});
