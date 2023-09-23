//Funciones
function sumar(numeroUno , numeroDos){// Normalmente los nombres de las funciones deben tener ucomo nombre un verbo
    return numeroUno + numeroDos;
};

let sumarVersionDos = function (numeroUno , numeroDos){
    return numeroUno + numeroDos;
};

let sumarVersionTres = (numeroUno , numeroDos) => numeroUno + numeroDos; //Arrow funtion - También es funcion anonima


let funcionUno = function(numeroUno,numeroDos,  funcionDos){
    console.log("Estoy dentro de la función uno");
    return funcionDos(numeroUno, numeroDos)
};

let funcionTres = (numeroUno,numeroDos)=>{
    console.log("voy a restar")
    return numeroUno - numeroDos;
};

/*
console.log(sumar(5, 8));
console.log(sumar("hola", " mundo"));
console.log(sumarVersionDos(10,20));
console.log(sumarVersionTres(40,56.8));*/
console.log(funcionUno(10,40, sumarVersionTres));
console.log(funcionUno(10,40, funcionTres));