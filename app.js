// Select elements from the DOM
const button = document.getElementById('action-btn');
const title = document.getElementById('main-title');
const description = document.getElementById('description');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Change text content
    title.textContent = "Hello from app.js!";
    description.textContent = "The code executed successfully and modified the website live.";
    
    // Change style dynamically
    title.style.color = "#28a745"; 
    button.style.backgroundColor = "#28a745";
    button.textContent = "Success!";
});
