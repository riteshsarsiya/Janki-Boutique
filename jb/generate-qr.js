const fs = require("fs");
const QRCode = require("qrcode");

const products = JSON.parse(
    fs.readFileSync("products.json", "utf-8")
);

if (!fs.existsSync("qr")) {
    fs.mkdirSync("qr");
}

async function generateQR() {

    for (let product of products) {

        let id = product["Product ID"];

        // QR ke andar product page ka link jayega
        let qrData = `https://janki-boutique.vercel.app/product.html?id=${id}`;

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