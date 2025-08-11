import hamburguer1 from "./img/Hamburguer_De_Lanchonete_PNG_Transparente.png"
import batata1 from "./img/Batata_Frita_PNG_Transparente_Sem_Fundo.png"
import suco1 from "./img/Copo_de_Sucos_Bebidas_PNG_Transparente.png"



export function criarMenu(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";

    const titulo = document.createElement("h1"); 
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");
    const paraHam = document.createElement("h3");
    const paraPor = document.createElement("h3");
    const paraBebi = document.createElement("h3");
    const paraDescHam = document.createElement("p");
    const paraDescPor = document.createElement("p");
    const paraDescSuco = document.createElement("p");
    const imgHamb = document.createElement("img");
    const imgBatata = document.createElement("img");
    const imgSuco = document.createElement("img");
    paraDescHam.classList.add("desc");
    paraDescPor.classList.add("desc");
    paraDescSuco.classList.add("desc");



    paraHam.textContent = "Hamburguers";
    paraPor.textContent = "Porcoes";
    paraBebi.textContent = "Bebidas";
    paraDescHam.textContent = "Hamburguer Simples";
    paraDescPor.textContent = "Suco de laranja";
    paraDescSuco.textContent = "Batata Pequena";

    imgHamb.src = hamburguer1;
    imgHamb.classList.add("hamburguers");
    imgBatata.src = batata1;
    imgBatata.classList.add("batatas");
    imgSuco.src = suco1;
    imgSuco.classList.add("sucos");


    titulo.textContent = "Menu";
    divContent.append(titulo,containerMenu);
    containerMenu.append(paraHam,paraPor,paraBebi,imgHamb,imgBatata,imgSuco,
        paraDescHam,paraDescSuco,paraDescPor);

}