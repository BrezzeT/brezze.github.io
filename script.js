let showSnowBalls = true;
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    const size = Math.random() * 3 + 2;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}%`;
    const duration = Math.random() * 3 + 3;
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `${Math.random() * 2}s`;
    document.getElementById('snow-animation-container').appendChild(snowflake);
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

setInterval(createSnowflake, 100);
                  
for (let i = 0; i < 50; i++) {
    setTimeout(createSnowflake, Math.random() * 2000);
}

const translations = {
    uk: {
        'about-me': 'Про мене',
        'contacts': 'Контакти',
        'about-me-title': 'Про мене',
        'about-me-text': 'Мене звати Євгеній, мені 20 років. Я студент 3 курсу. Я люблю програмувати і створювати веб-сайти. Я хочу стати програмістом і створювати веб-сайти для людей. Добре комунікую з людьми. Я відповідальний і стараюсь все добре виконувати. Завжди відкритий до нових знань і досвіду.',
        'learning-title': 'Те що я зараз стараюсь вивчити',
        'contacts-title': 'Мої контакти',
        'contacts-text': 'Якщо у вас є питання або пропозиції, будь ласка, зв\'яжіться зі мною.',
        'languages': 'Мови які я знаю: Українська, Російська, Англійська(Базова).',
        'telegram': 'Телеграм',
        'email': 'Пошта',
        'phone': 'Телефон',
        'social-networks': 'Соціальні мережі',
        'quick-links': 'Швидкі посилання',
        'copyright': '© 2025 Все права захищені.'
    },
    en: {
        'about-me': 'About Me',
        'contacts': 'Contacts',
        'about-me-title': 'About Me',
        'about-me-text': 'My name is Eugene, I am 20 years old. I am a 3rd year student. I love programming and creating websites. I want to become a programmer and create websites for people. I communicate well with people. I am responsible and try to do everything well. Always open to new knowledge and experience.',
        'learning-title': 'What I am currently learning',
        'contacts-title': 'My Contacts',
        'contacts-text': 'If you have any questions or suggestions, please contact me.',
        'languages': 'Languages I know: Ukrainian, Russian, English(Basic).',
        'telegram': 'Telegram',
        'email': 'Email',
        'phone': 'Phone',
        'social-networks': 'Social Networks',
        'quick-links': 'Quick Links',
        'copyright': '© 2025 All rights reserved.'
    }
};


function translate(lang) {
    
    document.querySelector('.AboutMe').textContent = translations[lang]['about-me'];
    document.querySelector('.Contacts').textContent = translations[lang]['contacts'];

    
    document.querySelector('.hero-content h1').textContent = translations[lang]['about-me-title'];
    const paragraphs = document.querySelectorAll('.hero-content p');
    paragraphs[0].textContent = translations[lang]['about-me-text'];
    paragraphs[1].textContent = translations[lang]['languages'];
    
    document.querySelector('.icons h2').textContent = translations[lang]['learning-title'];

    
    document.querySelector('.contacts h2').textContent = translations[lang]['contacts-title'];
    document.querySelector('.contacts-container > p').textContent = translations[lang]['contacts-text'];

    
    const contactLabels = document.querySelectorAll('.contact-form p span');
    contactLabels.forEach(span => {
        if (span.nextElementSibling.href.includes('t.me')) {
            span.textContent = translations[lang]['telegram'] + ':';
        } else if (span.nextElementSibling.href.includes('mailto')) {
            span.textContent = translations[lang]['email'] + ':';
        } else if (span.nextElementSibling.href.includes('tel')) {
            span.textContent = translations[lang]['phone'] + ':';
        }
    });

    
    document.querySelectorAll('.footer-section h3').forEach(h3 => {
        if (h3.textContent.includes('Соціальні')) {
            h3.textContent = translations[lang]['social-networks'];
        } else if (h3.textContent.includes('Швидкі')) {
            h3.textContent = translations[lang]['quick-links'];
        } else if (h3.textContent.includes('Контакти')) {
            h3.textContent = translations[lang]['contacts-title'];
        }
    });

    document.querySelector('.footer-bottom p').textContent = translations[lang]['copyright'];
    
    
    document.querySelector('.translate-btn').textContent = lang === 'uk' ? 'EN' : 'UA';
}


let currentLang = localStorage.getItem('selectedLanguage') || 'uk';


document.addEventListener('DOMContentLoaded', function() {
    translate(currentLang);

    
    document.querySelector('.translate-btn').addEventListener('click', function() {
        currentLang = currentLang === 'uk' ? 'en' : 'uk';
        localStorage.setItem('selectedLanguage', currentLang);
        translate(currentLang);
    });
});




