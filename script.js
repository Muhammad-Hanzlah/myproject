const passwordInput = document.getElementById('password');
const hideShowButton = document.getElementById('hide-show');
const logInButton = document.getElementById('log-in');

hideShowButton.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        hideShowButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        hideShowButton.textContent = 'Show';
    }
});
logInButton.addEventListener('click', () => {
    // Replace 'next-page.html' with the URL of the page you want to navigate to
    window.location.href = 'AddTask.html';
});