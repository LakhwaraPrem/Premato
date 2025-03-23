// Profile Picture Change
document.getElementById("profile-pic-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Logout Button Functionality
document.getElementById("logout-btn").addEventListener("click", function() {
    alert("Logging out...");
    window.location.href = "login.html"; // Change this to your login page
});