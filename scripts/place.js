// Footer Dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

// Static variables matching displayed values (10 °C and 5 km/h)
const tempValue = 10;
const windSpeedValue = 5;

// One-line Wind Chill Formula (Metric)
// Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
const calculateWindChill = (temp, speed) =>
    (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);

// Conditionally call calculateWindChill
function displayWindChill() {
    const chillElement = document.getElementById("chill");

    // Viable conditions for Metric: Temp <= 10 °C AND Wind Speed > 4.8 km/h
    if (tempValue <= 10 && windSpeedValue > 4.8) {
        chillElement.textContent = `${calculateWindChill(tempValue, windSpeedValue)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }
}

// Run on page load
displayWindChill();