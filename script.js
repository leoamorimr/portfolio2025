document.addEventListener('DOMContentLoaded', () => {
    // Configuração do Tema
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Mostra todos os comandos e respostas imediatamente
    document.querySelectorAll('.command').forEach(command => {
        command.textContent = command.dataset.text;
    });

    document.querySelectorAll('.response').forEach(response => {
        response.style.opacity = '1';
        response.style.transform = 'translateY(0)';
    });
});

