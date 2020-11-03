var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

//propriedade length para saber o tamanho doa array, podemos fazer um console.log(pacientes.length)
//pr percorerr o array de 0 a 5, i é só uma sintaxe
for (i = 0; i <= pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;


    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) { //as duas barrinhas siginifcam e, ou, em js
        console.log("Peso INvalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("paciente-invalido");
    }
    if (altura <= 0 || altura >= 3.00) { //as duas barrinhas siginifcam e, ou, em js
        console.log("Altura INvalido");
        alturaEhValida = false;
        tdImc.textContent = "Altura INVÁILIDA"
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!"
    }


}
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem() {
    console.log("Olá eu fui clicado!");
}

// var tdAltura = paciente.querySelector(".info-peso");