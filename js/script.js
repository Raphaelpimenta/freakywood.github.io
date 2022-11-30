const btnMobile = document.getElementById('menu-mobile');

function ativaMenu(event){
    if (event.type === 'touchstart') {
        event.preventDefault()
    }

    const nav = document.querySelector('nav')
    nav.classList.toggle('ativa');

}

btnMobile.addEventListener('click', ativaMenu);
btnMobile.addEventListener('touchstart', ativaMenu);