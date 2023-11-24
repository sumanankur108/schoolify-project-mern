// JavaScript to handle button click and navigate to the login page
document.getElementById('createButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'already-user-login-page.html';
});