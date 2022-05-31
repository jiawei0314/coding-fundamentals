// Select the header element

const nav = document.querySelector('.navigationBar');


                
// Event listener: Mouse move                
// When user hovers around the top area, show the header      

// window.addEventListener('mousemove', function (e){
//     console.log (`x: ${e.x} | y: ${e.y}`);
// })

// X < 1420
// // y < 200

window.addEventListener('mousemove', e => {
let x = e.screenX
let y = e.screenY
if (x <= 1420 && y <= 120) {
    nav.classList.remove('nav--hidden');
} 
})

nav.addEventListener('mouseout', e => {
let x = e.screenX
let y = e.screenY
if (x !== 1420 && y !== 120) {
    nav.classList.add('nav--hidden');
} else {
    return
}
})
  
// Event listener: Scroll                
// When user scroll after a certain height, hide the header, else show the header

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        nav.classList.add('nav--hidden');
    } else {
        nav.classList.remove('nav--hidden');
    }

    lastScrollY = window.scrollY;
})

