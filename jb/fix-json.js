const fs = require("fs");

let data = JSON.parse(fs.readFileSync("products.json", "utf8"));

data.forEach(product => {

    console.log("Old:", product.Image);

    // /jb/img/img/TS002.jpg -> /jb/img/TS002.jpg
    product.Image = product.Image.replace("/jb/img/img/", "/jb/img/");

    console.log("New:", product.Image);

});

fs.writeFileSync(
    "products.json",
    JSON.stringify(data, null, 2)
);

console.log("✅ Image paths fixed");