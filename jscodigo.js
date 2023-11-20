alert("bienvenido")


// let sexo="";
// let primeraLetraNombre='f';
// let nombreCompleto="";
// let mensaje="";
// let aprobado = false;

// mensaje= "bienvenido a su programa de division de grupos";
// mensaje += "\n por favor ingrese su nombre y sexo para la clasificacion";
// nombreCompleto=prompt(mensaje+" ingrese su nombre").toLowerCase();
// sexo= prompt("ingrese su sexo femenino o masculino").toLocaleLowerCase();

// do{
//     if(sexo=="masculino" || sexo=="femenino"){
//         //seleccciono la letra ya tengo el sexo 
//         primeraLetraNombre = nombreCompleto[0];
//         //realizo el if
//         if(primeraLetraNombre < "m"){
//             alert("la letra $primeraLetraNombre es menor que m")
//             if(sexo=="masculino"){
//                 alert("su grupo es A")
//             }else{

//             }
             
//         }
//         //salida del bucle
//         aprobado= true;
//     }else{
//         alert("ingreso un sexo incorrecto o mal escrito \n ingrese femenino o masculino");
//         sexo= prompt("ingrese su sexo femenino o masculino").toLocaleLowerCase();
//         aprobado= false;
//     }
// }while(aprobado== true)

let sexo, nombreCompleto, mensaje, letraNombre = "";
let repetir = true;
//en este pedazo tomaremos las entradas del usuario nombre y sexo
nombreCompleto = prompt(`Bienvenido a su programa de división de grupos.\nPor favor, ingrese su nombre y sexo para la clasificación.\nIngrese su nombre`).toLowerCase();
letraNombre = nombreCompleto[0];
sexo = prompt("Ingrese su sexo (femenino o masculino)").toLowerCase();
//aca creo el bucle para verificar los datos
while (repetir) {
    if (sexo === "femenino" || sexo === "masculino") {
        if (sexo === "femenino") {
            mensaje = letraNombre < "m" ? `Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo A` : `Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo B`;
            alert(mensaje);
            document.write("<h1>Mensaje de bienvenida</h1>");
            document.write(`Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo A`);
            repetir = false;
        } else {
            mensaje = letraNombre < "n" ? `Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo A` : `Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo B`;
            alert(mensaje);
            document.write("<h1>Mensaje de bienvenida</h1>");
            document.write(`Hola ${nombreCompleto}, su sexo es ${sexo}. Usted pertenece al Grupo A`);
            repetir = false;
        }
    } else {
        sexo = prompt(`El sexo no es femenino ni masculino.\nPor favor, elija solo uno de los dos.\nIngrese su sexo (femenino o masculino)`).toLowerCase();
           }
} 


