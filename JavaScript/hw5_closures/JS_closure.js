// Задача 1 
const taxRate = 73;
let tax = 0;

function calcTax(cost) {
  tax += cost / 100 * taxRate;
  return tax;
}

calcTax(50);
calcTax(150);
calcTax(200);

console.log(`Налог с продаж (${taxRate} %), к оплате: ${tax} Q`);

//Задача 2
let package = 30;

function checkcPackage(width, height, length) {
  function calcPackage() {
    let areaPackage = width * height * length;
    if (areaPackage <= package) {
      package -= areaPackage;
      return true;
    } else {
      return false;
    }
  }
  if (calcPackage() === true) {
    console.log(`Заказ (${width}/${height}/${length} м) упакован, осталось упаковочной бумаги ${package} м2`);
  } else {
    console.log(`Заказ (${width}/${height}/${length} м) не упакован, осталось упаковочной бумаги ${package} м2`);
  }
}

checkcPackage(1, 2.2, 3.7);
checkcPackage(10, 4, 0.8);

// Задача 3
let teleportCharge = [7, 2, 1, 4, 8];
let counterFunctions = [];

for (let i = 0; i < teleportCharge.length; i++) {
  counterFunctions[i] = function() {
    if (teleportCharge[i] === 1) {
      teleportCharge[i] -= 1;
      console.log(`Телепорт ${i + 1} использован, заряд ${teleportCharge[i]} единиц, требуется перезарядка!`);
    } else if (teleportCharge[i] > 0) {
      teleportCharge[i] -= 1;
      console.log(`Телепорт ${i + 1} использован, заряд ${teleportCharge[i]} единиц.`);
    } else {
      console.log(`Телепорт ${i + 1} недоступен, перезаряжается`);
    }
  }
}

counterFunctions[1]();
counterFunctions[0]();
counterFunctions[2]();
counterFunctions[4]();
counterFunctions[3]();
counterFunctions[4]();
counterFunctions[1]();
counterFunctions[1]();