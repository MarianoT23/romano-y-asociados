
(function () {
    window.addEventListener('load', () => {

        console.time('JS is loading fine')

        // Variables
        const menuItemProfesionales = document.getElementById('js-profesionales')
        const menuItemAreasPractica = document.getElementById('js-areas-practica')
        const menuItemContacto = document.getElementById('js-contacto')

        // Barba
        barba.init({
            transitions: [{
                sync: false, // sync the transitions up so they occur concurrently
                leave({current}) {
                    const targets = current.container; // target current page container
                    const a = anime({ 
                      targets: targets, 
                      opacity: [1, 0], 
                      duration: 400, 
                      easing: 'linear', 
                    });
                    return a.finished;
                },
                after({next}) {
                    const targets = next.container; // target next page container
                    const a = anime({ 
                      targets: targets, 
                      opacity: [0, 1], 
                      duration: 400, 
                      easing: 'linear', 
                    });
                    return a.finished;
                }
            }],
            views: [{
                namespace: 'inicio',
                beforeEnter(data) {
                    document.querySelector('nav').classList.remove('active')
                },
                beforeLeave(data) {
                    document.querySelector('nav').classList.add('active')
                }
            }, {
                namespace: 'profesionales',
                beforeEnter(data) {
                    menuItemProfesionales.classList.add('active')
                },
                beforeLeave(data) {
                    menuItemProfesionales.classList.remove('active')
                }
            }, 
            {
                namespace: 'areas-practica',
                beforeEnter(data) {
                    menuItemAreasPractica.classList.add('active')
                },
                beforeLeave(data) {
                    menuItemAreasPractica.classList.remove('active')
                }
            },
            {
                namespace: 'contacto',
                beforeEnter(data) {
                    menuItemContacto.classList.add('active')
                },
                beforeLeave(data) {
                    menuItemContacto.classList.remove('active')
                }
            }]
        });

        console.timeEnd("JS is loading fine");

    });

})();

/* Hamburger Menu
const hamburgerMenuContainer = document.getElementById('js-hambuerger-menu-container')
const hamburgerMenuLines = document.getElementById('js-hambuerger-menu-lines')
const navbarMenuContainer = document.getElementById('js-navbar-menu-container')

hamburgerMenuContainer.addEventListener('click', () => {
    if (hamburgerMenuLines.classList.contains('open')) {
        hamburgerMenuLines.classList.remove('open')
        navbarMenuContainer.classList.remove('active')
    } else {
        hamburgerMenuLines.classList.add('open')
        navbarMenuContainer.classList.add('active')
    }
})*/

// Menu Active Items


