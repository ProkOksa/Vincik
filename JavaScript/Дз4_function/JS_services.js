//Задача 1
let years;
let needForGuarantee = confirm('Нужна ли вам дополнительная гаранитя');
if (needForGuarantee == true) {
  function calcWarrantyCost(years = parseFloat(prompt('Укажите скрок дополнительной гарантии', '1 или 2'))) {
    if (years !== 1 || years !== 2) {
      alert('Вы указали что вам не нужна дополнительная гарантия')
      return 0;
    } else {
      alert('Спасибо!')
      return years === 1 ? 1250 : 2300;
    }
  }
} else {
  alert('Хорошего дня!')
}

let warrantyValue = calcWarrantyCost();

console.log(`Дополнительное гарантийное обслуживание: ${warrantyValue} Q`);

//Задача 2
function countEngravingСost() {
  let qwe = confirm('Я хочу грайвировку!')
  if (qwe == true) {
    let string = prompt('Укажите текст грайвировки:', '');
    let words = string.split(' ');
    let numberWordsEngraving = !!string ? words.length : 0;

    function calcEngravingCost(numberWordsEngraving) {
      if (!numberWordsEngraving || string === 'undefined') {
        return 0;
      } else if (numberWordsEngraving > 0) {
        let priceOf1Word = 11;
        let qwerr = priceOf1Word * numberWordsEngraving;
        return qwerr;
      }
    }
  } else {
    alert('Вам не нужна грайвировка. Хорошего дня. Заходите к нам еще.')
    return 0;
  }
}
let engravingСost = countEngravingСost();
console.log(`Подарочная упаковка и гравировка: ${engravingСost} Q`);

// Задача 3
let deliveryRegion;
let needForDelivery;

function delivery(needForDelivery = prompt('Нужна ли вам доставка. Ввеите да или нет', '')) {
  if (needForDelivery === 'да') {
    let deliveryRegion = prompt('Укажите куда доставить товар', '');
    if (deliveryRegion == 'Луна') {
      alert(`Вы указади облость доставки ${deliveryRegion}`);
      return 150;
    } else if (deliveryRegion == 'Крабовидная туманность') {
      alert(`Вы указади облость доставки ${deliveryRegion}`);
      return 250;
    } else if (deliveryRegion == 'Галактика Туманность Андромеды') {
      alert(`Вы указади облость доставки ${deliveryRegion}`);
      return 550;
    } else if (deliveryRegion == 'Туманность Ориона') {
      alert(`Вы указади облость доставки ${deliveryRegion}`);
      return 600;
    } else {
      alert('В ваш регион доставка не осуществляется');
      return 0;
    }
  } else if (needForDelivery == 'нет') {
    alert('Вам не ребуется доставка');
    return 0;
  } else {
    return NaN;
  }
}

let result = delivery();
showInformationDelivery()

function showInformationDelivery() {
  if (result > 0) {
    console.log(`Стоимость доставки: ${result} Q`);
  } else if (result == 0) {
    console.log(`Доставка не требуется`);
  } else {
    console.log(`Ошибка при расчете стоимости доставки`);
  }
}

console.log(``);

// Задача 4
let price = 200;
let general = [];

function totalCost(price, years, string, delivery){ 
  //  стоимость товара,    срок гарантии,     фразу для гравировки,     доставка
return price + warrantyValue + engravingСost + result;
}
general[0] = totalCost();

function calcWarrantyCost(years) {
  return warrantyValue;
}
general[1] = calcWarrantyCost();

function qwer(string){
 return engravingСost;
}
general[2] = qwer();

function qw(delivery){
 return result;
}
general[3] = qw();
 
console.log(`Общая стоимость заказа: ${general[0]} Q.`);
console.log(`Из них ${general[1]} Q за гарантийное обслуживание на ${years} год/года.`);
console.log(`Гравировка на сумму ${general[2]} Q.`);
console.log(`Доставка в область ${deliveryRegion}: ${general[3]} Q.`);