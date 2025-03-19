document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-container');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!username.value || !password.value) {
            alert('Please fill in all fields');
            return;
        }
        alert('Login successful!');
        form.reset();
    });
}); 