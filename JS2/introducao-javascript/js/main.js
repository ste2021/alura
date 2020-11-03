var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

if (peso < 0 || peso > 1000) { //as duas barrinhas siginifcam e, ou, em js
    console.log("Peso Invalido")
}

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(imc);
// var peso = tdPeso.textContent;

// var tdAltura = paciente.querySelector(".info-peso");