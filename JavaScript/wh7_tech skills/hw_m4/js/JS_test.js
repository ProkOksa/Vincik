const generateHtml = {
  createHtml: () => {
  	let h3 = document.createElement('h3');
    h3.innerHTML = 'Тест по программированию';
    let body = document.querySelector('body');
    body.insertBefore(h3, body.children[0]);
    let form = document.createElement('form');
    body.insertBefore(form, body.children[1]);
    [1, 2, 3].forEach((n) => {
      let pQuest = document.createElement('p');
      let wrapper = document.querySelector('form');
      pQuest.classList.add('question');
      pQuest.innerHTML = `${n}. Вопрос №${n}`
      wrapper.appendChild(pQuest);
      generateHtml.creatingAnswerOptions();
      generateHtml.creatingAnswerOptions();
      generateHtml.creatingAnswerOptions();
    });
     let button = document.createElement('button');
    button.innerHTML = 'Проверить мои результаты';
    let wrapper = document.querySelector('form');
    wrapper.appendChild(button);
  },

  creatingAnswerOptions: () => {
    let label = document.createElement('label');
    let fotm = document.querySelector('form');
    label.classList.add('answer');
    label.innerHTML = `<span>Вариант ответа</span>`;
    fotm.appendChild(label);

    let input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    let allLabel = document.querySelectorAll('label');
    allLabel.forEach(label => { label.prepend(input) });
  }
}

generateHtml.createHtml();