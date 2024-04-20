function Calculate() {
    var fprint = 0;
    fprint += (document.getElementById("electric").value) * 105;
    fprint += (document.getElementById("gas").value) * 105;
    fprint += (document.getElementById("heat").value) * 113;
    fprint += (document.getElementById("mileage").value) * 0.79;
    fprint += (document.getElementById("flightLess").value) * 1100;
    fprint += (document.getElementById("flightMore").value) * 4400;
    if (document.getElementById("newspaper").value === "No") {
        fprint += 184;
    } else {
        fprint += 0;
    }
    if (document.getElementById("aluminumTin").value === "No") {
        fprint += 166;
    } else {
        fprint += 0;
    }
    localStorage.setItem("carbonFootprint", fprint); // Store the fprint in Local Storage
    console.log("Stored fprint in Local Storage: " + fprint); // Log the stored value
    return fprint;
}


function calculateAndRedirect() {
    // Calculate fprint
    var fprint = Calculate();
    
    // Store the fprint in Local Storage
    localStorage.setItem("carbonFootprint", fprint);
    
    // Redirect to dashboard.html
    window.location.href = "dashboard.html";
    
    // Return false to prevent the form from submitting normally
    return false;
}

// script.js
window.addEventListener('load', function() {
    const progressBar = document.getElementById('progress-bar');
    
    // Set the width of the progress bar to 100% when the page loads
    progressBar.style.width = '40%';
});

// index.js
function flipCard() {
    const card = document.getElementById('card');
    card.classList.toggle('flipped');
}

function handleCheckboxChange() {
    // Get the checkbox element
    const checkbox = document.getElementById('complete-checkbox');
    
    // Get the points header element
    const pointsHeader = document.getElementById('points-header');
    
    // Get the progress bar element
    const progressBar = document.getElementById('progress-bar');
    
    // Define the points to add when the checkbox is checked
    const pointsToAdd = 350; // You mentioned 350 points for completing the task
    
    // Parse the current points from the points header
    const currentPointsText = pointsHeader.textContent.match(/\d+/)[0];
    const currentPoints = parseInt(currentPointsText, 10);

    // Check if the checkbox is checked
    if (checkbox.checked) {
        // Calculate the new points
        const newPoints = currentPoints + pointsToAdd;
        
        // Update the points header text
        pointsHeader.textContent = `You have ${newPoints} points!`;
        
        // Calculate the percentage increase in the progress bar
        const percentageIncrease = (pointsToAdd / 1000) * 100; // Assuming the maximum points possible is 1000

        // Get the current width of the progress bar
        let currentWidth = parseFloat(progressBar.style.width);
        if (isNaN(currentWidth)) {
            currentWidth = 0;
        }

        // Calculate the new width
        const newWidth = currentWidth + percentageIncrease;

        // Update the progress bar's width
        progressBar.style.width = `${newWidth}%`;
    }
}
