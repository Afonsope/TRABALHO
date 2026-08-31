/*
   HONORATO BARBEARIA - PREMIUM INTERACTIVE SCRIPTS
   Refactored Mobile Navigation Actions
*/

function toggleMenu() {
    const body = document.body;
    const menu = document.querySelector('.nav-sidebar');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    
    if (menu && menuHamburguer) {
        menu.classList.toggle('ativo');
        menuHamburguer.classList.toggle('ativo');
        
        // Prevents page scrolling behind mobile menu overlay
        body.classList.toggle('no-scroll', menu.classList.contains('ativo'));
    }
}

// Attach click listeners to menu items to automatically close the sidebar after navigation click
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.nav-sidebar ul li a');
    const menu = document.querySelector('.nav-sidebar');
    const menuHamburguer = document.querySelector('.menu-hamburguer');
    const body = document.body;

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu && menu.classList.contains('ativo')) {
                menu.classList.remove('ativo');
                if (menuHamburguer) menuHamburguer.classList.remove('ativo');
                body.classList.remove('no-scroll');
            }
        });
    });
});
