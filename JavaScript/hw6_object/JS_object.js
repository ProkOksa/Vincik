const positions = [
  'Телепорт бытовой VZHIH-101',
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)'
];

const prices = [
  10000,
  4800,
  9200,
  2500,
  57000
];

let hitName = positions[2];
let hitPrice = prices[2];

// Задача 1
let hit = {};
hit.name = hitName;
hit.price = hitPrice;

console.log(`Хит продаж мартобря: <${hit.name}> цена ${hit.price} Q`);

// Задача 2
let items = [];

for (let i = 0; i < positions.length; i++) {
  items[i] = {};
  items[i].name = positions[i];
  items[i].price = prices[i];
}

console.log(`Купите ${items[4].name} по цене ${items[4].price} Q`);


// Задача 3

function showDiscount(product, amount){
  let discount;

  if (amount < 10) {
    discount = 5
  } else if (amount < 50) {
    discount = 7;
  } else if(amount < 100) {
    discount = 10;
  } else {
    discount = 15;
  }

  let discountPrice = product.price * discount / 100;
  let toPay = (product.price - discountPrice) * amount;
  let profit = product.price * amount - toPay;

  console.log(`${product.name} — стоимость партии из ${amount} штук ${toPay} Q (скидка ${discount} %), ваша выгода ${profit} Q!`)
}

showDiscount(items[0], 12);
showDiscount(items[3], 97);

// Задача 4
items[3]['amount'] = 4;

function updateAmount(product, consumption = 1) {
  if (product.amount === undefined) {
    return;
  } else if (product.amount === 0 || consumption > product.amount) {
    console.log(`${product.name} закончился на складе`);
  } else if(product.amount > consumption) {
    product.amount -= consumption;
    console.log(`${product.name} — остаток ${product.amount} шт.`)
  } else if (product.amount === consumption) {
    product.amount -= consumption;
    console.log(`Это был последний ${product.name}, вам повезло!`)
  }
}

updateAmount(items[1], 17);
updateAmount(items[3], 3);
updateAmount(items[3]);



