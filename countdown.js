
// Set the start date (when counting began) in milliseconds
const startDate = new Date("2024-01-01T00:00:00").getTime();

// Set the interval between each life being saved (10 minutes in milliseconds)
const lifeSavingInterval = 1 * 60 * 1000; // 10 minutes in milliseconds

// Function to calculate the number of lives saved
function calculateLivesSaved() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startDate;
    const livesSaved = Math.floor(elapsedTime / lifeSavingInterval);
    return livesSaved;
}

// Function to update the life counter on the webpage
function updateLifeCounter() {
    const livesSaved = calculateLivesSaved();
    document.getElementById("lifeCounter").textContent = livesSaved;
}

// Initial call to display the current number of lives saved
updateLifeCounter();

// Update the life counter every second
setInterval(updateLifeCounter, 1000);

