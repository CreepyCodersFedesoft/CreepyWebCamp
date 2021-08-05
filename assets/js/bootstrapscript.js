//Variables
let $validar = document.getElementById("btnValidar");
let $modalRes = document.getElementById("modalRes");
let result = 0;


const validarFormularioBootstrap = () =>{
    let txtModal = "";
    result= 0;
    let $Q1 = document.getElementsByName("bootstrap");
    let $Q2 = document.getElementsByName("integracion");
    let $Q3 = document.getElementsByName("creacion");
    limpiar($Q1);
    limpiar($Q2);
    limpiar($Q3);
    if (validadorAlgo($Q1, "c") && validadorAlgo($Q2, "a") && validadorAlgo($Q3, "c")) {
        txtModal = `Se tienen ${result} de 3 respuestas correctas\n
        La puntuación fue de ${Math.ceil(result*33.33)} puntos`;
        document.getElementById("exampleModalLabel").innerHTML = "Puntuación";
        $modalRes.innerText = txtModal;
    } else {
        document.getElementById("exampleModalLabel").innerHTML = "¡Error!";
        $modalRes.innerText = "Error: Faltan respuestas por marcar";
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

$validar.onclick = () => {
    validarFormularioBootstrap();
};

