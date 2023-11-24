// codigo by Ing Eliasib
/*
codigo que ejecuta una sencilla division sin usar el operador de division / o %
realizando las verificaciones sencillas antes de realizar el proceso
*/
//creo mis variables
    
    let mensaje =`Bienvenido a su software de division sin operador de dividendo \n `;
    let opciones=``;
    let numeroUno , numeroDos,resultado,  conteoCantidadRestasRealizadas=0;
    let repetir=true;

    //realizamos el bucle
    while (repetir) {
        numeroUno = parseInt(prompt(mensaje+`ingrese numero`), 10);
        numeroDos= +prompt("ingrese su numero Dos");
        if (isNaN(numeroUno) || isNaN(numeroDos)) {
            alert(`los valores que ingresen deben ser numericos`);
        }else{
            //reviso los numeros ingresados
            if (numeroUno!=0 && numeroDos!=0 && numeroUno>numeroDos) {
               //llamo a mi funcion de division
                DivisionManualAntigua(numeroUno,numeroDos);
                opciones=prompt(`si desea salir ingrese S  o C para continuar`).toLocaleLowerCase();
                //reviso si el usuario quiere salir
                
                if (opciones == `s`) {
                    repetir=false; 
                } 
            
            } else {
                alert(`los numeros que ingrese deben ser diferente de 0 y el numero uno debe ser mayor al segundo`);
            }
        }
       
    }
    document.write("<h1>"+Gracias +"<\h1>");

    //aqui creo la funcion
    function DivisionManualAntigua(x,y) {
        while (x > y ) {
            resultado= x - y;
            conteoCantidadRestasRealizadas =conteoCantidadRestasRealizadas+1;
            x=resultado;
        }
        mensaje=`el resulado de realizar la division es ${conteoCantidadRestasRealizadas} \n el restante de la division es ${resultado}`;
        alert(mensaje);
        
    }
    
