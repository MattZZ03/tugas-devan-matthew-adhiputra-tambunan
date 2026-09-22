const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

document.getElementById('add').addEventListener('click', function() {
    const sum = parseFloat(num1.value) + parseFloat(num2.value);
    result.textContent = sum;
});

document.getElementById('subtract').addEventListener('click', function() {
    const subtract = parseFloat(num1.value) - parseFloat(num2.value);
    result.textContent = subtract;
});

document.getElementById('multiply').addEventListener('click', function() {
    const multiply = parseFloat(num1.value) * parseFloat(num2.value);
    result.textContent = multiply;
});

document.getElementById('divide').addEventListener('click', function() {
    const divide = parseFloat(num1.value) / parseFloat(num2.value);
    result.textContent = divide;
});