function runDemo() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    // Variable Declaration
    let message = "Welcome to Programming Fundamentals!";
    outputDiv.innerHTML += `<p>${message}</p>`;

    // Input and Output
    let userName = prompt("What's your name?");
    outputDiv.innerHTML += `<p>Hello, ${userName}!</p>`;

    // Looping Statements
    let randomNum = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    outputDiv.innerHTML += `<p>Displaying multiplication table for ${randomNum}:</p>`;
    for (let i = 1; i <= 10; i++) {
        let result = randomNum * i;
        outputDiv.innerHTML += `<p>${randomNum} x ${i} = ${result}</p>`;
    }

    // Conditional Statements
    let number = parseInt(prompt("Enter a number to check if it's even or odd:"));
    if (isNaN(number)) {
        outputDiv.innerHTML += `<p>That's not a valid number.</p>`;
    } else if (number % 2 === 0) {
        outputDiv.innerHTML += `<p>${number} is even.</p>`;
    } else {
        outputDiv.innerHTML += `<p>${number} is odd.</p>`;
    }
}