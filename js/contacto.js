// JavaScript para validación del formulario de contacto
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validar campos requeridos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || subject === '' || message === '' || !terms) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        return;
    }

    // Si todo es válido
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';

    // Resetear formulario
    form.reset();

    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000);

    // Scroll suave al mensaje de éxito
    successMessage.scrollIntoView({ behavior: 'smooth' });
});