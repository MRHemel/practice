document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw = parseFloat(withdrawField.value);

    if (isNaN(withdraw)) {
        alert('input numer');
        withdrawField.value = '';
    }
    else {
        const balanceTotal = document.getElementById('balance-total');
        const totalBalance = parseFloat(balanceTotal.innerText);
        if (withdraw > totalBalance) {
            alert('shortage');
            withdrawField.value = '';
            return;

        }

        const withdrawTotal = document.getElementById('withdraw-total');
        const totalWithdraw = parseFloat(withdrawTotal.innerText);
        withdrawTotal.innerText = withdraw + totalWithdraw;


        balanceTotal.innerText = totalBalance - withdraw;
        withdrawField.value = '';

    }

})