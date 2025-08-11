export function criarMenu(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";

    const titulo = document.createElement("h1"); 
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");
    const paraHam = document.createElement("h3");
    const paraPor = document.createElement("h3");
    const paraBebi = document.createElement("h3");


    paraHam.textContent = "Hamburguers";
    paraPor.textContent = "Porcoes";
    paraBebi.textContent = "Bebidas";

    titulo.textContent = "Menu";
    divContent.append(titulo,containerMenu);
    containerMenu.append(paraHam,paraPor,paraBebi)

}