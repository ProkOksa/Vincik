// Задача 1
let quantityStock = 200;
let quantityOrder = prompt('Укажите количество заказуемого товара?', '');

if (quantityOrder > quantityStock) {
  alert('На складе нет такого количества товаров');
} else
if (quantityOrder == quantityStock) {
  alert('Вы забираете весь товар c нашего склада!');
} else
if (quantityOrder < quantityStock) {
  alert('Заказ принят');
}

// Задача 2
let costDelivery = prompt('Укажите место доствки товара', '')

switch (costDelivery) {
  case 'Луна':
    alert(`Стоимость доставки для области Луна: 150 Q `);
    break;
  case 'Крабовидная туманность':
    alert(`Стоимость доставки для области Крабовидная туманность: 250 Q `);
    break;
  case 'Галактика Туманность Андромеды':
    alert(`Стоимость доставки для области Галактика Туманность Андромеды: 550 Q `);
    break;
  case 'Туманность Ориона':
    alert(`Стоимость доставки для области Туманность Ориона: 600 Q `);
    break;
  case 'Звезда смерти':
    alert(`Стоимость доставки для области Звезда смерти: договорная`);
    break;
  default:
    alert("В ваш квадрант доставка не осуществляется");
}

// Задача 3
let productPrice = prompt('Введите цену тавара', '');

try {
  if (priceOfProduct == 'Number');
  alert('Цена товара введена корректно');
} catch {
  alert(`Вы допустили ошибку: ${productPrice} не является числом`)
}

// Задача 4
let planetResidence = prompt('Введите планету проживания', '');
let age = prompt('Введите возраст', '');

switch (planetResidence) {
  case 'Земля':
    if (age < 18) {
      alert('Вы не достигли совершеннолетия');
    } else {
      alert('Приятных покупок');
    }
    break;
  case 'Юпитер':
    if (age < 120) {
      alert('Сожалеем. Вернитесь на 120-й день рождения!');
    } else {
      alert('Чистого неба и удачных покупок!');
    }
    break;
  default:
    alert('Спасибо, что пользуетесь услугами нашего магазина!');
}