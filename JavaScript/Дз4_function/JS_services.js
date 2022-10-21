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
let qwe = confirm('Я хочу грайвировку!')

if (qwe == true) {
  const string = prompt('Укажите текст грайвировки:', '');
  const words = string.split(' ');

  let numberWordsEngraving = !!string ? words.length : 0;
  let priceOf1Word = 11;

  function calcEngravingCost(numberWordsEngraving) {
    if (!numberWordsEngraving || string === 'undefined') {
      console.log(`Подарочная упаковка и гравировка: 0 Q`);
    } else if (numberWordsEngraving > 0) {
      console.log(`Подарочная упаковка и гравировка: ${numberWordsEngraving * priceOf1Word} Q`);
    }
  }
  calcEngravingCost(numberWordsEngraving);
} else {
  alert('Вам не нужна грайвировка. Хорошего дня. Заходите к нам еще.')
  console.log(`Подарочная упаковка и гравировка: 0 Q`)
}

// Задача 3
let deliv = delivery();

function delivery(needForDelivery = prompt('Нужна ли вам доставка?', '')) {
  if (needForDelivery === 'да') {
    let deliveryRegion = prompt('Укажите куда доставить товар', '');
    if (deliveryRegion == 'Луна') {
      alert('Вы указади облость доставки Луна');
      console.log('Стоимость доставки: 150 Q');
    } else if (deliveryRegion == 'Крабовидная туманность') {
      alert('Вы указади облость доставки Крабовидная туманность');
      console.log('Стоимость доставки: 250 Q');
    } else if (deliveryRegion == 'Галактика Туманность Андромеды') {
      alert('Вы указади облость доставки Галактика Туманность Андромеды');
      console.log('Стоимость доставки: 550 Q');
    } else if (deliveryRegion == 'Туманность Ориона') {
      alert('Вы указади облость доставки Туманность Ориона');
      console.log('Стоимость доставки: 600 Q');
    } else {
      alert('В ваш регион доставка не осуществляется');
      console.log('Доставка не требуется');
    }
  } else if (needForDelivery == 'нет') {
    alert('Вам не ребуется доставка');
    console.log('Доставка не требуется');
  } else {
    console.log('Ошибка при расчете стоимости доставки');
  }
}
