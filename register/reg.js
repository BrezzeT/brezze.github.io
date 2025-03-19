document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    username.addEventListener('input', function() {
        if (this.value.length < 3) {
            this.setCustomValidity('Username must be at least 3 characters long');
        } else {
            this.setCustomValidity('');
        }
    });
    password.addEventListener('input', function() {
        if (this.value.length < 6) {
            this.setCustomValidity('Password must be at least 6 characters long');
        } else {
            this.setCustomValidity('');
        }
    });
    confirmPassword.addEventListener('input', function() {
        if (this.value !== password.value) {
            this.setCustomValidity('Passwords do not match');
        } else {
            this.setCustomValidity('');
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (form.checkValidity()) {
            alert('Registration successful!');
            form.reset();
        } else {
            form.reportValidity();
        }
    });
});
