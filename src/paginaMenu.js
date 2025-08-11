export function criarMenu(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";

    const titulo = document.createElement("h1"); 
    const containerMenu = document.createElement("div");
    containerMenu.classList.add("containerMenu");
    titulo.textContent = "Menu";
    divContent.append(titulo,containerMenu);

}