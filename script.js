function toggleMenu() {
    const navUl = document.querySelector('nav > ul');
    navUl.classList.toggle('active');
}

// Add event listener to the menu toggle button
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', toggleMenu);

// Submenu handling:
const contactLink = document.querySelector('nav > ul > li:nth-child(4) > a');
const submenu = document.querySelector('.submenu');

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    submenu.classList.toggle('active');
});

// Close submenu if clicked outside of it (for better UX)
document.addEventListener('click', function(event) {
    if (!contactLink.contains(event.target) && !submenu.contains(event.target) && submenu.classList.contains('active')) {
        submenu.classList.remove('active');
    }
});


document.getElementById('telegram').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://t.me/wannantotoths1', '_blank'); // Replace with your link
});

document.getElementById('whatsapp').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://chat.whatsapp.com/Cwy2d5FVnX0L6L2qaUfHlo', '_blank'); // Replace with your link
});

document.getElementById('youtube').addEventListener('click', function(event) {
    event.preventDefault();
    window.open('https://www.youtube.com/yourChannel', '_blank'); // Replace with your link
});

// Trigger popup for Contact Us
document.querySelector('.contact-us').addEventListener('click', function(event) {
    event.preventDefault();
    openContactForm();
});

function openContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = 'block';
}

function closeContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.style.display = 'none';
}

// Close the contact form if the user clicks outside of it
const contactForm = document.getElementById('contactForm');
window.addEventListener('click', function(event) {
    if (event.target == contactForm) {
        closeContactForm();
    }
});