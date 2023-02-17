console.log(`Задача №1 Конвертация скоростей`);
let kmh=36, ms=20
console.log(`${kmh} км/ч соответсвует ${kmh/3600*1000} м/с`);
console.log(`${ms} м/с соответсвует ${ms*3600/1000} км/ч`);

console.log(`\nЗадача №2 Прямоугольник`)
let a = 3, b = 4, c = 5;
let p = (a+b+c)/2;
let P = a+b+c;
let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
if (a+b>c && a+c>b && b+c>a) {
    console.log(`Треугольник существует`);
    console.log(`Периметр P = ${P}`);
    console.log(`Площадь S = ${S}`);
    console.log(`Отношение P/S = ${P/S}`);
} else {
    console.log(`Треугольник не существует`);
}

console.log(`\nЗадача №3 Fizz-Buzz`)
let nam = prompt("Введите число");
if (nam >= 0 && nam % 1 == 0) {
    let count = 0;
    while (nam > count) {
        if (count % 5 == 0) {
            console.log(count + " fizz buzz");
        } else if (count % 2 == 0) {
            console.log(count + " buzz");
        } else {
            console.log(count + " fizz");
        }
        count++;
    }
} else {
    console.log("вы ввели не число или отрицательное число");
}

console.log(`\nЗадача №4 Елка к новому году`)
let A = 1, B = 12;
while (B>A) {
    console.log("*".repeat(A))
    console.log("#".repeat(A+1))
    A=A+2
}
console.log("||")

console.log(`\nЗадача №5 Угадай число`)
let number1 = 20;
let number2 = prompt("Введите число");
if (number1 = number2) {
    console.log("угадано")
} else if (number1<number2) {
    console.log("Ваше число больше")
} else if (number1>number2) {console.log("Ваше число меньше")}
else console.log("Введите число")

console.log(`\nЗадача №6 Деление`)
n = prompt("Введите число n");
x = prompt("Введите число x");
y = prompt("Введите число y");
if(n%1==0 && x%1==0 && y%1==0){
    if(n%x==0 && n%y==0){
        console.log("n = "+n +", x = "+x+", y = "+y+" => true");
    }else{
        console.log("n = "+n +", x = "+x+", y = "+y+" => false");
    }
}
console.log(`\nЗадача №7 Кварталы`)
let month = prompt("Введите месяц");
if(month>=0 && month<=3){
    console.log("месяц " + month + " => 1 квартал");
}else if(month>=4 && month<=6){
    console.log("месяц " + month + " => 2 квартал");
}else if(month>=7 && month<=9){
    console.log("месяц " + month + " => 3 квартал");
}else if(month>=10 && month<=12){
    console.log("месяц " + month + " => 4 квартал");
}
// const myFunc1 = function () {
//     return 7;
// };

// const myFunc2 = function () {
//     return 7;
// };


// const sum = function (a,b){
//     return a+b;
// }


// const Sum = function (a,b){
//     console.log(a);
//     return a+b;
// }

// const myArray = [1,'2', true, [], ()=>{},{}];
// console.log(myArray);

// const myObject = {
//     0:1, 
//     1: "2",
//     array_length:3,
// }
// console.log(myObject.array_length)

// console.log(Object.keys(myObject))
// for (something of myArray){
//     console.log(something);
// } //для перебора массива

// myArray.forEach(()=>{})