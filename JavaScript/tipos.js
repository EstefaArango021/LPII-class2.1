// Tipos de datos primitivos:
// Numbre (Integers and Floats), ejem: 10, 10.5 ,20000
let numero =10;
let numeroDePuertas = 4;
let numerPi=3.14;
let valorMatricula= 2_000_000;
let numeroObjeto= new Number(10.25);

// String ( cadenas de caracteres), Ejem: "Hola", "chao"
let saludo = "hola";
let despedida = "Adiós";
let strindComoObjeto= new String("hola");

//Boolean  -> true or false
let esCierto= false;
let esFeo= true;
//Object -> {} -> new object()

let persona = {
    nombre: "Estefania",
    apellido: "Arango"
};
let empleado = {
    id: 1,
    nombre: Fulano
};
//Array -> []
let arregloObjetos =[persona,empleado];

//BigInt (Valores numericos muy grandes) 100n -> new Bigint(10)
let numeroGrande =10n;
let numeroGrandeComoObjeto= new BigInt(100);

//Undefined (Valor por defecto que tiene las variables si no son asignadas)
let variableUndefinet;
let variableUndefinet2 = undefined;

//null (Se asigna cuando quiero especificar que una variable está vacia)
let variableNula=null;

//Symbol (Se utiliza para crear valores únicos)
let simbolo = new Symbol ("Simbolo uno");
