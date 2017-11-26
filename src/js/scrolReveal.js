console.log('scroll')
const coffeeOrigins = document.querySelector('.coffeeOrigins');

window.sr = ScrollReveal();

sr.reveal('.coffeeOrigin__wrapperContent', { duration: 1000, origin: 'top', viewFactor: 0.7, reset: false });
