// Task 6: Fetch Recommendations
function fetchRecommendations() {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Process and display data
            displayResults(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Task 7: Keyword Searches
function search() {
    const query = document.getElementById('search').value.toLowerCase();
    // Fetch recommendations and filter based on query
    fetchRecommendations();
}

function reset() {
    document.getElementById('search').value = '';
    // Clear search results
    document.getElementById('results').innerHTML = '';
}

// Task 9: Clear Button
function clearResults() {
    document.getElementById('results').innerHTML = '';
}

// Optional: Task 10 - Country Date and Time
function displayTimeInNewYork() {
    const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const newYorkTime = new Date().toLocaleTimeString('en-US', options);
    console.log("Current time in New York:", newYorkTime);
}

// Call this function if you want to display time automatically on page load
displayTimeInNewYork();

function displayResults(results) {
    const resultsContainer = document.getElementById('content');
    resultsContainer.innerHTML = results.map(result => `
        <div class="result-item">
            <h2>${result.name}</h2>
            <img src="images/${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
        </div>
    `).join('');
}
