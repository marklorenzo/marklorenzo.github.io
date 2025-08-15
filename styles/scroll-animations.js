
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    revealElements.forEach(el => {
        observer.observe(el);
    });
});
