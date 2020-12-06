// 1) -----------------------------------------
let userName;
userName = prompt('Введите имя');
console.log(`Hello ${userName}`);
console.log('------------------------------------');
// 2) -----------------------------------------
let x;
x = Number(prompt('Введите x'));
x = x * 30 - 100;
console.log('x = ', x);
console.log('------------------------------------');
// 3) -----------------------------------------
let a, b, S;
a = Number(prompt('Введите сторону A прямоугольника'));
b = Number(prompt('Введите сторону B прямоугольника'));
S = a * b;
console.log('Площадь прямоугольника = ', S);
console.log('------------------------------------');
// 4) -----------------------------------------
let incomeOnDeposite, depositAmount, bet, numberOfDaysOfDepositValidity;
depositAmount = Number(prompt('Введите сумму вклада'));
bet = Number(prompt('Введите ставку'));
numberOfDaysOfDepositValidity = Number(prompt('Введите количество дней действия вклада'));
incomeOnDeposite = depositAmount + ((bet * 100 * (numberOfDaysOfDepositValidity / 365)) / 100);
console.log('Доход по депозиту = ', incomeOnDeposite);
console.log('------------------------------------');
// 5) -----------------------------------------
const THIS_YEAR = 2020;
console.log('Текущий год ', THIS_YEAR);
console.log('Следующий год ', THIS_YEAR + 1);
console.log('Предыдущий  год ', THIS_YEAR - 1);
console.log('------------------------------------');
// 6) -----------------------------------------
let year;
year = Number(prompt('Введите год'));
if (year % 4 == 0){
    console.log('Ваш год ', year, '- высокосный')
}
else {
    console.log('Ваш год', year, '- не высокосный');
}
console.log('------------------------------------');

// 9) -----------------------------------------
let V, Sball, r;
const PI = 3.14;
r = Number(prompt('Введите радиус'));
V = 3 / 4 * PI * Math.row(r, 3);
Sball = 4 * PI * Math.row(r, 2);
console.log('Объем шара = ', V);
console.log('Площадь шара = ', Sball);
console.log('------------------------------------');

// 11) -----------------------------------------
let pens, notebooks, discount, sum;
discount = 98/100;
pens = Number(prompt('Введите количество ручек')) * 5;
notebooks = Number(prompt('Введите количесво тетрадей')) * 10;
sum = pens + notebooks;
if (sum >= 500) {
    sum *= discount;
    console.log('Итоговая сумма с учетом скидки 2% = ', sum);
}
console.log('Итоговая сумма = ', sum);
console.log('------------------------------------');
// 13) -----------------------------------------

let item, price, itemsSum, secondDiscount;
secondDiscount = 97 / 100;
item = Number(prompt('Введите количество товара'));
price = Number(prompt('Введите цену товара'));
itemsSum = item * price;
if (itemsSum >= 500) {
    itemsSum *= discount;
    console.log('Итоговая сумма с учетом скидки 2% = ', itemsSum);
}
else if (itemsSum >= 700) {
    itemsSum *= secondDiscount;
    console.log('Итоговая сумма с учетом скидки 2% = ', itemsSum);
}
console.log('Итоговая сумма', itemsSum);
console.log('------------------------------------');
// 15) -----------------------------------------
let firstNumber, secondNumber, result,userResult;
firstNumber = Number(prompt('Введите первое число'));
secondNumber = Number(prompt('Введите второе число'));
result = firstNumber * secondNumber;
for (var i = 0; i > -1; i++){
    userResult = Number(prompt(`Посчитайте пожалуйста сколько будет ${firstNumber} умножить на ${secondNumber}`));
    if (userResult == result) {
        console.log('Верно!');
        break;
    }
}