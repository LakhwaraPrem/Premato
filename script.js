function redirectToDashboard() {
    // Get username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple validation (optional)
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return false;
    }

    // Redirect to another page (Change 'dashboard.html' to your desired page)
    window.location.href = "homepage.html"; 

    // Prevent form from submitting the default way
    return false;
}