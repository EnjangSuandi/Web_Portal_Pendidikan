const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            this.innerHTML = '&times;'; 
        } else {
            this.innerHTML = '&#9776;';
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            }
        });
    });
}

function setupCarousel(prevBtnId, nextBtnId, cardRowId) {
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
    const cardRow = document.getElementById(cardRowId);
    
    if (prevBtn && nextBtn && cardRow) {
        nextBtn.addEventListener('click', function() {
            cardRow.scrollBy({
                left: cardRow.clientWidth,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', function() {
            cardRow.scrollBy({
                left: -cardRow.clientWidth,
                behavior: 'smooth'
            });
        });
    }
}

setupCarousel('prev-btn', 'next-btn', 'beasiswa-card-row');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const videoContainer = document.querySelector('.video-container');
const heroSection = document.querySelector('.hero-section'); 

if (videoContainer) {
    heroSection.addEventListener('mousemove', (e) => {
        if (window.innerWidth > 992) {
            const speed = 0.1; 
            const x = (window.innerWidth / 2 - e.clientX) * speed;
            const y = (window.innerHeight / 2 - e.clientY) * speed;
            videoContainer.style.transform = `translate(${x}px, ${y}px)`;
        }
    });

    heroSection.addEventListener('mouseleave', () => {
        if (window.innerWidth > 992) {
            videoContainer.style.transform = 'translate(0, 0)';
        }
    });
}