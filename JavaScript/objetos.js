let persona = {
    nombre: "Sebastian",
    id: 1234,
    Apellido: "Alarcon",
    esProfesor: true,
    estudiantes: [
        {
            id:1,
            nombre: "Estefania"
        },
        {
            id:2,
            nombre: "Juan David"
        }
    ]
}

//JSON JavaScript Object Notation
console.log(persona)
console.log(persona.estudiantes[0]);
console.log(persona.estudiantes[1]);
console.log(persona.apellido);
console.log(JSON.stringify(persona));