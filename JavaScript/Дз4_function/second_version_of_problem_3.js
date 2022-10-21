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