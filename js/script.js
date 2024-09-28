document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los inputs
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    // Colocar los números en un array y ordenarlos
    const numbers = [num1, num2, num3];
    numbers.sort((a, b) => a - b);
    
    // Mostrar el resultado
    document.getElementById('result').textContent = 'Números ordenados: ' + numbers.join(', ');
});