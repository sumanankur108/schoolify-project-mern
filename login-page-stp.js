// JavaScript to handle button click and navigate to the login page
document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'after-login-page.html';
});