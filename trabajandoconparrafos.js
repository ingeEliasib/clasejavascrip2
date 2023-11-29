//prueba con parrafos
function descargarArchivoTexto(texto, nombreArchivo) {
    // Crear un Blob que contiene el texto
    let variabledocumento = new Blob([texto], { type: 'text/plain' });
    // Crear un elemento <a> para descargar el archivo
    const enlaceDescarga = document.createElement('a');
    enlaceDescarga.href = window.URL.createObjectURL(variabledocumento);
    enlaceDescarga.download = nombreArchivo;
    // Agregar el elemento <a> al documento y simular un clic para iniciar la descarga
    document.body.appendChild(enlaceDescarga);
    enlaceDescarga.click();
    // Eliminar el elemento <a> después de la descarga
    document.body.removeChild(enlaceDescarga);
}
const parrafo1 = document.getElementById('parrafo1');
let modificadoparrafo1 = parrafo1.innerText;
modificadoparrafo1 = modificadoparrafo1.replaceAll(".", "</br></p> <p>");
let nombreArchivo = "archivo.txt";
descargarArchivoTexto(modificadoparrafo1, nombreArchivo);
alert("Trabajando con el párrafo");
document.write(modificadoparrafo1)



//document.write(parrafo1.remplaceall(".","</br></p> <p>"))
//.indexOf(param) ***
//Devuelve la posicion de la primera coincidencia partiendo desde la posicion 0, podemos asignarle varios caracteres y en caso de no haber coincidencia arroja -1
// let msj = `Lorem ipsum amaretus`

// console.log(msj.indexOf(`m`)); //4


// // .replace(buscado,remplazador) ***
// //El va a ubicar la primera coincidencia con el parametro "buscado" y si la consigue la va a remplazar por el "remplezados"

// console.log(correo.replace("o","a")); //pepita@unc.com