// Задача № 1 - 2
let name = 'Телепорт бытовой VZHIH-101';
let price = 10000;

alert(`В наличии имеется: " ${name} "`);
alert(`Стоимость товара ${price} Q`);

// Задача № 3
let quantityGoods = 2;
let amountDiscount = price * quantityGoods * 0.1;
let totalPaymentAmount = quantityGoods * price - amountDiscount;

alert(`Цена покупки составит ${totalPaymentAmount} Q`);

//Задача № 4
let balance = 52334224;
let costGoods1 = 6500;
let goodsPurchased = balance / costGoods1;
let remainingMoney = balance % costGoods1;

alert(`Мы можем закупить ${Math.trunc(goodsPurchased)} единиц товара, после закупки на счету останется ${remainingMoney} Q`);