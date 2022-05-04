const number = document.querySelector("#counter");
const btns = document.querySelectorAll(".btn");

let num_count = 0;

// const increaseNum = () => {
//     num_count += 1;
//     number.textContent = num_count;
// }
// inBtn.addEventListener('click', increaseNum);

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const btn_classes = e.currentTarget.classList;
        if(btn_classes.contains("increase")) {
            num_count++;
        } else if (btn_classes.contains("decrease")) {
            num_count--;
        } else {
            num_count = 0;
        }
        if(num_count>0) 
            number.style.color = "green";
        if(num_count<0)
            number.style.color = "red";
        if(num_count === 0) 
            number.style.color = "black";
        number.textContent = num_count;
    })
})