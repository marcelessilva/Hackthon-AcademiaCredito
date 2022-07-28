const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
if (event.type === 'touchstart') event.preventDefault();
const containerNav = document.getElementById('container-nav');
containerNav.classList.toggle('active');
const active = containerNav.classList.contains('active')
event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);