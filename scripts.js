function showAlert() {
    alert("Welcome to FXDRILLERY! Let's get started with your forex journey.");
}

// Example of adding dynamic content
document.addEventListener('DOMContentLoaded', (event) => {
    const educationSection = document.getElementById('education');
    const newContent = document.createElement('p');
    newContent.textContent = "Stay tuned for our latest articles and tutorials!";
    educationSection.appendChild(newContent);
});
