var SegundoTexto = false;
var Operador = "";

function Sumar() {
    SegundoTexto = true;
    Operador = "+";
}
function Restar() {
    SegundoTexto = true;
    Operador = "-";
    /*alert("el resultado es= " + (Number(txtNum1.value) - Number(txtNum2.value)));*/
}
function Multiplicar() {
    SegundoTexto = true;
    Operador = "*";
    /*alert("el resultado es= " + (Number(txtNum1.value) * Number(txtNum2.value)));*/
}
function Dividir() {
    SegundoTexto = true;
    Operador = "/";
   /* alert("el resultado es= " + (Number(txtNum1.value) / Number(txtNum2.value)));*/
}
function Ingrese(numBoton) {
    if (!SegundoTexto) {
        txtNum1.value += numBoton;

    }
    if (SegundoTexto) {
        txtNum2.value += numBoton;
    }
}
function Operacion() {
    switch (Operador) {
        case "+":
            alert("el resultado es= " + (Number(txtNum1.value) + Number(txtNum2.value)));
            break;
        case "-":
            alert("el resultado es= " + (Number(txtNum1.value) - Number(txtNum2.value)));
            break;
        case "*":
            alert("el resultado es= " + (Number(txtNum1.value) * Number(txtNum2.value)));
            break;
        case "/":
            alert("el resultado es= " + (Number(txtNum1.value) / Number(txtNum2.value)));
            break;
        default:
            break;
    }

}

function Borrar() {
    txtNum1.value = "";
    txtNum2.value = "";
    SegundoTexto = false;
    Operador = "";

}
