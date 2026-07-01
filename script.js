// ============================================
// AG Analysis - Professional Trading Website
// JavaScript File (Updated - Infinite Ticker & Testimonials)
// ============================================

// ====== EXTENDED TICKER DATA (30+ pairs) ======
const tickerData = [
    { pair: 'EUR/USD', price: '1.0845', change: '+0.32%', up: true },
    { pair: 'GBP/USD', price: '1.2670', change: '-0.15%', up: false },
    { pair: 'USD/JPY', price: '149.85', change: '+0.48%', up: true },
    { pair: 'USD/CHF', price: '0.8920', change: '+0.22%', up: true },
    { pair: 'AUD/USD', price: '0.6540', change: '-0.35%', up: false },
    { pair: 'USD/CAD', price: '1.3580', change: '+0.18%', up: true },
    { pair: 'NZD/USD', price: '0.6120', change: '-0.28%', up: false },
    { pair: 'EUR/GBP', price: '0.8560', change: '+0.45%', up: true },
    { pair: 'EUR/JPY', price: '162.45', change: '+0.78%', up: true },
    { pair: 'GBP/JPY', price: '189.80', change: '+0.62%', up: true },
    { pair: 'BTC/USDT', price: '43,250', change: '+2.15%', up: true },
    { pair: 'ETH/USDT', price: '2,680', change: '+1.85%', up: true },
    { pair: 'XRP/USDT', price: '0.6250', change: '-0.92%', up: false },
    { pair: 'SOL/USDT', price: '98.50', change: '+3.20%', up: true },
    { pair: 'ADA/USDT', price: '0.5820', change: '+0.65%', up: true },
    { pair: 'DOT/USDT', price: '7.85', change: '+1.42%', up: true },
    { pair: 'LINK/USDT', price: '14.20', change: '+2.80%', up: true },
    { pair: 'MATIC/USDT', price: '0.89', change: '-1.20%', up: false },
    { pair: 'AVAX/USDT', price: '36.50', change: '+4.10%', up: true },
    { pair: 'DOGE/USDT', price: '0.082', change: '+1.50%', up: true },
    { pair: 'AAPL', price: '195.89', change: '+0.78%', up: true },
    { pair: 'TSLA', price: '248.50', change: '-1.25%', up: false },
    { pair: 'NVDA', price: '875.30', change: '+2.10%', up: true },
    { pair: 'GOOGL', price: '142.65', change: '+0.45%', up: true },
    { pair: 'MSFT', price: '420.55', change: '+0.92%', up: true },
    { pair: 'AMZN', price: '178.35', change: '-0.35%', up: false },
    { pair: 'META', price: '505.20', change: '+1.85%', up: true },
    { pair: 'AMD', price: '165.80', change: '+2.45%', up: true },
    { pair: 'NFLX', price: '612.40', change: '+0.65%', up: true },
    { pair: 'INTC', price: '43.20', change: '-0.80%', up: false },
    { pair: 'BABA', price: '78.50', change: '+1.20%', up: true },
    { pair: 'DIS', price: '112.30', change: '+0.55%', up: true },
    { pair: 'BA', price: '245.60', change: '-0.45%', up: false },
    { pair: 'JPM', price: '198.40', change: '+0.90%', up: true },
    { pair: 'V', price: '285.70', change: '+0.35%', up: true },
    { pair: 'WMT', price: '165.20', change: '+0.25%', up: true },
    { pair: 'PFE', price: '28.40', change: '-0.60%', up: false },
    { pair: 'KO', price: '62.80', change: '+0.15%', up: true },
    { pair: 'PEP', price: '178.90', change: '+0.40%', up: true },
    { pair: 'NKE', price: '95.30', change: '-1.10%', up: false },
];

// ====== INFINITE TICKER (JS Animation - No CSS Keyframes) ======
let tickerPosition = 0;
let tickerSpeed = 0.8;
let tickerTrack = null;
let tickerItemsWidth = 0;
let tickerAnimationId = null;

function generateTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;
    tickerTrack = track;

    // Create 4 copies for truly seamless infinite loop
    let html = '';
    const copies = 4;
    for (let c = 0; c < copies; c++) {
        tickerData.forEach(item => {
            html += `
                <div class="ticker-item">
                    <span class="pair">${item.pair}</span>
                    <span class="price">${item.price}</span>
                    <span class="${item.up ? 'change-up' : 'change-down'}">
                        <i class="fas fa-${item.up ? 'arrow-up' : 'arrow-down'}"></i>
                        ${item.change}
                    </span>
                    <div class="ticker-dot"></div>
                </div>
            `;
        });
    }
    track.innerHTML = html;

    // Calculate width of one set
    setTimeout(() => {
        const items = track.querySelectorAll('.ticker-item');
        if (items.length > 0) {
            const oneSetWidth = tickerData.length * (items[0].offsetWidth + 50); // +50 for margin
            tickerItemsWidth = oneSetWidth;
        }
        startTickerAnimation();
    }, 100);
}

function startTickerAnimation() {
    if (tickerAnimationId) cancelAnimationFrame(tickerAnimationId);

    function animate() {
        tickerPosition -= tickerSpeed;

        // Reset position for infinite loop
        if (Math.abs(tickerPosition) >= tickerItemsWidth) {
            tickerPosition = 0;
        }

        if (tickerTrack) {
            tickerTrack.style.transform = `translateX(${tickerPosition}px)`;
        }

        tickerAnimationId = requestAnimationFrame(animate);
    }

    animate();
}

// ====== EXTENDED TESTIMONIALS DATA (12+ reviews) ======
const testimonials = [
    { name: 'محمد أ.', role: 'متداول فوركس', text: 'تحليلات AG Analysis غيرت طريقة تداولي تماماً. نسبة الدقة مذهلة والتوصيات واضحة جداً. حققت أرباحاً مستدامة خلال الأشهر الستة الماضية.' },
    { name: 'أحمد س.', role: 'متداول عملات رقمية', text: 'أفضل قناة تحليلية تابعتها في حياتي. التحليل الموجي والزمني يعطي دقة لا تصدق في تحديد نقاط الدخول والخروج.' },
    { name: 'خالد م.', role: 'مستثمر في الأسهم الأمريكية', text: '6 سنوات خبرة تظهر بوضوح في جودة التحليلات. القناة توفر رؤية شاملة للسوق مع إدارة مخاطر ممتازة.' },
    { name: 'عمر ف.', role: 'متداول مبتدئ', text: 'حتى كمبتدئ، استطعت فهم التحليلات بسهولة. الشرح المفصل والدعم المستمر جعلني أتعلم بسرعة وأحقق أرباح.' },
    { name: 'ياسر ر.', role: 'متداول محترف', text: 'التنوع في أنواع التحليل (الفني، الزمني، الفلكي، الموجي) يعطي رؤية متكاملة للسوق. أنصح كل متداول بالانضمام.' },
    { name: 'طارق ن.', role: 'متداول فوركس', text: 'توصيات الفوركس دقيقة جداً. حققت 150 نقطة ربح هذا الأسبوع فقط باتباع إشارات القناة. شكراً AG Analysis!' },
    { name: 'سامي ع.', role: 'مستثمر في العملات الرقمية', text: 'تحليل البيتكوين والإيثيريوم في هذه القناة على مستوى احترافي عالٍ. التحليل الفلكي يعطي توقيتات مذهلة.' },
    { name: 'إبراهيم ح.', role: 'متداول متنوع', text: 'أتابع القناة منذ سنة ونصف ونتائجها ممتازة. التحليل الرقمي يحدد الأهداف بدقة مذهلة.' },
    { name: 'ناصر ك.', role: 'متداول فوركس', text: 'التحليل الزمني في هذه القناة فريد من نوعه. استطعت توقيت دخولي بشكل مثالي بفضل التحليلات المقدمة.' },
    { name: 'فهد ع.', role: 'مستثمر في الأسهم', text: 'توصيات الأسهم الأمريكية ممتازة. حققت عائد 25% في شهر واحد فقط باتباع تحليلات القناة.' },
    { name: 'ماجد ل.', role: 'متداول عملات رقمية', text: 'التحليل الموجي لعملة SOL كان دقيقاً جداً. دخلت في الوقت المثالي وحققت ربحاً كبيراً.' },
    { name: 'سعد ب.', role: 'متداول مبتدئ', text: 'أفضل شيء في القناة هو التعليم المجاني. تعلمت كيف أحلل بنفسي وأعتمد على نفسي في التداول.' },
];

// ====== INFINITE TESTIMONIALS (JS Animation - No CSS Keyframes) ======
let testimonialPosition = 0;
let testimonialSpeed = 0.5;
let testimonialTrack = null;
let testimonialItemsWidth = 0;
let testimonialAnimationId = null;

function generateTestimonials() {
    const track = document.getElementById('testimonialsTrack');
    if (!track) return;
    testimonialTrack = track;

    // Create 6 copies for truly seamless infinite loop
    let html = '';
    const copies = 6;
    for (let c = 0; c < copies; c++) {
        testimonials.forEach(t => {
            html += `
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="testimonial-text">"${t.text}"</p>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
                        <div>
                            <div class="testimonial-name">${t.name}</div>
                            <div class="testimonial-role">${t.role}</div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    track.innerHTML = html;

    // Calculate width of one set
    setTimeout(() => {
        const cards = track.querySelectorAll('.testimonial-card');
        if (cards.length > 0) {
            const oneCardWidth = cards[0].offsetWidth + 30; // +30 for margin
            testimonialItemsWidth = testimonials.length * oneCardWidth;
        }
        startTestimonialAnimation();
    }, 100);
}

function startTestimonialAnimation() {
    if (testimonialAnimationId) cancelAnimationFrame(testimonialAnimationId);

    function animate() {
        testimonialPosition -= testimonialSpeed;

        // Reset position for infinite loop (move left)
        if (Math.abs(testimonialPosition) >= testimonialItemsWidth) {
            testimonialPosition = 0;
        }

        if (testimonialTrack) {
            testimonialTrack.style.transform = `translateX(${testimonialPosition}px)`;
        }

        testimonialAnimationId = requestAnimationFrame(animate);
    }

    animate();
}

// Pause testimonials on hover
function setupTestimonialHover() {
    const wrapper = document.querySelector('.testimonials-wrapper');
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            testimonialSpeed = 0;
        });
        wrapper.addEventListener('mouseleave', () => {
            testimonialSpeed = 0.5;
        });
    }
}

// ====== MOBILE MENU ======
function toggleMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

// ====== NAVBAR SCROLL ======
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ====== PHONE CHART ======
function drawPhoneChart() {
    const c = document.getElementById('phoneChart');
    if (!c) return;
    const ctx = c.getContext('2d');
    c.width = c.offsetWidth;
    c.height = c.offsetHeight;

    const data = [25, 40, 30, 55, 45, 65, 50, 75, 60, 85, 70, 95];
    const w = c.width, h = c.height;
    const step = w / (data.length - 1);

    ctx.clearRect(0, 0, w, h);

    // Gradient fill
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, 'rgba(0, 212, 255, 0.3)');
    grad.addColorStop(1, 'rgba(0, 212, 255, 0)');

    ctx.beginPath();
    ctx.moveTo(0, h);
    data.forEach((val, i) => {
        const x = i * step;
        const y = h - (val / 100) * h;
        if (i === 0) ctx.lineTo(x, y);
        else {
            const prevX = (i - 1) * step;
            const prevY = h - (data[i - 1] / 100) * h;
            const cpX = (prevX + x) / 2;
            ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
            ctx.quadraticCurveTo(x, y, x, y);
        }
    });
    ctx.lineTo(w, h);
    ctx.closePath();
    ctx.fillStyle = grad;
    ctx.fill();

    // Line
    ctx.beginPath();
    data.forEach((val, i) => {
        const x = i * step;
        const y = h - (val / 100) * h;
        if (i === 0) ctx.moveTo(x, y);
        else {
            const prevX = (i - 1) * step;
            const prevY = h - (data[i - 1] / 100) * h;
            const cpX = (prevX + x) / 2;
            ctx.quadraticCurveTo(prevX, prevY, cpX, (prevY + y) / 2);
            ctx.quadraticCurveTo(x, y, x, y);
        }
    });
    ctx.strokeStyle = '#00d4ff';
    ctx.lineWidth = 2.5;
    ctx.stroke();
}

// ====== 3D BACKGROUND PARTICLES ======
function init3D() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.querySelector('.hero').appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.pointerEvents = 'none';

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x00d4ff,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function animate3D() {
        requestAnimationFrame(animate3D);

        particlesMesh.rotation.x += 0.0005;
        particlesMesh.rotation.y += 0.0005;

        particlesMesh.rotation.x += mouseY * 0.0005;
        particlesMesh.rotation.y += mouseX * 0.0005;

        renderer.render(scene, camera);
    }
    animate3D();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// ====== GSAP ANIMATIONS ======
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Reveal animations
    gsap.utils.toArray('.reveal').forEach((elem, i) => {
        gsap.to(elem, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elem,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            delay: i * 0.08
        });
    });

    // Counter animation
    gsap.utils.toArray('.hero-stat-num').forEach(num => {
        const target = parseInt(num.dataset.target);
        gsap.to(num, {
            innerHTML: target,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            scrollTrigger: {
                trigger: num,
                start: 'top 85%'
            },
            onUpdate: function() {
                const val = Math.round(this.targets()[0].innerHTML);
                if (target === 1457) {
                    num.innerHTML = val.toLocaleString() + '+';
                } else if (target === 6) {
                    num.innerHTML = val + '+';
                } else {
                    num.innerHTML = val;
                }
            }
        });
    });

    // Cards stagger
    gsap.from('.about-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.about-grid', start: 'top 80%' }
    });

    gsap.from('.analysis-card', {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.analysis-grid', start: 'top 80%' }
    });

    gsap.from('.market-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.markets-grid', start: 'top 80%' }
    });
}

// ====== INITIALIZE ======
document.addEventListener('DOMContentLoaded', () => {
    generateTicker();
    generateTestimonials();
    setupTestimonialHover();
    drawPhoneChart();
    init3D();
    initAnimations();
});

window.addEventListener('resize', drawPhoneChart);