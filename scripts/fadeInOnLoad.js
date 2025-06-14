// Prevent scroll restoration on reload
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // Get all fade-section elements
    const sections = document.querySelectorAll('.fade-section');

    setTimeout(() => {
        const splashSections = [];
        const belowFoldSections = [];

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                splashSections.push(section);
            } else {
                belowFoldSections.push(section);
            }
        });

        // Animate splash sections in succession
        splashSections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('visible');
            }, index * 350); // Increased delay to 300ms for more noticeable effect
        });
        
        belowFoldSections.forEach(section => {
            observer.observe(section);
        }); 
    }, 100);
}

// Run on initial load
document.addEventListener('DOMContentLoaded', () => {
    initFadeIn();
});

// Re-run on page show if loaded from bfcache
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        initFadeIn();
    }
});