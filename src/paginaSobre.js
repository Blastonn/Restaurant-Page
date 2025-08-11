export function criarSobre(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";

    const titulo = document.createElement("h1"); 
    titulo.textContent = "Sobre";
    divContent.append(titulo);

}