document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const messageDiv = document.getElementById("message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform client-side validation here, if needed.

        // Simulate a server-side check (replace with actual server-side code)
        if (username === "jyo" && password === "password") {
            messageDiv.innerText = "Login successful!";
            messageDiv.style.color = "green";
        } else {
            messageDiv.innerText = "Invalid username or password. Please try again.";
            messageDiv.style.color = "red";
        }
    });
});



