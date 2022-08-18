document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    if (depositField.value === '') {

        alert("input number please");
    }
    else {
        const depositAmount = parseFloat(depositField.value);
        const depositTotalElement = document.getElementById('deposit-total');
        const depositTotal = parseFloat(depositTotalElement.innerText);
        depositTotalElement.innerText = depositAmount + depositTotal;
        const balanceTotalElement = document.getElementById('balance-total');
        const balanceTotal = parseFloat(balanceTotalElement.innerText);
        balanceTotalElement.innerText = balanceTotal + depositAmount;
        depositField.value = '';
    }


})