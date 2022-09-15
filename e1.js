//Crear un array con, al menos, 10 ingredientes para hacer pizzas 🍕 
//(puede ser tanto masa como los ingredientes que van sobre la base).

//👉 Crear una función que acepte ese array como parámetro. 

//Dentro de la función, debemos lograr lo siguiente: 
//👉 Iterar ese array para lograr que, los ingredientes que tengan una cantidad par de letras, vayan a un array llamado "pares". 
//👉 Hacer lo mismo con los impares, enviándolos al array "impares". 
//👉 Imprimir en consola:  "Los ingredientes pares son: (ingredientes en array pares). 
//Los ingredientes impares son: (ingredientes en array impares)."


let ingredientesPizza = ["harina", "levadura", "queso","masa", "tomate","huevo", "agua", "palmitos", "ananá", "roquefort" ];
let pares = [];
let impares= [];
 
ingredientesPizza.forEach(function(ingrediente){
    if(ingrediente.length % 2 === 0){
        pares.push(ingrediente)
    }else{
        impares.push(ingrediente)
    }
});

console.log("Los ingredientes pares son: " + pares);
console.log("Los ingredientes impares son: " + impares);