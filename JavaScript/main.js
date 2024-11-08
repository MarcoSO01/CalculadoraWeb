let titulo = document.getElementById("titulo");
let num1 = null;
let num2 = null;
let operacion = null;
let cleaner = false;

function numNuevo(value) {
    if (cleaner) {
        titulo.value = value;
        cleaner = false;
    } else {
        titulo.value += value;
    }
}

function darOperacion(operador) {
    if (num1 === null) {
        num1 = parseFloat(titulo.value);
    } else if (!cleaner) {
        calcular();
        num1 = parseFloat(titulo.value);
    }

    operacion = operador;
    cleaner = true;
}

function calcular() {
    if (num1 !== null && operacion !== null && !cleaner) {
        num2 = parseFloat(titulo.value);

        switch (operacion) {
            case '+':
                titulo.value = num1 + num2;
                break;
            case '-':
                titulo.value = num1 - num2;
                break;
            case '*':
                titulo.value = num1 * num2;
                break;
            case '/':
                titulo.value = num1 / num2;
                break;
        }

        num1 = parseFloat(titulo.value);
        operacion = null;
    }
}

function reinicio() {
    titulo.value = '';
    num1 = null;
    num2 = null;
    operacion = null;
    cleaner = false;
}
