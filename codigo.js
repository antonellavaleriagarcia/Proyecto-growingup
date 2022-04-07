//PRODUCTOS
//Clase producto
class Producto {

    constructor(nombre, precio, imagen, descripcion, categoria, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
    }

    precioPorCantidad(){
        let cantidad = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar")) 
        this.precio = this.precio*cantidad
        return this.precio
    }

}
//Creo array para productos
const productos = []
//Creo funcion para agregar objetos al array
const agregarProductoLista = (objeto) => {
    productos.push(objeto);
}
//Creo funcion para visualizar array
const verListaProductos = () => {
    return productos;
}

//Creo productos
const amazonia=new Producto ("amazonia", 600, "imagen", "Poetenciador Radicular, bio-estimulante orgánico que promueve la formación de raíces fuertes y sanas, tallos vigorosos. Mejora la asimilacion de nutrientes, mejora las condiciones del suelo, promueve la formación de micro-organismo beneficiosos para el suelo y para las plantas", "Fertilizantes", 6)
const cultivante=new Producto("cultivante", 2000, "imagen", "Sustrato Premium con el agregado óptimo de fibra de coco, que ofrece a las raíces un mejor acceso al aire y los nutrientes, para que crezcan más sanas y fuertes.", "Sustratos & Macetas", 4)
const carpa=new Producto("carpa", 1000, "imagen", "Especificaciones técnicas:• Carpa Probox suiza 100 x 100 x 200 cm.• Posee mylar 420D, 100% aprueba de luz.• Doble cierre reforzado.• Estructura sólida, varillas y base doble.• Tubos de refrigeración incorporados. • Caja cerrada.", "Indoor", 8)
//Agrego productos al array
agregarProductoLista(amazonia);
agregarProductoLista(cultivante);
agregarProductoLista(carpa);
//Visualizo el array
console.log(verListaProductos());


let tabla = document.getElementById("items");

function agregarItemHtml(item){
    let row = document.createElement("tr");
    row.innerHTML = `<tr><th>${item.nombre}</th><th>${item.precio}</th><th>${item.imagen}</th><th>${item.descripcion}</th><th>${item.categoria}</th><th>${item.stock}</th></tr>`;
    tabla.append(row);
}

productos.forEach((item) => {
    agregarItemHtml(item)
});







/*Creo funcion para aumentar precio de todos los prodcutos
let aumento = parseInt(prompt("Ingrese el aumento"));
aumento/=100;
console.log(aumento);
const actualizado = productos.map(item => {
    return item.precio + item.precio * aumento
})

//Nuevo array con precios actualizados
console.log(actualizado);

//Pequeño menu
let producto= prompt("¿Que producto quiere comprar?"+amazonia.nombre+" ,"+cultivante.nombre+" ,"+carpa.nombre)

switch (producto) {
    case "amazonia":
        alert(amazonia.precioPorCantidad());
        break;
    case "cultivante": 
        alert(cultivante.precioPorCantidad());    
        break;
    case "carpa":
        alert(carpa.precioPorCantidad());
        break;
    default:
        alert("Ese producto no existe")   
        break; 
}


//CLIENTES

class Persona {
    constructor(nombre, apellido, edad, mail){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
    }
}

const clientes = []

const agregarClienteLista = (persona) => {
    clientes.push(persona)
}



function crearCliente(){
    let nombre = prompt("Ingrese su nombre");
    let apellido = prompt("Ingrese su apellido");
    let edad = parseInt(prompt("Ingrese su edad")) ;
    let mail = prompt("Ingrese su mail");
    const cliente = new Persona(nombre, apellido, edad, mail);
    agregarClienteLista(cliente);
}

const cliente1 = new Persona("Maria", "Zucchi", 52, "marita@gmail.com");
agregarClienteLista(cliente1);
const cliente2 = new Persona("Juan", "Zucchi", 45, "juancito@gmail.com");
agregarClienteLista(cliente2);

var valida= prompt("¿Quiere crear un unsuario? S/N")
if(valida=="S"){
    crearCliente();
}else{
    alert("Será la proxima")
}

const verListaClientes = () => {
    return clientes;
}

console.log(verListaClientes());


function buscarPersona(nombre, clientes) {
    let i = clientes.length - 1;
    while (i >= 0 && nombre != clientes[i].nombre) {
        i--;
    }
    return i;
}

let eliminar = buscarPersona(
    prompt("Ingrese el nombre del cliente que quiere eliminar"),
    clientes
);
if (eliminar >= 0) {
    clientes.splice(eliminar, 1);
}

console.log(verListaClientes());*/