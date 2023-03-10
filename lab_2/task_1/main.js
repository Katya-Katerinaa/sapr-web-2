const speedType = document.getElementById('speedConvType')
const inputNum = document.getElementById('inputNum')
const outputNum = document.getElementById('outputNum')

function convertSpeed(speedNum, speedType){
    switch(speedType){
        case 'KMHtoMS': 
            return speedNum * 1000 / 3600;
        case 'MStoKMH': 
            return speedNum / 1000 * 3600;
        default:
            return 'Error';
    }
};

function onSubmit(){
    outputNum.value = convertSpeed(inputNum.value, speedType.value);
};
