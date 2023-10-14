function crearservicio(titulo,descripcion){
    return `
    <div class ="servicio">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    </div>
    `
}

function crearServicioConObjetos(titulo,descripcion){
    const contenedorServicio = document.createElement('div');
    const parrafo =document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio")
    return contenedorServicio;
}

const data =[
    {titulo: "Sección uno", descripcion: "Descripción de la sección uno" },
    {titulo: "Sección Dos", descripcion: "Descripción de la sección Dos" },
    {titulo: "Sección Tres", descripcion: "Descripción de la sección Tres" },
    {titulo: "Sección Cuatro", descripcion: "Descripción de la sección Cuatro" },
    {titulo: "Sección Cinco", descripcion: "Descripción de la sección Cinco" },
    {titulo: "Sección Seis", descripcion: "Descripción de la sección Seis" },
    {titulo: "Sección Siete", descripcion: "Descripción de la sección Siete"},
]

const contenedor = document.querySelector('.contenedor-servicios')


for(servicio of data){
    const {descripcion} = servicio
    console.log(descripcion)
    const servicioHtml = crearServicioConObjetos(servicio.titulo, servicio.descripcion);
    //contenedor.insertAdjacentHTML('beforeend',servicioHtml)
    contenedor.appendChild(servicioHtml);
    console.log(servicioHtml);

}
console.log(contenedor)

