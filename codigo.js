//CLIENTES



class Persona {
    constructor(nombre, apellido, edad, mail, contrasenia, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;
        this.contrasenia = contrasenia;
        this.telefono = telefono;
    }
}

const clientes = []

const agregarClienteLista = (persona) => {
    clientes.push(persona)
}

const cliente1 = new Persona("Maria", "Zucchi", 52, "marita@gmail.com");
agregarClienteLista(cliente1);
const cliente2 = new Persona("Juan", "Zucchi", 45, "juancito@gmail.com");
agregarClienteLista(cliente2);


const verListaClientes = () => {
    return clientes;
}

console.log(verListaClientes());

const getNombre = document.getElementById("nombre");
const getApellido = document.getElementById("apellido");
const getEdad = document.getElementById("edad");
const getMail = document.getElementById("mail");
const getContrasenia = document.getElementById("contrasenia");
const getTelefono = document.getElementById("telefono");
const form = document.getElementById("formulario");

const crearCliente = (client) => {
    clientes.push(client)
    localStorage.setItem("clientes", JSON.stringify(clientes))
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const nombre= getNombre.value
    const apellido = getApellido.value
    const edad = getEdad.value
    const mail = getMail.value
    const contrasenia = getContrasenia.value
    const telefono = getTelefono.value

    let cliente = new Persona(nombre, apellido, edad, mail, contrasenia, telefono);

    crearCliente(cliente)
    
})


const usuario = []

let clientesJS = JSON.parse(localStorage.getItem('clientes')) || []
clientesJS.push(JSON.parse(localStorage.getItem('clientes')) || []);

class Usu {
    constructor(mail, contraseña){
        this.mail = mail;
        this.contraseña = contraseña;
       
    }
}
 


function recordarUsuario(array){
for (let i = 0; i < array.length; i++){
    let {mail : usu} = array[i];
    let {contrasenia : contra} = array[i];
    aux = new Usu(usu, contra);
    usuario.push(aux);
    console.log(usuario) 
    localStorage.setItem("usuario", JSON.stringify(usuario))
}
}
recordarUsuario(clientesJS);



const usuarioini = document.getElementById("Usuario");
const contra = document.getElementById("contrasenia");




let iniciar = document.getElementById("formularioIniciar");

iniciar.addEventListener("submit", e => {
    e.preventDefault()
    const usuin= usuarioini.value
    const contrain = contrase.value
    
    const recordar = new Usu(usuin, contrain);
    guardar(recordar);
})


function guardar(item){
    if(usuario.find(i => i.mail === item.mail)&&usuario.find(i => i.contraseña === item.contraseña)){
        console.log(item);
     }else{
         console.log("ese usuario todavia no fue registrado")
     }
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




const totalPlata = document.getElementById("total");


    
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(JSON.parse(localStorage.getItem("carrito")) || []);
    carrito.forEach((item) => {
        const fila = document.createElement("tr")
        fila.innerHTML= `<th>${item.nombre}</th><th>${item.precio}</th><th>${item.cantidad}</th>` 
        tcuerpo.append(fila)

       const pos = carrito.indexOf(item);

       
       const suma = document.createElement("button");
       suma.className = "btn btn-primary";
       suma.innerText = "+";
       const resta = document.createElement("button");
       resta.className = "btn btn-primary";
       resta.innerText = "-";
       
       const thh=document.createElement("th");
       thh.append(suma)
       thh.append(resta)
       fila.append(thh)
       tcuerpo.append(fila)

       suma.onclick = () => {
           carrito.forEach(x => {
                (x.nombre==item.nombre) ? x.cantidad += 1 : false
            })
        listadoUpdate(carrito);
       };
       resta.onclick = () => {
        if(item.cantidad>=1){
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? x.cantidad -= 1 : false
        })
        listadoUpdate(carrito);}
    }
       
   
       const eliminar = document.createElement("button");
       eliminar.className = "btn btn-danger";
       eliminar.innerText = "Eliminar";
       eliminar.onclick = () => {
           carrito.forEach(x => {
            (x.nombre==item.nombre) ? carrito.splice(pos, 1) : false
           })
           listadoUpdate(carrito);}
       
       const th = document.createElement("th");
       th.append(eliminar);
       fila.append(th);
       tcuerpo.append(fila);
      
    });
     totalPlata.innerText = carrito.reduce(
         (total, item) => total += item.precio * item.cantidad,
         0
     );





let contenedor = document.getElementById("items");

function newItem(item){
    

        if(carrito.find(i => i.nombre === item.nombre)){
            
           carrito.forEach(x => {
               (x.nombre==item.nombre) ? x.cantidad += 1 : false
           })
           console.log(carrito);
           listadoUpdate(carrito);
           swal ({
               title: "Añadio al carrito con exito",
               icon: "success"
           })
                    
        }else{
            item.cantidad=1;
            carrito.push(item);
            console.log(carrito);
            listadoUpdate(carrito);
            swal ({
                title: "Añadio al carrito con exito",
                icon: "success"
            })
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


function listadoUpdate(array) {
    tcuerpo.innerHTML = "";
    array.forEach((item) => {
       const fila = document.createElement("tr")
       fila.innerHTML= `<th>${item.nombre}</th><th>${item.precio}</th><th>${item.cantidad}</th>` 
       tcuerpo.append(fila)
       const pos = carrito.indexOf(item);
       const suma = document.createElement("button");
       suma.className = "btn btn-primary";
       suma.innerText = "+";
       const resta = document.createElement("button");
       resta.className = "btn btn-primary";
       resta.innerText = "-";
       
       const thh=document.createElement("th");
       thh.append(suma)
       thh.append(resta)
       fila.append(thh)
       tcuerpo.append(fila)

       suma.onclick = () => {
        carrito.forEach(x => {
             (x.nombre==item.nombre) ? x.cantidad += 1 : false
         })
         listadoUpdate(carrito);
    };
        resta.onclick = () => {
        if(item.cantidad>=1){
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? x.cantidad -= 1 : false
        })
        listadoUpdate(carrito);}
    };
   
       
   
       const eliminar = document.createElement("button");
       eliminar.className = "btn btn-danger";
       eliminar.innerText = "Eliminar";
       eliminar.onclick = () => {
        carrito.forEach(x => {
         (x.nombre==item.nombre) ? carrito.splice(pos, 1) : false
        })
        listadoUpdate(carrito);}
       const th = document.createElement("th");
       th.append(eliminar);
       fila.append(th);
       tcuerpo.append(fila);
    });
    totalPlata.innerText = array.reduce(
        (total, item) => total += item.precio * item.cantidad,
        0
    );
    const guardarCarrito = (array) => {
        localStorage.setItem("carrito", JSON.stringify(array));
    } 
    guardarCarrito(array);
}

vaciar.onclick = (array) => {
    swal ({
        title: "Esta seguro que desea vaciar el carrito?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then((willDelete) => {
    if (willDelete) {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(array))
        listadoUpdate(array);  
        swal("Su carrito ha sido vaciado", {
        icon: "success",
        });
    } else {
        swal("No fue elimado");
    }
    });
    
};
