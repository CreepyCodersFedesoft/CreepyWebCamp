//Variables

let validar = document.getElementById("btnValidar");
let result = 0;


const validarFormularioBootstrap = () =>{
    let $Q1 = document.getElementsByName("bootstrap");
    let $Q2 = document.getElementsByName("integracion");
    let $Q3 = document.getElementsByName("creacion");
    result= 0;
    if (validadorAlgo($Q1, "c") && validadorAlgo($Q2, "a") && validadorAlgo($Q3, "c")) {
        alert("Se tienen " + result + " de  3 respuestas correctas");
    } else {
        alert("faltan respuestas por marcar")
        result = 0;
    }

};

const validadorAlgo = (Q, res) =>{
    for (let i = 0; i < Q.length; i++) {
        if(Q[i].checked){
            if (compareQuestion(Q[i], res)) {
                result += 1;
            }
            return true;
        }
    }
    return false;
};

const compareQuestion = (Q, res) => {
    let id = Q.id;
    let question = document.getElementsByName(id)[0].innerText;
    console.log(id);
    console.log(question);
    question = question.slice(0, 1);
    console.log(question);
    if (question === res) {
        return true;
    } else {
        return false;
    }
};





//EVENTOS

validar.onclick = function(){
    validarFormularioBootstrap();
}