import { Financing } from './financing.js'

const bodyTable = document.querySelector('#bodyTable');
const buttonCalculate = document.querySelector('#buttonCalculate');
const valueText = document.querySelector('#valueText');
const downPaymentText = document.querySelector('#downPaymentText');
const deadlineText = document.querySelector('#deadlineText');

function cleanBodyTable() {
    while(bodyTable.firstChild) {
        bodyTable.removeChild(bodyTable.firstChild);
    }
}

buttonCalculate.addEventListener('click', function() {
    cleanBodyTable();
    const value = parseFloat(listValue.value);
    const downPayment = parseFloat(downPaymentText.value);
    const interestRate = 1
    const deadline = parseFloat(deadlineText.value);
    let simulation;
    simulation = new Financing(value, downPayment, interestRate, deadline);
    simulation.calcMonthlyInstallments();
    simulation.showInstallments(); 
})