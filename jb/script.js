const products = {
    TS001: {
        name: "Black T-Shirt",
        size: "XL",
        price: "₹799",
        image: "img/downlgit statusoad.png"
    }, 

    TS002: {
        name: "White T-Shirt",
        size: "L",
        price: "₹699",
        image: "img/download1.png"
    }
}
// QR se ID milegi (example: ?id=TS001)
const id = new URLSearchParams(window.location.search).get("id");

const product = products[id];

if(product) {

    document.querySelector("#product-name").textContent = "Name : " + product.name;
    document.querySelector("#product-size").textContent = "Size : " + product.size;
    document.querySelector("#product-price").textContent = "Price : " + product.price;
    document.querySelector(".cloth-png").src = product.image;
} else {
    document.querySelector("body").innerHTML = "Product Not Found";
}
