function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2) + ' °F';
    } else {
        document.getElementById('fahrenheit').textContent = '?';
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsiusOutput').textContent = celsius.toFixed(2) + ' °C';
    } else {
        document.getElementById('celsiusOutput').textContent = '?';
    }
}