/*
    Напиши скрипт, который при потере фокуса на инпуте (событие blur),
    проверяет его содержимое на правильное количество введённых символов.

    <input
        type="text"
        id="validation-input"
        data-length="6"
        placeholder="Please enter 6 symbols"
    />
    Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
        Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
        Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

    #validation-input {
        border: 3px solid #bdbdbd;
    }

    #validation-input.valid {
        border-color: #4caf50;
    }

    #validation-input.invalid {
        border-color: #f44336;
    }
*/

const inputRef = document.getElementById('validation-input');

inputRef.addEventListener('blur', onInputChange);

function onInputChange(event) {
    const currentValue = event.currentTarget.value;
    const maxLength = event.currentTarget.dataset.length;

    const validationRules = [isInputValueValidLength, isInputValueHasOnlyChars];
    const isInputValueValid = validationRules.every(cb => cb(currentValue, maxLength));


    changeMarkup(isInputValueValid);
}

function isInputValueValidLength(value, length) {
    return value.length > 0 && value.length <= length;
}

function isInputValueHasOnlyChars(value) {
    return value.split('').every(char => isNaN(Number(char)));
}

function changeMarkup(isValid) {
    inputRef.classList.add('invalid');

    if (isValid) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
}