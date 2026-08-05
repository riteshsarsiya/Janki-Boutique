const csv = require("csvtojson");
const fs = require("fs");

csv()
  .fromFile("Janki-Boutique-Products.csv")
  .then((jsonObj) => {
    fs.writeFileSync("products.json", JSON.stringify(jsonObj, null, 2));
    console.log("products.json created successfully!");
  });