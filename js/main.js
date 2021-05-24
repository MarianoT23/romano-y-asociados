console.time('JS is loading fine')


/* Navbar Active
document.addEventListener('scroll', function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('js-nav').classList.add('active')
    } else {
        document.getElementById('js-nav').classList.remove('active')
    }
})*/


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

// Barba
barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave() {
        anime({
            targets: '.anime-js',
            translateX: 1000
          });
      },
      enter() {
        anime({
            targets: '.anime-js',
            translateX: 1000
          });
      }
    }]
  });


console.timeEnd("JS is loading fine");

