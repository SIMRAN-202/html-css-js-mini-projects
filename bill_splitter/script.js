// functionality of plus and mins buttons
document.getElementById('plus').addEventListener('click', function() {
    let peopleInput = document.getElementById('people');
    let currentValue = parseInt(peopleInput.value);
    peopleInput.value = currentValue + 1;
});

document.getElementById('minus').addEventListener('click', function() {
    let peopleInput = document.getElementById('people');
    let currentValue = parseInt(peopleInput.value);
    if (currentValue > 1) {
        peopleInput.value = currentValue - 1;
    }
});

 // Function to update the right column with total amount and amount per person
function updateRightColumn(total, people) {
    const totalAmountSpan = document.getElementById('totalAmount');
    const amountPerPersonSpan = document.getElementById('amountPerPerson');

    // Update the text content
    totalAmountSpan.textContent = total.toFixed(2); // Formatting to 2 decimal places
    amountPerPersonSpan.textContent = (total / people).toFixed(2); // Calculating per person amount
}

// Event Listener for "Calculate" button
document.getElementById('calculate').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const people = parseInt(document.getElementById('people').value);
    const tip = parseFloat(document.getElementById('tip').value);

    if (!isNaN(amount) && !isNaN(people) && people > 0) {
        let total = amount + (amount * tip / 100);
        updateRightColumn(total, people);
    } else {
        alert('Please enter valid numbers');
    }
});

 // Event Listener for "Reset" button
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('amount').value = '';
    document.getElementById('people').value = '1';
    document.getElementById('tip').value = '';
    updateRightColumn(0, 0); // Reset amounts
});



