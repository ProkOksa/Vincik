'use strict';

const positions = [
  'Отвертка ультразвуковая WHO-D',
  'Ховерборд Mattel 2016',
  'Нейтрализатор FLASH black edition',
  'Меч световой FORCE (синий луч)',
  'Машина времени DeLorean',
  'Репликатор домашний STAR-94',
  'Лингвенсор 000-17',
  'Целеуказатель электронный WAY-Y'
]      

// Задача 1
let arrayLength = positions.length;

console.log('Список наименований');

for (let i = 0; i <= arrayLength - 1; i++) {
  console.log(`${i + 1} ${positions[i]}`);
}

// Задача 2
positions.push('Экзоскелет Trooper-111', 'Нейроинтерфейс игровой SEGUN', 'Семена дерева Эйва')

console.log('Окончательный список наименований');

positions.forEach(function(item, i) {
  console.log( `${i + 1} ${item}`);
});

// Задача 3
let firstIndex = positions.indexOf('Машина времени DeLorean');
positions.splice(firstIndex, 1);
positions.unshift('Машина времени DeLorean');

console.log('Принять в первую очередь');

for (let index in positions) {
  if (index > '2'){
    break;
  }
  console.log(positions[index])
}

// Задача 4
let [product1, product2, product3, product4, product5] = positions;

console.log(`В магазине ${product1}`);
console.log(`В магазине ${product2}`);
console.log(`В магазине ${product3}`);
console.log(`В магазине ${product4}`);
console.log(`В магазине ${product5}`);

console.log('Остальные товары');
 for (let i = 5; i < positions.length; i++) {
  console.log(`${i + 1} ${positions[i]}`);
}


