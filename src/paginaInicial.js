import hamburguerImage from "./img/Hamburguer_De_Lanchonete_PNG_Transparente.png"

export function contentPageInicial(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";
    const titulo = document.createElement("h1");
    const img = document.createElement("img");
    const para = document.createElement("p");

    titulo.textContent = "Lanchonete Blaston";
    img.src = hamburguerImage;
    para.textContent = "Esse hamburguer pode ser seu. Pede ai po";
    
    divContent.append(titulo,img,para);
    
    img.classList.add("image");
};