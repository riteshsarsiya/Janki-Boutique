const fs = require("fs");

let data = JSON.parse(fs.readFileSync("products.json", "utf8"));

data.forEach(product => {

    console.log("Old:", product.Image);

    product.Image = "/jb/img/" + product.Image.split("\\").pop();

    console.log("New:", product.Image);

});

fs.writeFileSync(
    "products.json",
    JSON.stringify(data, null, 2)
);
console.log("✅ Image paths fixed");