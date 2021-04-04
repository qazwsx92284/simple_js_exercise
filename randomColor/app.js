const btn = document.querySelector('#btn');
const span = document.querySelector('#colorNum');
btn.addEventListener('click', randomColor);

function randomColor() {
    const arg1 = randomNumber();
    const arg2 = randomNumber();
    const arg3 = randomNumber();
    document.body.style.backgroundColor = `rgb(${arg1},${arg2},${arg3})`;
    document.getElementById('colorNum').innerText=`${arg1},${arg2},${arg3}`;
}

function randomNumber() {
    return Math.floor(Math.random()*256);
}