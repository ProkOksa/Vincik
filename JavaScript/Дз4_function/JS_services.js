//Задача 1
let needForGuarantee = confirm('Нужна ли вам дополнительная гаранитя');
let years
let warrantyValue;

function calcWarrantyCost(age) {
  if (age === 1 || age === 2) {
    return age === 1 ? 1250 : 2300;
  } else {
    return 0;
  }
}

if (!!needForGuarantee) {
  years = parseFloat(prompt('Укажите скрок дополнительной гарантии', '1 или 2', ''));
  warrantyValue = calcWarrantyCost(years);
  console.log(`Дополнительное гарантийное обслуживание: ${warrantyValue} Q`);
} else {
  console.log(`Дополнительное гарантийное обслуживание: 0 Q`);
}

//Задача 2
let needForEngraving = confirm('Хотите ли вы грайвировку на товаре?');
let engravingСost;

function countEngravingСost() {
  let string = prompt('Укажите текст грайвировки:', '');
  let words = string.split(' ');
  let numberWordsEngraving = !!string ? words.length : 0;
  if (!numberWordsEngraving || string === 'undefined') {
    return 0;
  } else if (numberWordsEngraving > 0) {
    let priceOf1Word = 11;
    return priceOf1Word * numberWordsEngraving;
  }
}

if (!!needForEngraving) {
  engravingСost = countEngravingСost()
  console.log(`Подарочная упаковка и гравировка: ${engravingСost} Q`);
} else {
  console.log(`Подарочная упаковка и гравировка: 0 Q`);
}

// Задача 3
let deliveryRegion;
let needForDelivery = confirm('Нужна ли вам доставка?');

function delivery(isNeedDelivery) {
  if (!!isNeedDelivery) {
    deliveryRegion = prompt('Укажите регион доставки', '');
    if (deliveryRegion === 'Луна') {
      return 150;
    } else if (deliveryRegion === 'Крабовидная туманность') {
      return 250;
    } else if (deliveryRegion === 'Галактика Туманность Андромеды') {
      return 550;
    } else if (deliveryRegion === 'Туманность Ориона') {
      return 600;
    } else {
      return NaN;
    }
  } else {
    return 0;
  }
}

let result = delivery(needForDelivery);
showInformationDelivery();

function showInformationDelivery() {
  if (result > 0) {
    console.log(`Стоимость доставки: ${result} Q`);
  } else if (result === 0) {
    console.log(`Доставка не требуется`);
  } else {
    console.log(`Ошибка при расчете стоимости доставки`);
  }
}
console.log(`\n`);

// Задача 4
let totalCost;

function totalCostCount(price) {
  return price + warrantyValue + engravingСost + result;
}

totalCost = totalCostCount(1000);

console.log(`Общая стоимость заказа: ${totalCost} Q.` + `\n` +
  `Из них ${warrantyValue} Q за гарантийное обслуживание на ${years} год/года.` + `\n` +
  `Гравировка на сумму ${engravingСost} Q` + `\n` +
  `Доставка в область ${deliveryRegion}: ${result} Q.`);