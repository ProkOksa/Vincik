//Задача 1
let warrantyValue = calcWarrantyCost(1);

function calcWarrantyCost(years) {
  switch (years) {
    case 1:
      return 1250;
    case 2:
      return 2300;
    default:
      return 0;
  }
}

console.log(`Дополнительное гарантийное обслуживание: ${warrantyValue} Q`);

//Задача 2
const string = 'Это пробный текст грайвировки';
const words = string.split(' ');

let numberWordsEngraving = words.length;
let priceOf1Word = 11;


function calcEngravingCost(numberWordsEngraving) {
  if (numberWordsEngraving === undefined) {
    console.log(`Подарочная упаковка и гравировка: 0 Q`);
  } else if (numberWordsEngraving > 0) {
    console.log(`Подарочная упаковка и гравировка: ${numberWordsEngraving * priceOf1Word} Q`);
  }
}
calcEngravingCost(numberWordsEngraving);