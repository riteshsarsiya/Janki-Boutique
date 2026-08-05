const fs = require("fs");
const QRCode = require("qrcode");


// products.json read karna
const products = JSON.parse(
    fs.readFileSync("products.json", "utf-8")
);


// qr folder nahi hai to banana
if (!fs.existsSync("qr")) {
    fs.mkdirSync("qr");
}


// QR generate karna
async function generateQR() {

    for (let product of products) {

        let id = product["Product ID"];


        // abhi QR me sirf ID jayegi
        let qrData = id;


        await QRCode.toFile(
            `qr/${id}.png`,
            qrData,
            {
                width: 300,
                margin: 2
            }
        );


        console.log(`${id} QR generated`);
    }


    console.log("✅ All QR Codes Generated");
}


generateQR();