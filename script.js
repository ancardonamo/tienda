const productos=[
    {
        id: 1,
        nombre: "MK61",
        categoria: "teclados",
        precio: 200,
    },
    {
        id: 2,
        nombre: "V242",
        categoria: "ratones",
        precio: 90,
    },
    {
        id: 3,
        nombre: "G502",
        categoria: "audifonos",
        precio: 40,
    },
    {
        id: 4,
        nombre: "MK80",
        categoria: "teclados",
        precio: 500,
    }

]

let carrito=[]

function init(){
    mostrarProductos(productos)
}

function mostrarProductos(productos){
    const producto=document.getElementById(`producto`)
    producto.innerHTML=``
    productos.forEach(p => {
        producto.innerHTML+=`
            <div class="card col-md-3 m-2">
                <div class="card-body">
                    <h5 class="card-title">${p.nombre}</h5>
                    <p class="card-text">$${p.precio}</p>
                    <button onclick="agregarAlCarrito(${p.id})" class="btn btn-warning">Agregar al carrito</button>
                </div>
            </div>`
        
    });
}

function filtrarCategoria(){
    const categoriaVar=document.getElementById(`categorias`).value
    if (categoriaVar===`todos`){
        mostrarProductos(productos)
    }
    else{
        const filtrados=productos.filter(x => x.categoria === categoriaVar);
        mostrarProductos(filtrados)
    }
}
    
function agregarAlCarrito(ID){
    const prod = productos.find(p=> p.id === ID);
    carrito.push(prod);
    actualizarCarrito();
    alert(`Se añadió el producto: ${prod.nombre} a el carrito`);

};

function actualizarCarrito() {
    let mensaje=document.getElementById(`carrito`)
    mensaje.innerHTML=`Carrito: ${carrito.length} producto(s)`;
    
}

