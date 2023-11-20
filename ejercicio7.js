
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

    porcentaje(variableUsuario,d);

}else if (variableUsuario>=20000 && variableUsuario<35000) {

    porcentaje(variableUsuario,c);

}else if (variableUsuario>=20000 && variableUsuario<35000) {

    porcentaje(variableUsuario,b);

}else if (variableUsuario>=20000 && variableUsuario<35000) {

    porcentaje(variableUsuario,a);

}
function porcentaje(x, y){
    total = x * y
    mensaje=(mensaje + total.toLocaleString().toString() + moneda);
    //document.write("<H1>mensaje + total.toLocaleString().toString() + moneda</H1>")
    document.write("<H1>"+mensaje+"</H1>")
    return alert(mensaje + total.toLocaleString().toString() + moneda);
    
}