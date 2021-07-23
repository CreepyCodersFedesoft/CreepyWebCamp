//Variables

let validar = document.getElementById("btnValidar");
let result = 0;


const validarFormularioBootstrap = () =>{
    let input1 = document.getElementsByName("bootstrap");
    let input2 = document.getElementsByName("integracion");
    let input3 = document.getElementsByName("creacion");

    if (validadorAlgo(input1, "b") && validadorAlgo(input2, "a") && validadorAlgo(input3, "d")) {
        alert("Se tienen " + resultado + " de  3 respuestas correctas");
    } else {
        alert("faltan respuestas por marcar")
        resultado = 0;
    }

};

//Funciones

fnaValidar =()=>{
    alert("Bien");
}

//EVENTOS

validar.onclick = function(){
    validarFormularioBootstrap();
}