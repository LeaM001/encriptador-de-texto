const d = document;

const textArea = d.querySelector(".form_input");

const imagenMuneco = d.querySelector(".resultado_img");
const cargando = d.querySelector(".loader");

const resultadoTitulo = d.querySelector(".resultado_titulo");
const resultadoTexto = d.querySelector(".resultado_texto");

const btnEncriptar = d.querySelector(".btn_encriptar");
const btnDesencriptar = d.querySelectorAll(".btn_desencriptar");
const btnCopiar = d.querySelector(".btn_copiar");

// "llaves" de encriptación:

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"]
];

// Funcion para encriptar:

function encriptarMensaje (mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
      for (let j = 0; j < llaves.length; j++) {
        if (letra === llaves[j][0]) {   //vocales en el [indice 0]
          encriptada = llaves[j][1];   //reemplaza la vocal por su equivalente en [indice 1]
          break;
        }
    }
  mensajeEncriptado += encriptada;
  }
return mensajeEncriptado;
}

// Funcion para Desencriptar:

function desencriptarMensaje (mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");  // Regular Expression
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); // Reemplaza el texto encriptado por su equivalente original
  }
  return mensajeDesencriptado;
}

// Ocultar elementos:

textArea.addEventListener("input", (e) => {
  imagenMuneco.style.display = "none";
  cargando.classList.remove("hidden");
  resultadoTitulo.textContent = "En un momentito joven.";
  resultadoTexto.textContent = "";
});

// Boton Encriptar:

btnEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value.toLowerCase();
  let mensajeEncriptado = encriptarMensaje(mensaje);
  resultadoTexto.textContent = mensajeEncriptado;
  btnCopiar.classList.remove("hidden");
  resultadoTitulo.textContent = "Resultado:";
});

// Boton Desencriptar:

btnDesencriptar[0].addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value.toLowerCase();
  let mensajeDesencriptado = desencriptarMensaje(mensaje);
  resultadoTexto.textContent = mensajeDesencriptado;
  resultadoTitulo.textContent = "Resultado:";
  btnCopiar.classList.remove("hidden");
});

// Boton Copiar:

btnCopiar.addEventListener('click', ()=>{
  let textoCopiado = resultadoTexto.textContent;
  navigator.clipboard.writeText(textoCopiado).then(()=> {
      imagenMuneco.style.display = "block";
      cargando.classList.add("hidden");
      resultadoTitulo.textContent = "El texto se copio";
      btnCopiar.classList.add("hidden");
      resultadoTexto.textContent = ""
  })
});