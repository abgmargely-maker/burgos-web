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