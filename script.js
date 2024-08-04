document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.querySelector('.sign-up');
    const logInButton = document.querySelector('.log-in');

    signUpButton.addEventListener('click', function() {
        window.location.href = 'sign-up.html'; // Navigate to the sign-up page
    });

    logInButton.addEventListener('click', function() {
        window.location.href = 'log-in.html'; // Navigate to the log-in page
    });
});
