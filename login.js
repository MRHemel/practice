document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value
    // console.log(email, password);
    if (email === 'ami@gmail.com' && password === '1234') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Bhaag');
    }

})
