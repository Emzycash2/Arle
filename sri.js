// Event listener for form submission
document.getElementById("codeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("nameInput").value;
    const code = document.getElementById("codeInput").value;

    // Show a success message in popup if form data is valid
    if (name && code) {
        document.getElementById("popupMessage").textContent = `Hello, ${name}! Your code is ${code}.`;
        document.getElementById("popup").style.display = 'flex'; // Show the popup
    } else {
        document.getElementById("popupMessage").textContent = "Please provide both your name and code.";
        document.getElementById("popup").style.display = 'flex'; // Show the popup
    }
});

// Event listener for closing the popup using the "×" button
document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = 'none'; // Hide the popup when "×" button is clicked
});

// Event listener for closing the popup using the "Close" button inside the popup
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = 'none'; // Hide the popup when "Close" button is clicked
});
