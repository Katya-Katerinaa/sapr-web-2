const numList = document.getElementById('numList');
const outputNum = document.getElementById('outputValue');
const amountNum = document.getElementById('amountEdit');

function swapNums(num1, num2){
    
}

function getRandFloat(from, to){
    from = Number(from);
    to = Number(to);
    return isNaN(from) && isNaN(to) ? NaN : Math.random() * (to - from) + from;

}
function getRandArray(array, amount) {
    let res_array = [];
    for(i = 0; i < amount; i+=1){
        res_array[i] = array[Math.floor(getRandFloat(0, array.length))];
    }
    return res_array;
}

let numArray = [];

function delElement(){
    if(numArray.length<=0) return;
    numArray.pop();
    document.getElementById(`listEl${numArray.length}`).remove();
}
function addElement(){
    numList.insertAdjacentHTML('beforeEnd',
    `<li id="listEl${numArray.length}"><input type="number" id="numEl${numArray.length}"></li>`);
    numArray.push(0);
}

function onSubmit() {
    outputNum.value = "";
    
    for(i = 0; i < numArray.length; i+=1){
        numArray[i] = document.getElementById(`numEl${i}`).value;
    }
    outputNum.value=getRandArray(numArray, amountNum.value)
}; 

