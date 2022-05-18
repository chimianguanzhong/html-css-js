const username = document.getElementById('username-text')
const password = document.getElementById('password-text')


function checkInput () {
    const usernameValue = username.value.trim()
    const passwordValue = username.value.trim()
    const usernameAlert = document.querySelector('.username-alert')
    const passwordAlert = document.querySelector('.password-alert')

    if(usernameValue === '') {
        usernameAlert.style.visibility = 'visible';
    } else {
        usernameAlert.style.visibility = 'hidden';
    }
    if(passwordValue === '') {
        passwordAlert.style.visibility = 'visible';
    } else {
        passwordAlert.style.visibility = 'hidden';
    }
}

const btn = document.querySelector('.login-btn');

btn.addEventListener('click', function() {
    checkInput()
})
