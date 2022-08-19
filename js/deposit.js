document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositField.value);
    if (isNaN(depositAmount)) {

        alert("input number please");
        depositField.value = '';
    }
    else {

        const depositTotalElement = document.getElementById('deposit-total');
        const depositTotal = parseFloat(depositTotalElement.innerText);
        depositTotalElement.innerText = depositAmount + depositTotal;
        const balanceTotalElement = document.getElementById('balance-total');
        const balanceTotal = parseFloat(balanceTotalElement.innerText);
        balanceTotalElement.innerText = balanceTotal + depositAmount;
        depositField.value = '';
    }


})