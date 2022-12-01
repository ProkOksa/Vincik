let h3 = document.createElement('h3');
h3.innerHTML = 'Тест по программированию';
let body = document.querySelector('body');
body.insertBefore(h3, body.children[0]);

let form = document.createElement('form');
body.insertBefore(form, body.children[1]);

let divQuest1 = document.createElement('div');
divQuest1.classList.add('boxQuestion1');
let divQuest2 = document.createElement('div');
divQuest2.classList.add('boxQuestion2');
let divQuest3 = document.createElement('div');
divQuest3.classList.add('boxQuestion3');

let p1 = document.createElement('p');
p1.classList.add('question');
p1.innerHTML = '1. Вопрос №1';
let p2 = document.createElement('p');
p2.classList.add('question');
p2.innerHTML = '2. Вопрос №2';
let p3 = document.createElement('p');
p3.classList.add('question');
p3.innerHTML = '3. Вопрос №3';

let label11 = document.createElement('label');
label11.classList.add('answer11');
label11.innerHTML = '<span>Вариант ответа №1</span>';
let label12 = document.createElement('label');
label12.classList.add('answer12');
label12.innerHTML = '<span>Вариант ответа №2</span>';
let label13 = document.createElement('label');
label13.classList.add('answer13');
label13.innerHTML = '<span>Вариант ответа №3</span>';

let label21 = document.createElement('label');
label21.classList.add('answer21');
label21.innerHTML = '<span>Вариант ответа №1</span>';
let label22 = document.createElement('label');
label22.classList.add('answer22');
label22.innerHTML = '<span>Вариант ответа №2</span>';
let label23 = document.createElement('label');
label23.classList.add('answer23');
label23.innerHTML = '<span>Вариант ответа №3</span>';

let label31 = document.createElement('label');
label31.classList.add('answer31');
label31.innerHTML = '<span>Вариант ответа №1</span>';
let label32 = document.createElement('label');
label32.classList.add('answer32');
label32.innerHTML = '<span>Вариант ответа №2</span>';
let label33 = document.createElement('label');
label33.classList.add('answer33');
label33.innerHTML = '<span>Вариант ответа №3</span>';

let input11 = document.createElement('input');
input11.setAttribute("type", "checkbox");
let input12 = document.createElement('input');
input12.setAttribute("type", "checkbox");
let input13 = document.createElement('input');
input13.setAttribute("type", "checkbox");

let input21 = document.createElement('input');
input21.setAttribute("type", "checkbox");
let input22 = document.createElement('input');
input22.setAttribute("type", "checkbox");
let input23 = document.createElement('input');
input23.setAttribute("type", "checkbox");

let input31 = document.createElement('input');
input31.setAttribute("type", "checkbox");
let input32 = document.createElement('input');
input32.setAttribute("type", "checkbox");
let input33 = document.createElement('input');
input33.setAttribute("type", "checkbox");

let wrapperForm = document.querySelector('form');
wrapperForm.appendChild(divQuest1);
wrapperForm.appendChild(divQuest2);
wrapperForm.appendChild(divQuest3);

let wrapper1 = document.querySelector('.boxQuestion1');
wrapper1.appendChild(p1);
wrapper1.appendChild(label11);
wrapper1.appendChild(label12);
wrapper1.appendChild(label13);

let wrapper2 = document.querySelector('.boxQuestion2');
wrapper2.appendChild(p2);
wrapper2.appendChild(label21);
wrapper2.appendChild(label22);
wrapper2.appendChild(label23);

let wrapper3 = document.querySelector('.boxQuestion3');
wrapper3.appendChild(p3);
wrapper3.appendChild(label31);
wrapper3.appendChild(label32);
wrapper3.appendChild(label33);

let lab11 = document.querySelector('.answer11');
lab11.insertBefore(input11, lab11.children[0]);
let lab12 = document.querySelector('.answer12');
lab12.insertBefore(input12, lab12.children[0]);
let lab13 = document.querySelector('.answer13');
lab13.insertBefore(input13, lab13.children[0]);

let lab21 = document.querySelector('.answer21');
lab21.insertBefore(input21, lab21.children[0]);
let lab22 = document.querySelector('.answer22');
lab22.insertBefore(input22, lab22.children[0]);
let lab23 = document.querySelector('.answer23');
lab23.insertBefore(input23, lab23.children[0]);

let lab31 = document.querySelector('.answer31');
lab31.insertBefore(input31, lab31.children[0]);
let lab32 = document.querySelector('.answer32');
lab32.insertBefore(input32, lab32.children[0]);
let lab33 = document.querySelector('.answer33');
lab33.insertBefore(input33, lab33.children[0]);

let button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
wrapperForm.appendChild(button);

let styleForBody = document.querySelectorAll('body');
styleForBody.forEach(body => {body.style.fontFamily = 'Trebuchet MS, sans-serif'});

let styleForQuestion = document.querySelectorAll('h3');
styleForQuestion.forEach(h3 => {h3.style.textAlign = 'center'});

let styleForTitle = document.querySelectorAll('p');
styleForTitle.forEach(p => {p.style.margin = '10px 5px'});

let styleForLabel = document.querySelectorAll('label');
styleForLabel.forEach(label => {label.style.display = 'block'});
styleForLabel.forEach(label => {label.style.margin = '5px 20px'});

let styleForButton = document.querySelectorAll('button');
styleForButton.forEach(button => {button.style.padding = '5px 10px'});
styleForButton.forEach(button => {button.style.margin = '15px 50px'});