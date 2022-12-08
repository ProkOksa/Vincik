// 1
let num = prompt('Укажите число', '');
let exp = prompt('Укажите степень', '');

console.log(`${num} в степени ${exp} = ${num ** exp}`);

//2
let arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = prompt('Укажите имя', '');
}

alert('Имена внесены успешно');

let user = prompt('Введите имя пользователя', '');

if (arr.includes(user) === true) {
  alert(`${user}, вы успешно вошли`);
} else {
  alert('Ошибка!');
}