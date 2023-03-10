const input = document.getElementById('number');

function absValue(value){
    if(isNaN(value)) return NaN;
    return value<0 ? -value : value;
}

function onSubmit() {
    document.body.insertAdjacentHTML('beforeEnd', 
    `<p>absValue(${input.value}) -> ${absValue(input.value)}</p>`);
    input.value = '';
};