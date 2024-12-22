const numbers = document.querySelectorAll('.numbers span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.querySelector('#replay');

document.addEventListener('DOMContentLoaded', () => {
    startAnimation();
});

function resetDOM() {
    counter.classList.remove('hide');
    final.classList.remove('show');
    
    numbers.forEach((number) => {
        number.classList.remove('in', 'out');
    });
    
    numbers[0].classList.add('in');
}

function startAnimation() {
    numbers.forEach((number, idx) => {
        const nextToLast = numbers.length - 1;

        number.addEventListener('animationend', (e) => {
            if (e.animationName === 'enter' && idx !== nextToLast) {
                number.classList.remove('in');
                number.classList.add('out');
            } else if (e.animationName === 'exit' && number.nextElementSibling) {
                number.classList.remove('out');
                number.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        });
    });
}

replay.addEventListener('click', () => {
    resetDOM();
    startAnimation();
});
