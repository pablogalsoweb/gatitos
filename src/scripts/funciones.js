
window.addEventListener('scroll', function(){

    const headerMenu = document.querySelector('header');
    const barraFija = document.querySelector('.barra_contador');

    const headerMenuInfo = headerMenu.getBoundingClientRect();
    const barraFijaInfo = barraFija.getBoundingClientRect(); 
 

    if (barraFijaInfo.top <= headerMenuInfo.height) {
        barraFija.classList.add('fixed');
    } else {
        barraFija.classList.remove('fixed');
    }
});