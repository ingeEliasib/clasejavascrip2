
let mensaje=`el valor del importe que ustede pagara es de `;
let moneda=` €`;
let variableUsuario  = +prompt("ingrese el valor de su renta anual");
let total=0
let a = 0.05;
let b= 0.15;
let c= 0.20;
let d= 0.30;
let e = 0.45;

if (variableUsuario>=60000) {
    //revisamos cuando es mayor a 60 mil euros 
    porcentaje(variableUsuario,e);
    
} else if (variableUsuario>=35000 && variableUsuario<60000) {
    alert(mensaje + porcentaje(variableUsuario,e).toString());
}else if (variableUsuario>=20000 && variableUsuario<35000) {
    alert(mensaje + porcentaje(variableUsuario,e).toString());
}
function porcentaje(x, y){
    total = x * y
    mensaje=(mensaje + total.toLocaleString().toString() + moneda).toString;
    document.write("<H1>mensaje + total.toLocaleString().toString() + moneda</H1>")
    return alert(mensaje + total.toLocaleString().toString() + moneda);
    
    
}