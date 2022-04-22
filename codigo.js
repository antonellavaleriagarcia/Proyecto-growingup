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



const carrito = []

if (localStorage.getItem('carrito') !== null) {
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [] ;
    carrito.push(...json.parse('carrito'))
}


let contenedor = document.getElementById("items");

function newItem(item){
    

    
        if(carrito.find(i => i.nombre === item.nombre)){
            
           carrito.forEach(x => {
               (x.nombre==item.nombre) ? x.cantidad += 1 : false
           })
           console.log(carrito);
           listadoUpdate(carrito);
                    
        }else{
            item.cantidad=1;
            carrito.push(item);
            console.log(carrito);
            listadoUpdate(carrito);
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
const totalPlata = document.getElementById("total");

function listadoUpdate(array) {
    tcuerpo.innerHTML = "";
    array.forEach((item) => {
       const fila = document.createElement("tr")
       fila.innerHTML= `<th>${item.nombre}</th><th>${item.cantidad}</th><th>${item.precio}</th>` 
       tcuerpo.append(fila)
    });
    totalPlata.innerText = array.reduce(
        (total, item) => total += item.precio * item.cantidad,
        0
    );
    const guardarCarrito = (item) => {
        
        localStorage.setItem('carrito', JSON.stringify(item));
    } 
}


