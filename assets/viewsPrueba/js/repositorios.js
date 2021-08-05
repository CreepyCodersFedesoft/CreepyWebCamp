let $btnValAlgo = document.getElementById("btnValAlgo");
let resultado = 0;



const validarFormularioAlgoritmo = () =>{
    let $Q1 = document.getElementsByName("Q1ALGO");
    let $Q2 = document.getElementsByName("Q2ALGO");
    let $Q3 = document.getElementsByName("Q3ALGO");
    let $Q4 = document.getElementsByName("Q4ALGO");
    let $Q5 = document.getElementsByName("Q5ALGO");
    resultado = 0;

    
    if (validadorAlgo($Q1, "d") && validadorAlgo($Q2, "a") && validadorAlgo($Q3, "a") && validadorAlgo($Q4, "a") && validadorAlgo($Q5, "c")) {
        alert("Se tienen " + resultado + " de  5 respuestas correctas");
    } else {
        alert("faltan respuestas por marcar")
        resultado = 0;
    }

};


const validadorAlgo = (Q, res) =>{
    for (let i = 0; i < Q.length; i++) {
        if(Q[i].checked){
            if (compareQuestion(Q[i], res)) {
                resultado += 1;
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


$btnValAlgo.onclick = function () {
    validarFormularioAlgoritmo();
};


