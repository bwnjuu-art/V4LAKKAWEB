// Base de datos local de productos con tus fotos originales de Instagram y stock
const productosDB = {
    "1": {
        name: "RECLUSE TEE",
        price: 24500,
        inStock: true,
        descripcion: "Remera de algodón peinado de alta densidad. Estética techwear minimalista, confección propia en Mar del Plata.",
        imagenes: [
            "https://scontent-eze1-1.cdninstagram.com/v/t51.82787-15/741592237_18000328940974754_5578772536708960722_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzkzNTYxMzg4MTI3MDI5NjUyNQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=KMCIbr8Ygm4Q7kNvwFkhJpL&_nc_oc=AdqWHC_fN4gDat7VZkkTbj8lepmwx7ySzciH6dyqszcUxG1N0VI88Q-y0kTpgeRbkn_bcO98TNSn-hhejROwezgS&_nc_zt=23&_nc_ht=scontent-eze1-1.cdninstagram.com&_nc_gid=HMf-mqxeBpdz4PRCz0irRg&_nc_ss=7b6a8&oh=00_AQI60wWuT-Yf8ucsEkasTsekUYGWMLiQO8hWUo3braMksg&oe=6ABF2D89",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "2": {
        name: "VOID HOODIE",
        price: 48000,
        inStock: true,
        descripcion: "Buzo canguro rústico pesado. Capucha forrada, ojalillos metálicos negros y cordón tubular de ajuste.",
        imagenes: [
            "https://scontent-eze1-2.cdninstagram.com/v/t51.82787-15/580047684_17970726224974754_3277997889285701373_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=Mzc2Mzg0NjU0NDE1Njg3MDEwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTM1MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=W1vG1DPZROcQ7kNvwG8uTzD&_nc_oc=Adrg4UxzpYMIdnrjOTWrDNrWu1PDBRPyB0nW1Eg-fggedrLwtiUHNIMtUIxHMDeopweSyFFqoVrqHxUA21w7UCPf&_nc_zt=23&_nc_ht=scontent-eze1-2.cdninstagram.com&_nc_gid=Lb9q4HzRZIXxg78u74R1RA&_nc_ss=7b6a8&oh=00_AQJvkmqRX4xnndzfSoq13MOGkRSryqP8wD2dAINTrfKbpQ&oe=6ABF3943",
            "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "3": {
        name: "ANOMALY JOGGER",
        price: 36000,
        inStock: true,
        descripcion: "Pantalón jogger en gabardina elastizada con múltiples bolsillos utilitarios y puños ajustables.",
        imagenes: [
            "https://scontent-eze1-1.cdninstagram.com/v/t51.82787-15/560313084_17966811329974754_5096795341570698848_n.jpg?stp=dst-jpg_e35_p1080x1080_tt6&_nc_cat=109&ig_cache_key=MzczNzY4Mzc2MDEwMDc3OTg3NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=nkBh_7ikROQQ7kNvwFcc4jW&_nc_oc=AdqyF-djLNpnKQRGC4GtfHFJis0Bn3z69B2Wg4tuLW4Bqp5YxWvKRNoZW8E6Td1cdUg8JK0RtJpPsXN4uk6U0i0A&_nc_zt=23&_nc_ht=scontent-eze1-1.cdninstagram.com&_nc_gid=Lb9q4HzRZIXxg78u74R1RA&_nc_ss=7b6a8&oh=00_AQIJXZaynlsXbe5YXP8Gy30uSDpvxQMbRjLuas9IbyTxUw&oe=6ABF3FD5",
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80"
        ]
    },
    "4": {
        name: "CYBER CARGO",
        price: 42000,
        inStock: true,
        descripcion: "Pantalón cargo técnico con correas ajustables y múltiples bolsillos tácticos. Confección exclusiva.",
        imagenes: [
            "https://scontent-eze1-2.cdninstagram.com/v/t51.75761-15/470695512_17932469702974754_6406610492574840674_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzUyNTMyMTA0MzgzMDcwNTc5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=tYzmIckSfmkQ7kNvwG1L4EU&_nc_oc=Ado0zXpDz-HAyrXq8Oqv5qIeq27RnNKbZDo-EIOLFr-hXn7hQD5WyaEi22an2Oz4eHIJL4RmaTWNOBTtwQZA9O05&_nc_zt=23&_nc_ht=scontent-eze1-2.cdninstagram.com&_nc_gid=OpbqbjQHNIZCu8AwIk5TIQ&_nc_ss=7b6a8&oh=00_AQKV7CMsD3xfBpzWfIiQmHAtI7xa2Enp2a57JhmzXfOwcg&oe=6ABF31C6",
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80"
        ]
    }
};

let cart = JSON.parse(localStorage.getItem('v4lakka_cart')) || [];
let total = 0;
let talleSeleccionado = "M";

const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOpenBtn = document.getElementById('cart-open');
const cartCloseBtn = document.getElementById('cart-close');
const cartItemsContainer = document.getElementById('cart-items');
const cartCountElement = document.getElementById('cart-count');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const checkoutForm = document.getElementById('checkout-form');

document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    initProductDetail();
});

if (cartOpenBtn) {
    cartOpenBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cartOverlay.classList.add('active');
        cartSidebar.classList.add('active');
    });
}

function closeCart() {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
}

if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

function addToCart(name, price, imagen, talle) {
    cart.push({ name, price, imagen, talle: talle || "M" });
    updateCartUI();
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    localStorage.setItem('v4lakka_cart', JSON.stringify(cart));

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-left">
                    <img src="${item.imagen || 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=150&q=80'}" alt="${item.name}" class="cart-item-thumb">
                    <div class="item-info">
                        <h4>${item.name}</h4>
                        <span class="item-size">[TALLE: ${item.talle || 'M'}]</span>
                        <span class="item-price">$ ${item.price.toLocaleString('es-AR')}</span>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
    }

    if (cartCountElement) cartCountElement.innerText = cart.length;
    if (cartTotalPriceElement) cartTotalPriceElement.innerText = total.toLocaleString('es-AR');
}

function initProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId || !productosDB[productId]) return;

    const producto = productosDB[productId];

    document.getElementById('product-title').innerText = producto.name;
    document.getElementById('product-price').innerText = `$ ${producto.price.toLocaleString('es-AR')}`;
    document.getElementById('product-description').innerText = producto.descripcion;

    const stockBadge = document.getElementById('product-stock-badge');
    const btnAddToCart = document.getElementById('btn-add-to-cart-detail');

    if (producto.inStock) {
        stockBadge.innerText = "STOCK DISPONIBLE";
        stockBadge.className = "stock-badge in-stock";
        btnAddToCart.disabled = false;
        btnAddToCart.innerText = "AGREGAR AL CARRITO";
    } else {
        stockBadge.innerText = "SIN STOCK";
        stockBadge.className = "stock-badge out-stock";
        btnAddToCart.disabled = true;
        btnAddToCart.innerText = "AGOTADO";
    }

    const mainImg = document.getElementById('main-product-img');
    const thumbContainer = document.getElementById('thumbnail-container');

    mainImg.src = producto.imagenes[0];

    producto.imagenes.forEach((imgUrl, idx) => {
        const thumb = document.createElement('img');
        thumb.src = imgUrl;
        thumb.className = idx === 0 ? 'thumb-img active' : 'thumb-img';
        thumb.onclick = () => {
            mainImg.src = imgUrl;
            document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbContainer.appendChild(thumb);
    });

    btnAddToCart.onclick = () => {
        if (producto.inStock) {
            addToCart(producto.name, producto.price, producto.imagenes[0], talleSeleccionado);
        }
    };
}

function selectSize(talle) {
    talleSeleccionado = talle;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText === talle) btn.classList.add('active');
    });
}

if (checkoutForm) {
    checkoutForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert("TERMINAL_ERROR: El carrito está vacío.");
            return;
        }

        const btnCheckout = document.querySelector('.btn-checkout');
        btnCheckout.innerText = "ENVIANDO COMPROBANTE...";
        btnCheckout.disabled = true;

        const datosCliente = {
            nombre: document.getElementById('cli-nombre').value,
            email: document.getElementById('cli-email').value,
            telefono: document.getElementById('cli-telefono').value,
            direccion: document.getElementById('cli-direccion').value,
            provincia: document.getElementById('cli-provincia').value,
            codigoPostal: document.getElementById('cli-cp').value
        };

        try {
            const respuesta = await fetch("http://localhost:3000/enviar-correo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ carrito: cart, cliente: datosCliente }),
            });

            const resultado = await respuesta.json();

            if (resultado.success) {
                alert(`¡Orden procesada con éxito!\nSe ha enviado un correo de confirmación a: ${datosCliente.email}`);
                cart = [];
                updateCartUI();
                closeCart();
            } else {
                alert("Hubo un error al enviar el correo.");
            }
        } catch (error) {
            console.error("Error conectando al backend:", error);
            alert("El servidor backend no está encendido. Ejecuta 'node server.js'.");
        } finally {
            btnCheckout.innerText = "PROCESAR ORDEN";
            btnCheckout.disabled = false;
        }
    });
}