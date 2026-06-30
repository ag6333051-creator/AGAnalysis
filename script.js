const tickerData = [
    { symbol: 'EUR/USD', price: '1.0852', change: '+0.12%', up: true },
    { symbol: 'GBP/USD', price: '1.2741', change: '+0.08%', up: true },
    { symbol: 'USD/JPY', price: '149.85', change: '-0.23%', up: false },
    { symbol: 'BTC/USD', price: '67,420', change: '+2.45%', up: true },
    { symbol: 'ETH/USD', price: '3,520', change: '+1.82%', up: true },
    { symbol: 'XRP/USD', price: '0.6234', change: '+0.56%', up: true },
    { symbol: 'AAPL', price: '189.52', change: '+0.89%', up: true },
    { symbol: 'TSLA', price: '245.30', change: '-1.23%', up: false },
    { symbol: 'NVDA', price: '875.20', change: '+3.12%', up: true },
    { symbol: 'MSFT', price: '420.15', change: '+0.45%', up: true },
    { symbol: 'GOOGL', price: '165.80', change: '+0.67%', up: true },
    { symbol: 'AMZN', price: '178.35', change: '-0.34%', up: false },
    { symbol: 'GOLD', price: '2,345.60', change: '+0.78%', up: true },
    { symbol: 'OIL', price: '78.45', change: '-0.56%', up: false },
    { symbol: 'SPX500', price: '5,420.30', change: '+0.34%', up: true },
    { symbol: 'NAS100', price: '18,750.20', change: '+0.89%', up: true },
];

function createTickerItems() {
    const wrapper = document.getElementById('tickerWrapper');
    const items = tickerData.map(item => `
        <div class="ticker-item">
            <span class="ticker-symbol">${item.symbol}</span>
            <span class="ticker-price">${item.price}</span>
            <span class="ticker-change ${item.up ? 'up' : 'down'}">${item.up ? '↑' : '↓'} ${item.change}</span>
        </div>
    `).join('');
    wrapper.innerHTML = items + items + items + items;
}
createTickerItems();

const testimonials = [
    { text: "تحليلات AG Analysis غيرت طريقة تفكيري في التداول. الدقة في تحديد نقاط الدخول والخروج مذهلة حقاً. أنصح الجميع بالانضمام!", author: "محمد أحمد", role: "متداول فوركس" },
    { text: "بعد 6 شهور من متابعة التحليلات، حققت أرباحاً مستدامة لم أكن أتوقعها. التحليل الزمني والفلكي فعلاً يعمل بشكل رائع.", author: "خالد محمود", role: "مستثمر في العملات الرقمية" },
    { text: "أفضل قناة تحليلية على الإطلاق. المحتوى التعليمي ممتاز والتوصيات دقيقة جداً. شكراً لفريق AG Analysis على جهودكم المبذولة.", author: "أحمد سعيد", role: "متداول أسهم أمريكية" },
    { text: "التحليل الموجي الذي يقدمه الفريق مذهل. استطعت توقع العديد من التحركات السعرية قبل حدوثها. خبرة 6 سنوات تظهر بوضوح في جودة التحليل.", author: "عمر خالد", role: "متداول محترف" },
    { text: "انضممت للقناة منذ سنة ونصف ونتائجي تحسنت بشكل كبير. التحليل الرقمي والفني المشترك يعطي دقة لا مثيل لها في السوق.", author: "ياسر علي", role: "متداول متوسط الخبرة" },
    { text: "اللايفات الأسبوعية والتحليلات المباشرة تساعدني كثيراً في فهم حركة السوق. قناة AG Analysis هي مرجعي الأول للتحليل.", author: "سامي عبدالله", role: "مبتدئ في التداول" },
    { text: "محتوى تعليمي رائع وتحليلات احترافية. الفريق يجمع بين العلم والخبرة بطريقة ممتازة. أنصح كل متداول بالانضمام.", author: "فهد Ibrahim", role: "متداول فوركس وعملات رقمية" },
    { text: "من أفضل القنوات التي تقدم تحليلات متكاملة للأسواق. التحليل الفلكي والزمني يضيف بعداً جديداً وفريداً للتحليل.", author: "ناصر الدين", role: "محلل فني مستقل" }
];

function createTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    const cards = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.author.charAt(0)}</div>
                <div>
                    <div class="testimonial-name">${t.author}</div>
                    <div class="testimonial-role">${t.role}</div>
                </div>
            </div>
        </div>
    `).join('');
    track.innerHTML = cards + cards + cards + cards;
}
createTestimonials();

const particlesCanvas = document.getElementById('particles-canvas');
const particlesCtx = particlesCanvas.getContext('2d');
let particles = [];
const particleCount = 80;

function resizeParticles() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
}
resizeParticles();
window.addEventListener('resize', resizeParticles);

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * particlesCanvas.width;
        this.y = Math.random() * particlesCanvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > particlesCanvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > particlesCanvas.height) this.speedY *= -1;
    }
    draw() {
        particlesCtx.beginPath();
        particlesCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        particlesCtx.fillStyle = `rgba(0, 255, 136, ${this.opacity})`;
        particlesCtx.fill();
    }
}

for (let i = 0; i < particleCount; i++) particles.push(new Particle());

function animateParticles() {
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                particlesCtx.beginPath();
                particlesCtx.moveTo(p1.x, p1.y);
                particlesCtx.lineTo(p2.x, p2.y);
                particlesCtx.strokeStyle = `rgba(0, 255, 136, ${0.1 * (1 - dist / 150)})`;
                particlesCtx.lineWidth = 0.5;
                particlesCtx.stroke();
            }
        });
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

gsap.registerPlugin(ScrollTrigger);

const fadeUpElements = document.querySelectorAll('.section-header, .analysis-card, .market-card, .about-grid, .contact-card, .social-grid');
fadeUpElements.forEach(el => {
    gsap.fromTo(el, 
        { opacity: 0, y: 50 },
        {
            opacity: 1, y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
});

const counters = document.querySelectorAll('.hero-stat-number');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    gsap.to(counter, {
        innerHTML: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerHTML: 1 },
        scrollTrigger: { trigger: counter, start: 'top 80%' }
    });
});

const aboutCard = document.getElementById('aboutCard');
if (aboutCard) {
    aboutCard.addEventListener('mousemove', (e) => {
        const rect = aboutCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        aboutCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    aboutCard.addEventListener('mouseleave', () => {
        aboutCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });
}

const navbar = document.getElementById('navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelector('.phone-3d').style.transform = 
        `translateY(${-20 + y}px) rotateY(${-5 + x}deg) rotateX(${5 + y}deg)`;
});