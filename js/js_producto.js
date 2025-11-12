const productos = [
    {
        nombre: "Panquesito de Dulcecita",
        precio: 10,
        img: "https://img.freepik.com/fotos-premium/panquesito-mora-azul_770606-4754.jpg"
    },
    {
        nombre: "Bolillo",
        precio: 3,
        img: "https://lagranbodega.vteximg.com.br/arquivos/ids/215151-1000-1000/888075.jpg?v=636801426562100000"
    },
    {
        nombre: "Galleta de corazón",
        precio: 5,
        img: "https://taifelds.com.mx/cdn/shop/files/GalletadeMantequilla-CorazonSimple_bc0c7615-807a-461b-a5c5-194d531c124d.png?v=1748044402"
    },
    {
        nombre: "Calcetas de galletas",
        precio: 100,
        img: "https://www.epicsocks.com.mx/wp-content/uploads/2023/03/GALLETAS-Y-LECHE-EPIC-SOCKS-1000x1000.jpg"
    },
    {
        nombre: "Calcetas de pan",
        precio: 100,
        img: "https://skunksocks.com/wp-content/uploads/2022/09/Modelo-EL034-3.jpg"
    }

];


const contenedor = document.getElementById("contenedor");

productos.forEach(prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
 ` ;
 contenedor.appendChild(card);
})