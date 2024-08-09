/*
alert()
for(let i = 1; i <=10; i++){
    console.log(i);
}

const frutas = ["manzana", "banana", "uva","pera", "naranja"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  */

const chicasalpoder = ["Grecia", "Alessandra",
    "Zamikey", "Diana", "Nicole"];
let lista =""

for (let i = 0; i < chicasalpoder.length; i++){
    lista +=`<li>${chicasalpoder[i]}</li>` ;
}

document.getElementById("integrantes").innerHTML = `<ul>${lista}</ul>`;
document.getElementById("lider").innerText = chicasalpoder[1];