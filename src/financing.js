import { Installment } from './installment.js'

export class Financing {
    #interestRate;
    #deadline;
    #installments = [];
    constructor(value, downPayment, interestRate, deadline) {
        this.#interestRate = interestRate;
        this.#deadline = deadline;
        this.#installments.push(new Installment(0, 0, 0, 0, value - downPayment))
    }

    static calcInterestAmount(value, interestRate) {
        return value * (interestRate / 100);
    }

    calcMonthlyInstallments() {
        let balance = this.#installments[this.#installments.length - 1].getBalance();
        let deadline = this.#deadline - (this.#installments.length - 1);
        let amortization = balance / deadline;
        for (let i = 0; i < deadline; i++) {
            const number = this.#installments.length;
            const interestAmount = Financing.calcInterestAmount(balance, this.#interestRate);
            const value = interestAmount + amortization;
            balance -= amortization;
            if (balance < 0) { balance = 0; }
            this.#installments.push(new Installment(number, value, interestAmount, amortization, balance))
        }
    }

    showInstallments() {
        const installments = this.#installments.slice(1);
        for (const installment of installments) {
            const row = bodyTable.insertRow(-1);
            for (const data of installment.getFormattedInfos()) {
                const cell = row.insertCell(-1);
                cell.textContent = data;
            }
        }
    }

    getInstallments() {
        return this.installments;
    }
}