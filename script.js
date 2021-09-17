// INITIAL DATA
let currentColor = 'black';

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// EVENTS 
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});


/* Step by step to draw on the canvas:
- When the mouse click Download, enable Drawing mode.
- When the mouse moves, if the drawing mode is enabled, draw.
- When the mouse click rise, disable the Drawing mode.
*/

// FUNCTIONS 
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}