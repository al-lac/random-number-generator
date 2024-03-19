function generateRandomNumber() {
    const min = parseInt(document.getElementById('min').value, 10);
    const max = parseInt(document.getElementById('max').value, 10);
    if (!isNaN(min) && !isNaN(max) && min <= max) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        document.getElementById('result').innerText = randomNumber;
    } else {
        document.getElementById('result').innerText = "Please enter valid min and max values.";
    }
}
