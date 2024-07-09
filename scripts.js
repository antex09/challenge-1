
let btnEncrypt = document.querySelector(".encryptButton");
let txtEncrypt = document.querySelector(".inputText");
let aviso = document.querySelector(".avIso");
let respuesta = document.querySelector(".evaluar");
let contenido = document.querySelector(".container-box");
let btnCopy = document.querySelector(".copyButton");
let btnDecrypt = document.querySelector(".decryptButtun");

// Uso del botón encriptar
btnEncrypt.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncrypt.value;   
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.textContent = "El campo de texto no debe estar vacio";
    }

    else if(texto !== txt){
        aviso.textContent = "No debe tener acentos y caracteres especiales";
    }

    else if(texto !== texto.toLowerCase()){
        aviso.textContent = "El texto debe ser todo en minúscula";
    }       

    else{      
        texto = texto.replace(/e/igm, "enter");
        texto = texto.replace(/o/igm, "ober");
        texto = texto.replace(/i/igm, "imes");
        texto = texto.replace(/a/igm, "ai");
        texto = texto.replace(/u/igm, "ufat");       

        respuesta.innerHTML = texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
    }
});

// Uso del botón desencriptar
btnDecrypt.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncrypt.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if(texto == ""){
        aviso.textContent = "El campo de texto no debe estar vacio";
    }

    else if(texto !== txt){
        aviso.textContent = "No debe tener acentos y caracteres especiales";
    }

    else if(texto !== texto.toLowerCase()){
        aviso.textContent = "El texto debe ser solo minúscula";
    }

    else{
        texto = texto.replace(/enter/igm, "e");
        texto = texto.replace(/ober/igm, "o");
        texto = texto.replace(/imes/igm, "i");
        texto = texto.replace(/ai/igm, "a");
        texto = texto.replace(/ufat/igm, "u");

        respuesta.innerHTML= texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
    }
});

// Opción del botón copiar
btnCopy.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});