const id = new URLSearchParams(window.location.search).get("id");

fetch("products.json")
  .then(response => response.json())
  .then(products => {

    const product = products.find(item => item["Product ID"] === id);

    if (product) {
  document.querySelector("#product-name").textContent =
    "Name : " + product["Product Name"];

  document.querySelector("#product-size").textContent =
    "Size : " + product["Size"];

  document.querySelector("#product-price").textContent =
    "Price : ₹" + product["Price"];

  document.querySelector(".cloth-png").src =
    product["Image"].replace("/jb/img/", "/img/");

} else {
  document.body.innerHTML = "<h1>Product Not Found</h1>";
}

  })
  .catch(err => console.log(err));
