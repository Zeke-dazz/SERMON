// ========================================
// MENU MOVIL
// ========================================
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
});

// Cerrar menu al hacer clic en un enlace
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        nav.classList.remove('active');
    });
});


// ========================================
// FORMULARIO DE CONTACTO
// ========================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value;
    
    // Mostrar mensaje de exito
    alert('Gracias ' + nombre + ', hemos recibido tu mensaje. Te contactaremos pronto.');
    
    // Limpiar formulario
    contactForm.reset();
});


// ========================================
// HEADER CON SCROLL
// ========================================
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});
