const number = document.querySelector("#counter");
const deBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const inBtn = document.querySelector("#increase");


let num_count = 0;
function increaseNum1() {
    number.parse
    number.textContent += 1;

}
const increaseNum = () => {
    num_count += 1;
    number.textContent = num_count;
}
inBtn.addEventListener('click', increaseNum);


const calculate = (btn) => {
    number.textContent += 1;
}