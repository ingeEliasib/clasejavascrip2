
    // var seconds = parseInt(prompt("ingrese numero"), 10)
    // // Tu código va aquí
    // while(seconds >= 0){
    //     seconds-=1
    //     alert(seconds)
    // }
 
    // const sube = 7;
    // const baja = 2;
    // let total=0;
    // let dia =0;
    // let usuario =0;

    //  usuario= parseInt(prompt('Ingrese la profundidad del pozo:'), 10);
    // do{ 
    //     total= ((total += sube) < usuario)?(total-=baja):(total+=sube);
    //     dia +=1;
    //  }while(total <= usuario)

    // alert(dia);

    // function diasParaSalirDelPozo(profundidad) {
    //     const avanceDiario = 7;
    //     const retrocesoNocturno = 2;
    //     let alturaActual = 0;
    //     let dias = 0;
    
    //     while (alturaActual < profundidad) {
    //         alturaActual += avanceDiario;
    
    //         if (alturaActual >= profundidad) {
    //             // El caracol ha salido del pozo
    //             break;
    //         }
    
    //         alturaActual -= retrocesoNocturno;
    //         dias++;
    //     }
    
    //     return dias;
    // }
    
    // // Obtener la profundidad del pozo desde el usuario
    // const profundidadPozo = parseInt(prompt('Ingrese la profundidad del pozo:'), 10);
    
    // if (!isNaN(profundidadPozo)) {
    //     const diasNecesarios = diasParaSalirDelPozo(profundidadPozo);
    //     console.log(diasNecesarios);
    // } else {
    //     console.log('Por favor, ingrese un número válido.');
    // }
    
    
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const sube = 7;
    const baja = 2;
    let total = 0;
    let dia = 0;
    let usuario = 0;
    
    rl.question('Ingrese la profundidad del pozo: ', (input) => {
        usuario = parseInt(input, 10);
    
        do {
            total = ((total += sube) < usuario) ? (total -= baja) : (total += sube);
            dia += 1;
        } while (total <= usuario);
    
        console.log(dia);
    
        rl.close();
    });
    