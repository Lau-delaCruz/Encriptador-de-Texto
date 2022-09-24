const inputTexto=document.querySelector(".input-padron");
const mensaje=document.querySelector(".input-mensaje");

function botonEncriptar (){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"; //para que desaparezca la imagen
    inputTexto.value ="";  //para que limpie la pantalla
}


function encriptar(stringEncriptada){
let matrizCodigo=[["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringEncriptada=stringEncriptada.toLowerCase(); //esto es para validar todo las letras a minusculas


for(let i = 0; i < matrizCodigo.length; i++){
    if (stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada=stringEncriptada.replaceAll(matrizCodigo [i] [0], matrizCodigo[i][1])
    }
}
return stringEncriptada;
}

function botonDesencriptar (){
    const textoEncriptado=desencriptar(inputTexto.value);
    mensaje.value=textoEncriptado;
    mensaje.style.backgroundImage="none"; //para que desaparezca la imagen
    inputTexto.value =""  //para que limpie la pantalla
}


function desencriptar(stringDesencriptada){
let matrizCodigo=[["e", "enter"], ["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
stringDesencriptada=stringDesencriptada.toLowerCase(); //esto es para validar todo las letras a minusculas


for(let i = 0; i < matrizCodigo.length; i++){
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo [i] [1], matrizCodigo[i][0])
    }
}
return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value= ""
    alert("Copiado");
}

