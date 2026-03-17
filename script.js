// Initialize Lucide Icons
lucide.createIcons();

// Fixed Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Elite Apothecary Logic
const eliteApothecaryItems = [
    { id: 1, name: "AURA SILVER Rx", category: "medicines", price: 43, desc: "High-purity clinical formulation", emoji: "💊" },
    { id: 2, name: "VITALITY GOLD+", category: "supplements", price: 150, desc: "Bio-available immunity gold", emoji: "🟡" },
    { id: 3, name: "SOVEREIGN LINK", category: "devices", price: 799, desc: "Bespoke health interface", emoji: "❤️" },
    { id: 4, name: "PLATINUM RECOVERY", category: "medicines", price: 89, desc: "Sovereign bronchial comfort", emoji: "🧪" },
    { id: 5, name: "ELITE VITALITY", category: "supplements", price: 199, desc: "Bespoke 30-day nutrition", emoji: "🍊" },
    { id: 6, name: "PRIMITIVE TRACKER", category: "devices", price: 1999, desc: "Clinical heart rate hub", emoji: "📊" },
    { id: 7, name: "AETHER RECOVERY", category: "medicines", price: 320, desc: "Zero-artificial rapid healing", emoji: "⚕️" },
    { id: 8, name: "ELITE ELEMENTAL", category: "supplements", price: 449, desc: "High-purity elemental complex", emoji: "🧬" }
];

const eliteGrid = document.getElementById('eliteGrid');

function renderSovereignCollection(category = 'all') {
    if (!eliteGrid) return;
    
    const filtered = category === 'all' 
        ? eliteApothecaryItems 
        : eliteApothecaryItems.filter(p => p.category === category);
    
    eliteGrid.innerHTML = filtered.map(p => `
        <div class="p-card" style="opacity: 0; transform: translateY(20px);">
            <div class="p-visual">${p.emoji}</div>
            <h3 class="p-name">${p.name}</h3>
            <p class="p-desc">${p.desc}</p>
            <div class="p-meta">
                <span class="p-price">₹${p.price}</span>
                <button class="add-btn" onclick="updateSovereignCart(1)">
                    <i data-lucide="plus"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
    staggerCards();
}

function staggerCards() {
    const cards = document.querySelectorAll('.p-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)";
        }, index * 100);
    });
}

// Initial Render
renderSovereignCollection();

// Cart Counter Interaction
let cartCount = 0;
const cartDisplay = document.querySelector('.cart-count');

function updateSovereignCart(val) {
    cartCount += val;
    cartDisplay.textContent = cartCount;
    cartDisplay.style.background = "#fff";
    cartDisplay.style.color = "#000";
    setTimeout(() => {
        cartDisplay.style.background = "var(--emerald-glow)";
        cartDisplay.style.color = "#fff";
    }, 200);
}

// Filter Navigation Logic
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSovereignCollection(btn.dataset.category);
    });
});

// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 120,
                behavior: 'smooth'
            });
        }
    });
});
