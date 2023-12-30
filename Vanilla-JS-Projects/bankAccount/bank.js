const balanceAmount = document.querySelector("span")
const withdraw = document.getElementById("withdraw")
const deposit = document.getElementById("Deposit")
const userAmount = document.getElementById("userAmount")


class bankAccount {
    constructor(balance){
        this.balance = balance;
    }
    deposit(amount){
        console.log(this.balance += amount);
    }
    withdraw(amount){
        if (this.balance -amount  <= 0) {
            withdraw.disabled = true;
            withdraw.style.opacity = 0.5
            console.log("not enough to withdraw");
            return
            } 
            console.log(this.balance -= amount);
        }
}

const bankAccount1 = new bankAccount (500)
console.log(bankAccount1.balance);
balanceAmount.innerHTML = bankAccount1.balance







withdraw.onclick = () => {
    const userAmountValue = Number(userAmount.value)
    bankAccount1.withdraw(userAmountValue);
    balanceAmount.innerHTML = bankAccount1.balance
} 
   
deposit.onclick = () => {
    const userAmountValue = Number(userAmount.value)
    bankAccount1.deposit(userAmountValue);
    balanceAmount.innerHTML = bankAccount1.balance
}
