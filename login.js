document.getElementById('btn-submit').addEventListener('click', function () {

    const emailField = document.getElementById('login-mail');
    const email = emailField.value;


    const passwordfield = document.getElementById('login-password');
    const password = passwordfield.value;
    //  Danger: This mathod use only for practice perpuse ... do not use this coding system in your clint project.. its just for bigenner
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'summary.html';
    }
    else {
        alert('ভুলভাল পাসওয়ার্ড দেস কেন রে, সঠিক পাস দে');
    }
})