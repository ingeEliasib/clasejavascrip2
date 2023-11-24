
    let mensaje =`Bienvenido a su software de division sin operador de dividendo \n `;
    let numeroUno = parseInt(prompt(mensaje+`ingrese numero`), 10);
    let numeroDos= parseInt(prompt("ingrese su numero Dos"),10);
    let resultado,conteoCantidadRestasRealizadas=0;
    //let continuarBucle = true;

    DivisionManualAntigua(numeroUno,numeroDos);
    function DivisionManualAntigua(x,y) {
        while (x > y ) {
            resultado= x - y;
            conteoCantidadRestasRealizadas =conteoCantidadRestasRealizadas+1;
        }
        mensaje=`el resulado de realizar la division es ${conteoCantidadRestasRealizadas} \n el restante de la division es ${resultado}`;
        alert(mensaje);
        
    }
    // Tu código va aquí
    // while(seconds >= 0){
    //     seconds-=1
    //     alert(seconds)
    // }
    