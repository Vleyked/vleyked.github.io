// Theme toggle functionality
const themeToggleButtom = document.getElementById('theme-toggle');
themeToggleButtom.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Smooth scrolling functionality
document.querySelectorAll('.nav-link[data-scroll-to]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('data-scroll-to');
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});