const loginForm = document.getElementById('login-form');
const errorMessage = document.querySelector('.error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Replace with your actual authentication logic
    const validCredentials = (email === 'rosyad@example.com' && password === 'modesenyap');

    if (validCredentials) {
        // Successful login, redirect to order page (replace with actual redirection logic)
        window.location.href = 'order.html';
    } else {
        errorMessage.textContent = 'Invalid email or password.';
    }
});
