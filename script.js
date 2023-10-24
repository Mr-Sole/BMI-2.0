function calculateBMI() {
    const weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    const weightUnit = document.getElementById('weight-unit').value;
    const heightUnit = document.getElementById('height-unit').value;
    const gender = document.getElementById('gender').value;
    const resultElement = document.getElementById('result');

    // Conversion of weight and height units
    if (weightUnit === 'lbs') {
        weight *= 0.453592; // Convert pounds to kilograms
    }
    if (heightUnit === 'ft') {
        height *= 0.3048; // Convert feet to meters
    }

    // BMI calculation
    const bmi = (weight / (height * height)).toFixed(2);

    // Category determination
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        category = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    // Result display
    resultElement.innerHTML = `Your BMI is: <span class="bmi-value">${bmi}</span>. You are <span class="bmi-category">${category}</span>. Gender: <span class="bmi-gender">${gender}</span>.`;
}

