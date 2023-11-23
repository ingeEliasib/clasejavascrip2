//declaracion de mis variables a utilizar

let saludo=`bienvenido a su software tributario \n con este software vamos a revisar el porcentaje que le corresponde segun su declaración de renta  `;
let mensaje= `el valor que usted deberà pagar es de :` 
let moneda=` €`;
let variableUsuario;
let total=0
let a = 0.05;
let b= 0.15;
let c= 0.20;
let d= 0.30;
let e = 0.45;
let  estadoSoftware=true;

//inicio mi interfaz de usuario

alert(saludo);
while (estadoSoftware) {
    variableUsuario  = prompt("ingrese el valor de su renta anual ingrese x para salir");
    if (variableUsuario!="x") {
        variableUsuario= parseInt(variableUsuario)
        if (variableUsuario>=60000) {
            porcentaje(variableUsuario,e);
        } else if (variableUsuario>=35000 && variableUsuario <60000) {
            porcentaje(variableUsuario,d);
        }else if (variableUsuario >=20000 && variableUsuario <35000) {
            porcentaje(variableUsuario,c);
        }else if ( variableUsuario>=20000 && variableUsuario <35000) {
            porcentaje(variableUsuario,b);
        }else if (variableUsuario>=20000 && variableUsuario<35000) {
            porcentaje(variableUsuario,a);
        }
    }else {
        alert("Esta saliendo del software que tenga buen dìa")
        estadoSoftware=false
    }
    
    }

function porcentaje(x, y){
    total = x * y
    mensaje=(mensaje + total.toLocaleString().toString() + moneda);
    document.write("<H1>"+mensaje+"</H1>")
    return alert(mensaje + total.toLocaleString().toString() + moneda);
    
}