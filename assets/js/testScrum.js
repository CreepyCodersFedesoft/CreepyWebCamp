let btnScrum = document.getElementById("btnScrum");
let resultado = 0;



const validarFormularioScrum = () =>{
    let $Q1S = document.getElementsByName("Q1ALGOS");
    let $Q2S = document.getElementsByName("Q2ALGOS");
    let $Q3S = document.getElementsByName("Q3ALGOS");
    let $Q4S = document.getElementsByName("Q4ALGOS");
    let $Q5S = document.getElementsByName("Q5ALGOS");

    
    if (validadorScrum($Q1S, "b") && validadorScrum($Q2S, "a") && validadorScrum($Q3S, "c") && validadorScrum($Q4S, "c") && validadorScrum($Q5S, "c")) {
        alert("Se tienen " + resultado + " de  5 respuestas correctas");
    } else {
        alert("Faltan respuestas por marcar")
        resultado = 0;
    }

};


const validadorScrum = (Q, res) =>{
    for (let i = 0; i < Q.length; i++) {
        if(Q[i].checked){
            if (compareQuestionScrum(Q[i], res)) {
                resultado += 1;
            }
            return true;
        }
    }
    return false;
};

const compareQuestionScrum = (Q, res) => {
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

btnScrum.onclick = function () {
    validarFormularioScrum();
};