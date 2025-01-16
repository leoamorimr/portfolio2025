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

    // Efeito de Digitação
    const commands = document.querySelectorAll('.command');
    let delay = 0;

    // Esconde todas as respostas inicialmente
    document.querySelectorAll('.response').forEach(response => {
        response.style.opacity = '0';
        response.style.transform = 'translateY(-10px)';
        response.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });

    commands.forEach((command, index) => {
        const text = command.dataset.text;
        command.textContent = '';

        setTimeout(() => {
            typeText(command, text);
        }, delay);

        delay += 2000;
    });
});

function typeText(element, text) {
    let index = 0;
    const response = element.nextElementSibling;
    const typingSpeed = 50;
    const responseDelay = 300;

    const typing = setInterval(() => {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
        } else {
            clearInterval(typing);
            setTimeout(() => {
                response.style.opacity = '1';
                response.style.transform = 'translateY(0)';
            }, responseDelay);
        }
    }, typingSpeed);
}

