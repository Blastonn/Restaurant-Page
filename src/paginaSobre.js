export function criarSobre(){
    const divContent = document.querySelector("div#content");
    divContent.innerHTML = "";
    const divContato = document.createElement("div");
    const paraContato = document.createElement("p");
    divContato.classList.add("contato");
    paraContato.textContent = "(XX)XXXXXXX";

    const titulo = document.createElement("h1"); 
    titulo.textContent = "Contato";
    divContent.append(titulo,divContato);
    divContato.appendChild(paraContato);

}