const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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
        const speed = 0.1; 
        const x = (window.innerWidth / 2 - e.clientX) * speed;
        const y = (window.innerHeight / 2 - e.clientY) * speed;
        videoContainer.style.transform = `translate(${x}px, ${y}px)`;
    });

    heroSection.addEventListener('mouseleave', () => {
        videoContainer.style.transform = 'translate(0, 0)';
    });
}