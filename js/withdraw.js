document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    if (withdrawField.value === '') {
        alert('input numer');
    }
    else {
        const withdraw = parseFloat(withdrawField.value);

        const withdrawTotal = document.getElementById('withdraw-total');
        const totalWithdraw = parseFloat(withdrawTotal.innerText);
        withdrawTotal.innerText = withdraw + totalWithdraw;

        const balanceTotal = document.getElementById('balance-total');
        const totalBalance = parseFloat(balanceTotal.innerText);
        balanceTotal.innerText = totalBalance - withdraw;
        withdrawField.value = '';

    }

})