export class Installment {
    #number;
    #value;
    #interestAmount;
    #amortization;
    #balance;
    constructor(number, value, interestAmount, amortization, balance) {
        this.#number = number;
        this.#value = value;
        this.#interestAmount = interestAmount;
        this.#amortization = amortization;
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    getFormattedInfos() {
        const infos = [];
        infos.push(this.#number);
        infos.push(this.#value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        infos.push(this.#amortization.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        infos.push(this.#interestAmount.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        infos.push(this.#balance.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
        return infos;
    }
}