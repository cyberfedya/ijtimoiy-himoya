// Functions page interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease-out';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.function-section').forEach(section => {
        observer.observe(section);
    });

    // Add demo interactions
    addDemoInteractions();
});

function addDemoInteractions() {
    // Simulate application submission
    const demoButtons = document.querySelectorAll('.demo-action-btn');
    demoButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            showDemoNotification(action);
        });
    });
}

function showDemoNotification(action) {
    const notifications = {
        'submit': 'Murojaat muvaffaqiyatli yuborildi! Raqam: #MR-2024-' + Math.floor(Math.random() * 1000),
        'track': 'Murojaat holati: Ko\'rib chiqilmoqda (60%)',
        'stats': 'Statistika yangilandi: 50,432 murojaat',
        'contact': 'Tashkilot bilan bog\'lanish: +998 71 234 56 78'
    };

    alert(notifications[action] || 'Demo funksiya');
}

// Export for use in other pages
window.portalFunctions = {
    showDemoNotification
};
