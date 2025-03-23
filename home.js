function toggleFavorite(element) {
    if (element.innerText === "♡") {
        element.innerText = "❤️";
    } else {
        element.innerText = "♡";
    }
}

function redirectToProfile() {
    window.location.href = "profile.html"; // Redirects to profile.html
}