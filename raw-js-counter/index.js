let count = 0;

let counter = document.getElementById('count');


let addition = document.getElementById('addition');
addition.addEventListener('click', () => {
    count++
    counter.innerText = count
})

let subtract = document.getElementById('subtract');
subtract.addEventListener('click', () => {
    count--
    if(count >= 0){
        counter.innerText = count
    }else{
        count = 0
    }
})
