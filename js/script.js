import { Modal } from './modal.js';
import "./alert-erros.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const showAlertError = notANumber(weight) || notANumber(height);

    if (showAlertError) {
        console.log('mostrar o alerta erro')
    };

    const result = IMC(weight, height);
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    modalWrapper.classList.add('open');
};

function notANumber(value) {
    return isNaN(value) || value == ""
};

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
};