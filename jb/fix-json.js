const fs = require("fs");

const data = JSON.parse(fs.readFileSync("products.json", "utf8"));

data.forEach(product => {
  product.Image = product.Image.replace("/jb/img/img/", "/jb/img/");
});

fs.writeFileSync("products.json", JSON.stringify(data, null, 2), "utf8");

console.log("✅ Done");