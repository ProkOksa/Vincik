// Задача № 1 - 2
let name = 'Телепорт бытовой VZHIH-101';
let price = 10000;

alert('В наличии имеется: "'+ name +'"');
alert('Стоимость товара '+ price +' Q');

// Задача № 3
let QuantityOfGoods = 2;
let AmountOfDiscount = price * QuantityOfGoods * 0.1;
let TotalPaymentAmount = QuantityOfGoods * price - AmountOfDiscount;

alert('Цена покупки составит ' + TotalPaymentAmount +' Q');

//Задача № 4
let balance = 52334224;
let CostOfGoods1 = 6500;
let NumberOfGoodsPurchased = balance / CostOfGoods1;
let RemainingMoney = balance % CostOfGoods1;

alert('Мы можем закупить ' + Math.trunc(NumberOfGoodsPurchased) +' единиц товара, после закупки на счету останется '+ RemainingMoney + ' Q');
