// Select the header element
const nav = document.querySelector('.navigationBar')

let lastScrollY = window.scrollY

// Event listener: Mouse move
// When user hovers around the top area, show the header
window.addEventListener('mousemove', (e) => {
    let y = e.screenY
    if (y <= 120) {
        nav.classList.remove('nav--hidden')
    }
})

nav.addEventListener('mouseout', () => {
    const isTopScreen = lastScrollY === 0

    if (isTopScreen) {
        return
    } else {
        nav.classList.add('nav--hidden')
    }
    
})

// Event listener: Scroll
// When user scroll after a certain height, hide the header, else show the header
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY

    if (lastScrollY < currentScrollY) {
        nav.classList.add('nav--hidden')
    } else {
        nav.classList.remove('nav--hidden')
    }

    lastScrollY = currentScrollY
})
