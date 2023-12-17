const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const calculo = document.getElementById("calculo");
let resultado;
calculo.innerHTML= "  ";

function somar(){
    let resultado = parseFloat(n1.value)+parseFloat(n2.value);

    calculo.innerHTML = resultado;
}
function subtrair(){
    let resultado = parseFloat(n1.value)-parseFloat(n2.value);

    calculo.innerHTML = resultado;
}
function multiplicar(){
    let resultado = parseFloat(n1.value)*parseFloat(n2.value);

    calculo.innerHTML = resultado;
}
function dividir(){
    let resultado = parseFloat(n1.value)/parseFloat(n2.value);

    calculo.innerHTML = resultado;
}