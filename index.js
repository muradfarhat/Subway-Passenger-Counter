let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment(){
    // count += 1;
    count++;
    countEl.textContent = count;
}

function save(){
    let countVal = count + " - ";
    saveEl.textContent += countVal;
    count = 0;
    countEl.textContent = count;
}

