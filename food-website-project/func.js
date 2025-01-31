//add a Language selector
document.getElementById('changeLanguageBtn').addEventListener('click', function() {
    const greeting = document.getElementById('greeting');
    if (greeting.innerText === 'Hello, World!') {
        greeting.innerText = '¡Hola, Mundo!';
    } else {
        greeting.innerText = 'Hello, World!';
    }
});