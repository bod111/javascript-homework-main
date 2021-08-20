// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

//     Создай переменную counterValue в которой будет хранится текущее значение счетчика.
//     Создай функции increment и decrement для увеличения и уменьшения значения счетчика
//     Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const container = document.querySelector('#counter')
const refs = {
    buttonIncr: container.querySelector('[data-action="increment"]'),
    buttonDecr: container.querySelector('[data-action="decrement"]'),
    span: container.querySelector('#value'),
};
let counterValue = Number(refs.span.textContent);
refs.buttonIncr.addEventListener('click', onIncrement);
refs.buttonDecr.addEventListener('click', onDecrement);
function onIncrement() {
    counterValue += 1;
    refs.span.textContent = counterValue
}
function onDecrement() {
    counterValue -= 1;
    refs.span.textContent = counterValue
}