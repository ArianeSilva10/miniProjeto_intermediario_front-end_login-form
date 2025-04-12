document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-bs-theme-value');
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem('theme', theme);

        document.querySelectorAll('[data-bs-theme-value]').forEach(el => {
            el.setAttribute('aria-pressed', 'false');
        });
        button.setAttribute('aria-pressed', 'true');
    });
}
);