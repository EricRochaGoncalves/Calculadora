function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLastCharacter() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value.replace(/\*\*/g, '**'));
    } catch (error) {
        resultField.value = 'Erro';
    }
}
function closeCard() {
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
}