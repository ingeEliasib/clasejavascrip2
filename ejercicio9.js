let salir = 1;
let edad = 0;
let nombre;
let precio1 = `5 €`;
let precio2 = `10 €`;

document.write("<H5>BIENVENIDO A SU PROGRAMA DE JUEGOS </H5>")
while (salir !== 2) {
    nombre = prompt(`bienvenido a su programa de juegos \n si desea salir ingrese x \n ingrese su nombre: `);
    
    if (nombre.toLowerCase() === 'x') {
        salir = 2;
    } else {
        edad = prompt(`para poder ingresar ingrese su edad: `);
        
        if (!isNaN(edad)) {
            edad = parseInt(edad);
            
            if (edad > 3) {
                if (edad <= 18) {
                    alert(`hola ${nombre} usted tiene ${edad} el valor de su entrada es de ${precio1} puede ingresar`);
                    document.write("<H5> usuario ingresado:" + nombre + "precio" + precio1 + "</H5>");
                } else {
                    alert(`hola ${nombre} usted tiene ${edad} el valor de su entrada es de ${precio2} puede ingresar`);
                    document.write("<H5> usuario ingresado:" + nombre + "precio" + precio2 + "</H5>");
                }
            } else {
                alert(`hola ${nombre} usted tiene ${edad} el valor de su entrada es gratis puede ingresar`);
                alert(`puerta abierta`);
                document.write("<H5> usuario ingresado:" + nombre + "precio gratis </H5>");
            }
        } else {
            alert("Ingrese una edad válida.");
        }
    }
}
