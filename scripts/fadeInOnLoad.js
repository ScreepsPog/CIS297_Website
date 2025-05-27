document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    // Get all fade sections and reset them
    const sections = document.querySelectorAll('.fade-section');
    
    setTimeout(() => {
        // Find sections that are initially visible
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
            }, index * 300); // Increased delay to 300ms for more noticeable effect
        });
        
        belowFoldSections.forEach(section => {
            observer.observe(section);
        });
        
    }, 50);
});