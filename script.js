// INITIAL DATA
let currentColor = 'black';

let screen = document.querySelector('#tela');
let ctx = screen.getContext('2d');

// EVENTS 
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent);
});

// FUNCTIONS 
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;

    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}