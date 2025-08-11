import "./styles.css";
import {contentPageInicial} from "./paginaInicial.js";
import {criarMenu} from "./paginaMenu.js";
import {criarSobre} from "./paginaSobre.js";

contentPageInicial();


const botaoMenu = document.querySelector("nav button#menu");
botaoMenu.addEventListener("click",criarMenu);

const botaoInicio = document.querySelector("nav button#inicio");
botaoInicio.addEventListener("click",contentPageInicial);

const botaoSobre = document.querySelector("nav button#sobre");
botaoSobre.addEventListener("click",criarSobre);





