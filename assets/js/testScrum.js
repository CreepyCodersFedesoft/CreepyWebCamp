let btnScrum = document.getElementById("btnScrum");
let $modalRes = document.getElementById("modalRes");
let resultado = 0;


const validarFormularioScrum = () =>{
    let txtModal = "";
    let $Q1S = document.getElementsByName("Q1ALGOS");
    let $Q2S = document.getElementsByName("Q2ALGOS");
    let $Q3S = document.getElementsByName("Q3ALGOS");
    let $Q4S = document.getElementsByName("Q4ALGOS");
    let $Q5S = document.getElementsByName("Q5ALGOS");
    resultado = 0;
    limpiar($Q1S);
    limpiar($Q2S);
    limpiar($Q3S);
    limpiar($Q4S);
    limpiar($Q5S);
    
    if (validadorScrum($Q1S, "b") && validadorScrum($Q2S, "a") && validadorScrum($Q3S, "c") && validadorScrum($Q4S, "c") && validadorScrum($Q5S, "c")) {
        txtModal = `Se tienen ${resultado} de 5 respuestas correctas\n
        La puntuación fue de ${resultado*20} puntos`;
        document.getElementById("exampleModalLabel").innerHTML = "Puntuación";
        $modalRes.innerText = txtModal;
    } else {
        document.getElementById("exampleModalLabel").innerHTML = "¡Error!";
        $modalRes.innerText = "Error: Faltan respuestas por marcar";
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
    //console.log(id);
    //console.log(question);
    question = question.slice(0, 1);
    //console.log(question);
    console.log("color"+document.getElementsByName(id)[0].style.background);
    if (question === res) {
        
        document.getElementsByName(id)[0].style.color = "#39C42E";
        return true;
    } else {
        document.getElementsByName(id)[0].style.color = "#DA3C20";
        return false;
    }
};

const limpiar = (q) => {
    let question = NaN;
    let id = "";
    console.log(q.length);
    for (let i = 0; i < q.length; i++) {
        id = q[i].id;
        console.log(document.getElementsByName(id)[0]);
        question = document.getElementsByName(id)[0].style.color = "#000000";
        
    }
};

btnScrum.onclick = function () {
    
    validarFormularioScrum();
};
