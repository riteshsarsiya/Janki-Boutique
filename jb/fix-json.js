const fs = require("fs");

const data = JSON.parse(fs.readFileSync("products.json", "utf8"));

data.forEach(product => {
  const fileName = product.Image.split(/[\\/]/).pop(); // sirf file name nikalega
  product.Image = `/jb/img/${fileName}`;
});

fs.writeFileSync(
  "products.json",
  JSON.stringify(data, null, 2),
  "utf8"
);

console.log("✅ Image paths fixed");