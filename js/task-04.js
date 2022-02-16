/*
    Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
    Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
    Обновляй интерфейс новым значением переменной counterValue.
*/

let counterValue = 0;
const refs = {
    btnIncrement: document.querySelector('[data-action="increment"]'),
    btnDecrement: document.querySelector('[data-action="decrement"]')
};

refs.btnIncrement.addEventListener('click', onIncrementButtonClick);
refs.btnDecrement.addEventListener('click', onDecrementButtonClick);

function onIncrementButtonClick() {
    counterValue += 1;
    updateInterface();
}

function onDecrementButtonClick() {
    counterValue -= 1;
    updateInterface();
}

function updateInterface() {
    const valueRef = document.querySelector('#value');
    valueRef.textContent = counterValue;
}
