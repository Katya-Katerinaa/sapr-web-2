const minNum = document.getElementById('minValue');
const maxNum = document.getElementById('maxValue');
const outputNum = document.getElementById('outputValue');

function getRandomFloat(min, max) {
    min = Number(min);
    max = Number(max);
    return isNaN(min) && isNaN(max) ? NaN : Math.random() * (max - min) + min;
}

function onSubmit() {
    outputNum.value = Math.floor(getRandomFloat(minNum.value, maxNum.value));
}; 