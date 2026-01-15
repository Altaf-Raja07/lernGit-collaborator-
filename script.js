// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and category cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .category-card, .step');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effect for category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.querySelector('h3').textContent;
        console.log(`Selected category: ${category}`);
        // You can add navigation logic here
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }
    }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-item h3');
            
            statNumbers.forEach(stat => {
                const targetValue = parseInt(stat.textContent.replace(/,|\+/g, ''));
                stat.textContent = '0+';
                animateCounter(stat, targetValue);
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

const artsQuestions = [
    { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], answer: 1 },
    { q: "Origami belongs to which country?", options: ["China", "Japan", "India", "Korea"], answer: 1 },
    { q: "Which tool is used in sculpture?", options: ["Brush", "Pen", "Chisel", "Camera"], answer: 2 },
    { q: "Who cut off his ear?", options: ["Picasso", "Van Gogh", "Da Vinci", "Rembrandt"], answer: 1 },
    { q: "Which art uses small dots?", options: ["Cubism", "Pointillism", "Surrealism", "Realism"], answer: 1 },
    { q: "Graffiti is an example of?", options: ["Street art", "Oil painting", "Calligraphy", "Sculpture"], answer: 0 },
    { q: "Abstract art focuses on?", options: ["Reality", "Emotions", "Nature", "Portraits"], answer: 1 },
    { q: "Ukiyo-e art is from?", options: ["China", "Japan", "India", "Thailand"], answer: 1 },
    { q: "Which color model do painters use?", options: ["RGB", "CMYK", "RYB", "HEX"], answer: 2 },
    { q: "A mural is a?", options: ["Wall painting", "Sketch", "Portrait", "Digital art"], answer: 0 }
];
const musicQuestions = [
    { q: "How many notes are there in music?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Which instrument has keys?", options: ["Guitar", "Piano", "Flute", "Drums"], answer: 1 },
    { q: "Who is the King of Pop?", options: ["Elvis Presley", "Michael Jackson", "Drake", "Eminem"], answer: 1 },
    { q: "BPM stands for?", options: ["Beats Per Minute", "Bass Per Music", "Beat Meter", "Music Speed"], answer: 0 },
    { q: "Which is a string instrument?", options: ["Flute", "Drums", "Guitar", "Trumpet"], answer: 2 },
    { q: "Silence in music is called?", options: ["Note", "Beat", "Rest", "Scale"], answer: 2 },
    { q: "Hip-hop mainly uses?", options: ["Rap", "Jazz", "Opera", "Classical"], answer: 0 },
    { q: "Who composed classical symphonies?", options: ["Beethoven", "Drake", "Adele", "Taylor Swift"], answer: 0 },
    { q: "Flute is played using?", options: ["Air", "Keys", "Strings", "Sticks"], answer: 0 },
    { q: "Notes played together are called?", options: ["Beat", "Chord", "Scale", "Tempo"], answer: 1 }
];
