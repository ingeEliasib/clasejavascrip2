// //ejercicio 10 claes de js en confenalco

// let pizzaVeg=1;
// let pizzaTradi=2;
// let ingredienteusuario= prompt(`hola bienvenido a su pizzeria MamaMia \n vamos a preparar su pizza al busto por favor indiquenos que tipo de pizza le bustan \n en nuestra  selección tenemos:\n 1) pizza de tipo vegetariana \n 2) pizza de tipo tradicional: `)

// class pizzas {
//     tipoPzza;
//     ingrediente;
//     finalizada=true;
//     estado(){
//         this.finalizada;
//     }
// }


// class Estudiante { //La clase debe empezar en mayuscular por convenio
//     nombre; //Los atributos se escriben en camelCase normal y son sus caracteristicas
//     edad;
//     inscrito=false;//Si especificamos un valor, este sera el tomado por defecto al momento de instanciar
//     ingrediete1=`mozzarella`;
//     ingrediente2=`tomate` 
//     cumplirAnio(){ //Los metodos tienen esta nueva estructura
//         alert("Feliz cumpleaños");
//     }

//     inscribir(){
//         this.inscrito = true;
//     }

//     saludar(){
//         alert("Hola");
//     }

    
// }
class Pizza {
    constructor(tipoPizza, saborAdicional) {
        this.tipoPizza = tipoPizza;
        this.saborAdicional = saborAdicional;
        this.ingredientesBase = ["Mozzarella", "Tomate"];
    }

    esVegetariana() {
        const ingredientesVegetarianos = ["Pimentón", "Tofu"];
        return ingredientesVegetarianos.includes(this.saborAdicional);
    }

    obtenerIngredientes() {
        let ingredientesTotales = [...this.ingredientesBase, this.saborAdicional];
        return ingredientesTotales.join(", ");
    }
}

let tipoPizzaElegida = prompt(`Hola, elija el tipo de pizza:\n1) Vegetariana\n2) Tradicional`);
let saborElegido;

switch (tipoPizzaElegida) {
    case "1":
        saborElegido = prompt(`Ha elegido pizza vegetariana. Ahora, elija el sabor adicional:\n1) Pimentón\n2) Tofu`);
        break;
    case "2":
        saborElegido = prompt(`Ha elegido pizza tradicional. Ahora, elija el sabor adicional:\n1) Pepperoni\n2) Jamón\n3) Salmón`);
        break;
    default:
        console.log("Opción no válida. Seleccionando pizza tradicional por defecto.");
        tipoPizzaElegida = "2";
        saborElegido = prompt(`Ha elegido pizza tradicional. Ahora, elija el sabor adicional:\n1) Pepperoni\n2) Jamón\n3) Salmón`);
}

let pizza = new Pizza(tipoPizzaElegida, obtenerSaborAdicional(tipoPizzaElegida, saborElegido));

console.log(`Su pizza tiene los siguientes ingredientes: ${pizza.obtenerIngredientes()}.`);

if (pizza.esVegetariana()) {
    console.log("Esta pizza es vegetariana.");
} else {
    console.log("Esta pizza no es vegetariana.");
}

function obtenerSaborAdicional(tipoPizza, saborElegido) {
    if (tipoPizza === "1") {
        switch (saborElegido) {
            case "1":
                return "Pimentón";
            case "2":
                return "Tofu";
            default:
                console.log("Opción no válida. Seleccionando Pimentón por defecto.");
                return "Pimentón";
        }
    } else {
        switch (saborElegido) {
            case "1":
                return "Pepperoni";
            case "2":
                return "Jamón";
            case "3":
                return "Salmón";
            default:
                console.log("Opción no válida. Seleccionando Pepperoni por defecto.");
                return "Pepperoni";
        }
    }
}
