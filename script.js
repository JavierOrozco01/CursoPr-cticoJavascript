const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.getElementById("BtnCalcular");
const Presult = document.getElementById("result");


console.log(h1);
console.log(input1);
console.log(input2);
console.log(btn);
console.log(Presult);

function btnOnclick(){
    const sumaInputs = Number(input1.value) + Number(input2.value);
    Presult.innerHTML = "Resultado:" + sumaInputs; 
}


