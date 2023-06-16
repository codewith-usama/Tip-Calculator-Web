const btnEl = document.getElementById("btn");
const billEl = document.getElementById("bill-amount");
const tipEl = document.getElementById("tip-percentage");
const resultEl = document.getElementById("result");

function checkTipandBill() {
    const tipPercentage = parseFloat(tipEl.value);
    const billAmount = parseFloat(billEl.value);
    if (!tipPercentage || !billAmount || isNaN(tipPercentage) || isNaN(billAmount)) {
        alert("Please enter a valid Tip and Bill amount");
    } else {
        console.log("Clicked");
        const tipAmount = (tipPercentage / 100) * billAmount;
        const totalAmount = billAmount + tipAmount;
        resultEl.innerText = `Total: ${totalAmount.toFixed(3)}`;
    }
}

btnEl.addEventListener("click", checkTipandBill);
