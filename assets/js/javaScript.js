let $btnValAlgo = document.getElementById("btnValAlgo");
let $modalRes = document.getElementById("modalRes");
let resultado = 0;



const validarFormularioAlgoritmo = () =>{
    let txtModal = "";
    resultado = 0;
    let $Q1 = document.getElementsByName("Q1ALGO");
    let $Q2 = document.getElementsByName("Q2ALGO");
    let $Q3 = document.getElementsByName("Q3ALGO");
    let $Q4 = document.getElementsByName("Q4ALGO");
    let $Q5 = document.getElementsByName("Q5ALGO");

    limpiar($Q1);
    limpiar($Q2);
    limpiar($Q3);
    limpiar($Q4);
    limpiar($Q5);
    
    if (validadorAlgo($Q1, "a") && validadorAlgo($Q2, "c") && validadorAlgo($Q3, "a") && validadorAlgo($Q4, "d") && validadorAlgo($Q5, "c")) {
        txtModal = `Se tienen ${resultado} de 5 respuestas correctas\n
        La puntuación fue de ${resultado*20} puntos`;
        document.getElementById("exampleModalLabel").innerHTML = "Puntuación";
        $modalRes.innerText = txtModal;
    } else {
        document.getElementById("exampleModalLabel").innerHTML = "¡Error!";
        $modalRes.innerText = "Error: Faltan respuestas por marcar";
        resultado = 0;
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

$btnValAlgo.onclick = function () {
    
    validarFormularioAlgoritmo();
};

