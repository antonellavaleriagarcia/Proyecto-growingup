//CLIENTES

class Persona {
    constructor(nombre, apellido, edad, mail, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.mail = telefono;
    }
}

const clientes = []

const agregarClienteLista = (persona) => {
    clientes.push(persona)
}

const getNombre = document.getElementById("nombre");
const getApellido = document.getElementById("apellido");
const getEdad = document.getElementById("edad");
const getMail = document.getElementById("mail");
const getTelefono = document.getElementById("telefono");

let formCliente = document.getElementById("formulario");
formCliente.addEventListener("submit", crearCliente);

function crearCliente(e){
    e.preventDefault();
    const cliente = new Persona(getNombre.value, getApellido.value, getEdad.value, getMail.value);
    agregarClienteLista(cliente);
}

const cliente1 = new Persona("Maria", "Zucchi", 52, "marita@gmail.com");
agregarClienteLista(cliente1);
const cliente2 = new Persona("Juan", "Zucchi", 45, "juancito@gmail.com");
agregarClienteLista(cliente2);


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
/*
let eliminar = buscarPersona(
    prompt("Ingrese el nombre del cliente que quiere eliminar"),
    clientes
);
if (eliminar >= 0) {
    clientes.splice(eliminar, 1);
}*/

console.log(verListaClientes());

//PRODUCTOS
//Clase producto
class Producto {

    constructor(nombre, precio, imagen, descripcion, categoria, stock, cantida){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.stock = stock;
        this.cantida = cantida;
    }
/*
    precioPorCantidad(){
        let cantidad = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar")) 
        this.precio = this.precio*cantidad
        return this.precio
    }
*/
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
const amazonia=new Producto ("amazonia", 600, "imagen", "Poetenciador Radicular, bio-estimulante orgánico que promueve la formación de raíces fuertes y sanas, tallos vigorosos. Mejora la asimilacion de nutrientes, mejora las condiciones del suelo, promueve la formación de micro-organismo beneficiosos para el suelo y para las plantas", "Fertilizantes", 6,1)
const cultivante=new Producto("cultivante", 2000, "imagen", "Sustrato Premium con el agregado óptimo de fibra de coco, que ofrece a las raíces un mejor acceso al aire y los nutrientes, para que crezcan más sanas y fuertes.", "Sustratos & Macetas", 4,1)
const carpa=new Producto("carpa", 1000, "imagen", "Especificaciones técnicas:• Carpa Probox suiza 100 x 100 x 200 cm.• Posee mylar 420D, 100% aprueba de luz.• Doble cierre reforzado.• Estructura sólida, varillas y base doble.• Tubos de refrigeración incorporados. • Caja cerrada.", "Indoor", 8, 1)
//Agrego productos al array
agregarProductoLista(amazonia);
agregarProductoLista(cultivante);
agregarProductoLista(carpa);
//Visualizo el array
console.log(verListaProductos());

class Elegidos {
    constructor(nombre, precio, cantida){
        this.nombre = nombre;
        this.precio = precio;
        this.cantida = 1;
    }
}

const elegidos = []


let contenedor = document.getElementById("items");

function newItem(item){
    aux = new Elegidos (item.nombre, item.precio, item.cantidat);
    

    if(elegidos.find(x => x.nombre === aux.nombre)){
            
            const num = document.getElementById("num");
            num.innerText = elegidos.reduce(
            (num, aux) => aux.cantida + 1,
            0
    );
                
    }else{
    elegidos.push(aux);    

    const pos = elegidos.indexOf(aux);

    let row = document.createElement("tr");

    row.innerHTML = `<tr><th>${aux.nombre}</th><th>${aux.precio}</th><th id="num">${aux.cantida}</th></tr>`;
    

    let compra = document.createElement("th")

    const suma = document.createElement("button");
    suma.className = "btn btn-primary";
    suma.innerText = "+";

    const resta = document.createElement("button");
    resta.className = "btn btn-primary";
    resta.innerText = "-";

    suma.onclick = () => {
        elegidos[pos].trae++;    
        listadoUpdate();           
    };
    
    resta.onclick = () => {
        if (elegidos[pos].trae > 0) {
            elegidos[pos].trae--;
            listadoUpdate();
        }
    };
  
        

    compra.append(resta);
    compra.append(suma);
    row.append(compra);
    

    const eliminar = document.createElement("button");
    eliminar.className = "btn btn-danger";
    eliminar.innerText = "Eliminar";
    
    eliminar.onclick = () => {
        elegidos.splice(pos, 1);
        listadoUpdate();
    };


    const th = document.createElement("th");
    th.append(eliminar);
    row.append(th);
    tcuerpo.append(row);

    const total = document.getElementById("total");
    total.innerText = elegidos.reduce(
        (total, aux) => total + aux.precio * aux.cantida,
        0
    );
}
}          

function agregarItemHtml(items){
    items.forEach((item) => {
        const div = document.createElement("div");
        div.className = "col-4"
        div.innerHTML = ` <div>
        <div class="card h-100">
        <img src="img/portadagrowingup.png" class="card-img-top" alt="...">
        <div class="card-body" >
            <h5 class="card-title" id="nombre">${item.nombre}</h5>
            <p class="card-text">${item.descripcion}</p>
            <p class="card-text" id="precio">${item.precio}</p>
            <button class="btn btn-primary" id="agregar${item.nombre}">Agregar al carrito</button>
        </div>
        </div> 
        </div>`;
        contenedor.append(div);
        let botonAgregar = document.getElementById(`agregar${item.nombre}`);
        botonAgregar.onclick = () => {
            newItem(item); 
        }
    });
  
}


agregarItemHtml(productos);

function listadoUpdate() {
    tcuerpo.innerHTML = "";
    elegidos.forEach((item) => {
       newItem(item);
    });
    total.innerText = elegidos.reduce(
        (total, item) => total + item.precio * item.cantida,
        0
    );
}

const verListaElegidos = () => {
    return elegidos;
}
console.log(verListaElegidos());

listadoUpdate();