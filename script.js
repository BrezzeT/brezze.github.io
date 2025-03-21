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
        'projects': 'Мої проекти',
        'gallery': 'Галерея робіт',
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
        'copyright': '© 2025 Все права захищені.',
        'projects-title': 'Мої проекти',
        'calculator-title': 'Калькулятор',
        'calculator-description': 'Сучасний калькулятор з основними математичними операціями',
        'anime-site-title': 'Аніме сайт',
        'anime-site-description': 'Сайт для перегляду аніме з фільтрацією за жанрами та роком випуску',
        'login-register-title': 'Login and Register',
        'login-register-description': 'Сайт для входу та реєстрації, зроблений за допомогою HTML, CSS та JavaScript',
        'open-project': 'Відкрити проект',
        'download-resume': 'Завантажити резюме'
    },
    en: {
        'about-me': 'About Me',
        'contacts': 'Contacts',
        'projects': 'My Projects',
        'gallery': 'Work Gallery',
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
        'copyright': '© 2025 All rights reserved.',
        'projects-title': 'My Projects',
        'calculator-title': 'Calculator',
        'calculator-description': 'Modern calculator with basic mathematical operations',
        'anime-site-title': 'Anime Site',
        'anime-site-description': 'Website for watching anime with filtering by genre and release year',
        'login-register-title': 'Login and Register',
        'login-register-description': 'Website for login and registration, built with HTML, CSS and JavaScript',
        'open-project': 'Open Project',
        'download-resume': 'Download Resume'
    }
};

function translate(lang) {
    document.querySelector('.AboutMe').textContent = translations[lang]['about-me'];
    document.querySelector('.Gallery').textContent = translations[lang]['gallery'];
    document.querySelectorAll('.Projects').forEach(el => {
        el.textContent = translations[lang]['projects'];
    });
    document.querySelector('.Contacts').textContent = translations[lang]['contacts'];

    document.querySelector('.hero-content h1').textContent = translations[lang]['about-me-title'];
    const paragraphs = document.querySelectorAll('.hero-content p');
    paragraphs[0].textContent = translations[lang]['about-me-text'];
    paragraphs[1].textContent = translations[lang]['languages'];
    
    document.querySelector('.icons h2').textContent = translations[lang]['learning-title'];

    document.querySelector('.my-projects h2').textContent = translations[lang]['projects-title'];
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent;
        if (title.includes('Калькулятор') || title.includes('Calculator')) {
            card.querySelector('h3').textContent = translations[lang]['calculator-title'];
            card.querySelector('p').textContent = translations[lang]['calculator-description'];
        } else if (title.includes('Anime')) {
            card.querySelector('h3').textContent = translations[lang]['anime-site-title'];
            card.querySelector('p').textContent = translations[lang]['anime-site-description'];
        } else if (title.includes('Login')) {
            card.querySelector('h3').textContent = translations[lang]['login-register-title'];
            card.querySelector('p').textContent = translations[lang]['login-register-description'];
        }
        card.querySelector('a').textContent = translations[lang]['open-project'];
    });

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

    document.querySelector('.gallery h2').textContent = translations[lang]['gallery'];
    document.querySelector('.resume-btn').textContent = translations[lang]['download-resume'];
}

let currentLang = localStorage.getItem('selectedLanguage') || 'uk';

document.addEventListener('DOMContentLoaded', function() {
    translate(currentLang);

    document.querySelector('.translate-btn').addEventListener('click', function() {
        currentLang = currentLang === 'uk' ? 'en' : 'uk';
        localStorage.setItem('selectedLanguage', currentLang);
        translate(currentLang);
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const navContainer = document.querySelector('.nav-container');
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        navContainer.classList.toggle('active');
    });

    document.querySelectorAll('.nav-container a').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navContainer.classList.remove('active');
        });
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.modal-close');
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});





