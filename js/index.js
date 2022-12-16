(function scrollToTop() {
    const button = document.querySelector('.scroll-top-button')
    window.addEventListener('scroll', () => {
        if(document.documentElement.scrollTop > window.innerHeight) {
            button.classList.add('active')
            return
        }
        if(button.classList.contains('active')) {
            button.classList.remove('active')
        }
    })
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
})()

function mobileNav(brakepoint) {
    if(window.innerWidth <= brakepoint ) {
        const button = document.querySelector('.mobile-nav-button')
        const closeButton = document.querySelector('.nav-menu-close-button')
        const navMenu = document.querySelector('.nav-menu')

        button.addEventListener('click', () => {
            navMenu.classList.add('active')
        })
        closeButton.addEventListener('click', () => {
            navMenu.classList.remove('active')
        })

        const navLinks = document.querySelectorAll('.main-nav__link')
        navLinks.forEach( navlink => {
            navlink.addEventListener('click', (event) => {
                if(navlink.innerHTML == 'Главная') { return }
                event.preventDefault()
                const submenu = navlink.closest('.main-nav__item').querySelector('.sub-menu')
                submenu.classList.add('active')
            })
        })
        const subMenuCloseButtons = document.querySelectorAll('.sub-menu-close-button')
        subMenuCloseButtons.forEach( button => {
            button.addEventListener('click', () => {
                button.closest('.sub-menu').classList.remove('active')
            })
    })}
}
mobileNav(992)

function promoSlider() {
    const slider = document.querySelector('.promo-slider')
    if(slider) {
        const prSlider = tns({
          container: '.promo-slider',
          items: 1,
          slideBy: 'page',
          autoplay: true,
          /* controls: false, */
          controlsText: ['<', '>'],
          dots: false,
          arrowKeys: true,
          mouseDrag: true,
          nav: false,
          autoplayButton: false,
        })
    }
}
promoSlider()

function tab() {
    const tab = document.querySelector('.tab')
    if(!tab) {
        return
    }
    const tabButtons = tab.querySelectorAll('[data-toggle=tab]')
    const tabItems = tab.querySelectorAll('.tab-item')
    tabButtons.forEach( button => {
        button.addEventListener('click', () => {
            tabItems.forEach( item => {
                item.classList.remove('active')
                if(item.dataset.name === button.dataset.target) {
                    item.classList.add('active')
                }
            })
            tabButtons.forEach(button => button.classList.remove('active'))
            button.classList.add('active')
        })
    })
}
tab()