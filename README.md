# Janki Boutique - QR Product Viewer

## Project Overview
This project allows customers to scan a QR code and view product details online.

Each QR code opens a product page displaying:
- Product Image
- Product Name
- Product ID
- Size
- Price

## Project Structure

```
jb/
│
├── index.html
├── style.css
├── script.js
├── products.json
├── products.csv
├── img/
│   ├── TS001.jpg
│   ├── TS002.jpg
│   └── ...
```

## How to Add a New Product

### 1. Add Product to CSV

Example:

| Product ID | Product Name | Size | Price | Image |
|------------|--------------|------|-------|----------------|
| TS011 | Shirt | M | 999 | jb\img\TS011.jpg |

### 2. Add Product Image

Copy the image to:

```
img/
```

Example:

```
img/TS011.jpg
```

### 3. Convert CSV to JSON

Run:

```bash
node csvtojson.js
```

### 4. Fix Image Path (if required)

Image path should be:

```
/img/TS011.jpg
```

or

```
/jb/img/TS011.jpg
```

according to your deployment.

### 5. Push to GitHub

```bash
git add .
git commit -m "Added new products"
git push origin main
```

### 6. Wait for Vercel Deployment

Vercel automatically deploys the latest changes.

## QR Code Format

```
https://janki-boutique.vercel.app/index.html?id=TS001
```

Replace the Product ID for each product.

Examples

```
TS001
TS002
TS003
```

## Technologies Used

- HTML
- CSS
- JavaScript
- JSON
- CSV
- GitHub
- Vercel

## Features

- QR Code Product View
- Dynamic Product Loading
- JSON Data
- Responsive Design
- Easy Product Management

## Author

Ritesh
