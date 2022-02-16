/*
  Напиши скрипт, который изменяет цвета фона элемента <body>
  через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

  <div class="widget">
    <p>Background color: <span class="color">-</span></p>
    <button type="button" class="change-color">Change color</button>
  </div>
*/
const bodyRef = document.body;
const buttonRef = document.querySelector('.widget > .change-color');
const spanRef = document.querySelector('.widget .color');


buttonRef.addEventListener('click', onChangeColorButtonClick)



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onChangeColorButtonClick() {
  const randomHexValue = getRandomHexColor();
  spanRef.textContent = randomHexValue;
  bodyRef.style.backgroundColor = randomHexValue;
}