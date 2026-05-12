// FAQ

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  item.querySelector('.faq-question').addEventListener('click', () => {

    faqItems.forEach(faq => {

      if(faq !== item){
        faq.classList.remove('active');

        faq.querySelector('i').className =
        'fa-solid fa-chevron-down';
      }

    });

    item.classList.toggle('active');

    const icon = item.querySelector('.faq-question i');

    icon.className = item.classList.contains('active')
      ? 'fa-solid fa-chevron-up'
      : 'fa-solid fa-chevron-down';

  });

});


// CHATBOT

const chatOptions = document.querySelectorAll('.chat-option');

const responseBox =
document.getElementById('chatResponse');

chatOptions.forEach(option => {

  option.addEventListener('click', () => {

    const response = option.dataset.response;

    responseBox.style.display = 'block';

    responseBox.innerHTML = `
      <strong style="
      display:block;
      margin-bottom:12px;
      color:#bf7884;
      ">
      Burgos Abogados
      </strong>

      ${response}

      <br><br>

      <a
      href="https://wa.me/529996082755"
      target="_blank"
      style="
      display:inline-block;
      background:#25d366;
      color:white;
      padding:14px 22px;
      border-radius:999px;
      font-weight:600;
      ">
      Continuar por WhatsApp
      </a>
    `;

  });

});


// BOTÓN FLOTANTE CHAT

const toggleBtn =
document.getElementById('toggleChat');

const chatbot =
document.getElementById('chatbot');

toggleBtn.addEventListener('click', () => {

  chatbot.style.display =
  chatbot.style.display === 'none'
    ? 'block'
    : 'none';

});
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
// CHATBOT FUNCIONAL
// =====================================================

const chatbot = document.getElementById('chatbot');
const toggleChat = document.getElementById('toggleChat');
const chatResponse = document.getElementById('chatResponse');


// ABRIR / CERRAR CHAT

toggleChat.addEventListener('click', () => {

  chatbot.classList.toggle('show');

});




// OPCIONES DEL CHAT

const chatOptions = document.querySelectorAll('.chat-option');

chatOptions.forEach(option => {

  option.addEventListener('click', () => {

    const response = option.getAttribute('data-response');

    // RESPUESTA VISUAL
    chatResponse.innerHTML = `
    
      <div class="bot-message">

        ${response}

        <a 
        href="https://wa.me/529996082755?text=Hola,%20quiero%20más%20información"
        target="_blank"
        class="chat-wa-btn">

          Continuar por WhatsApp

        </a>

      </div>

    `;

    // EFECTO ACTIVO
    chatOptions.forEach(btn => {
      btn.classList.remove('active-option');
    });

    option.classList.add('active-option');

  });

});




// =====================================================
// SCROLL SUAVE MENU
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
// HEADER SHADOW AL SCROLL
// =====================================================

window.addEventListener('scroll', () => {

  const header = document.querySelector('header');

  if(window.scrollY > 20){

    header.style.boxShadow = '0 8px 25px rgba(0,0,0,.06)';

  }else{

    header.style.boxShadow = 'none';

  }

});
