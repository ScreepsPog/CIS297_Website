document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
        });
    }, { threshold: 0.15 }); // Determine when pop occurs

    document.querySelectorAll('.fade-section').forEach(section => {
        observer.observe(section);
    });
});
