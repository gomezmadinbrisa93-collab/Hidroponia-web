let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function agregarCarrito(nombre, precio, imagen) {
    carrito.push({ nombre, precio, imagen });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert("Producto agregado al carrito");
}

function mostrarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalElemento = document.getElementById("total");

    if (!lista) return;

    lista.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        const div = document.createElement("div");
        div.classList.add("item-carrito");

        div.innerHTML = `
            <img src="${producto.imagen}" class="img-carrito">
            <div>
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <button onclick="eliminarProducto(${index})" class="btn-eliminar">Eliminar</button>
            </div>
        `;

        lista.appendChild(div);
        total += producto.precio;
    });

    totalElemento.textContent = total;
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

mostrarCarrito();