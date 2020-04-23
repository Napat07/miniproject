let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
const env = require('dotenv').config()
let app = express();
 

app.use(cors());

app.use('/api', bodyParser.json(), router); 
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let products = [
    { 'id': 0, 'name': 'Acer Nitro AN515-54-53RW', 'price': 20490, 'img': '/product1.PNG' },
    { 'id': 1, 'name': 'Comset Ryzen & Intel', 'price': 19990, 'img': '/product2.PNG' },
    { 'id': 2, 'name': 'EGA TYPE H5', 'price': 329, 'img': '/product3.PNG' },
    { 'id': 3, 'name': 'Acer Gaming Notebook Nitro 5', 'price': 24990, 'img': '/product4.PNG' },
    { 'id': 4, 'name': 'Computer Msi set 2019', 'price': 36200, 'img': '/product5.PNG' },
    { 'id': 5, 'name': 'ACER Aspire C22-320-A94G1T21Mi', 'price': 10750, 'img': '/product6.PNG' },
    { 'id': 6, 'name': 'LENOVO AIO330-F0D70076TA', 'price': 7990, 'img': '/product7.PNG' },
    { 'id': 7, 'name': 'Nubwo SCYTHER M31', 'price': 250, 'img': '/product8.PNG' },
    { 'id': 8, 'name': 'ไฟ LED 50W แสงขาว', 'price': 129, 'img': '/product9.PNG' },
    { 'id': 9, 'name': 'Disco light ', 'price': 149, 'img': '/product10.PNG' },
    { 'id': 10, 'name': 'D-LINK EXO AC2600 MU‑MIMO', 'price': 4450, 'img': '/product11.PNG' },
    { 'id': 11, 'name': 'TP-LINK TL-WN722N Ver:3.0', 'price': 339, 'img': '/product12.PNG' },
    { 'id': 12, 'name': 'TP-Link TL-WN822N', 'price': 490, 'img': '/product13.PNG' },
    { 'id': 13, 'name': 'Xiaomi Mi Band 4', 'price': 749, 'img': '/product14.PNG' },
    { 'id': 14, 'name': 'AirPods Pro', 'price': 7690, 'img': '/product15.PNG' },
    { 'id': 15, 'name': 'Apple iPhone 8 Plus', 'price': 19500, 'img': '/product16.PNG' },
    { 'id': 16, 'name': 'Apple iPhone Xs Max', 'price': 27900, 'img': '/product17.PNG' },
    { 'id': 17, 'name': 'Apple iPhone 11 64GB TH', 'price': 23970, 'img': '/product18.PNG' }
];

router.route('/products')
    // get all products
    .get((req, res) => res.json(products))
    app.get('/',(req,res) => {
        console.log('Hello World')
        res.send('Hello World')
    })
    // insert a new product
    .post((req, res) => {
        var product = {};
        product.id = products.length > 0 ? products[products.length - 1].id + 1 : 0;
        product.name = req.body.name
        product.price = req.body.price
        product.img = req.body.img
        products.push(product);
        res.json({ message: 'Product created!' })
    })

router.route('/products/:product_id')
    .get((req, res) => {
        let id = req.params.product_id
        let index = products.findIndex(product => (product.id === +id))
        res.json(products[index])                   // get a product
    })
    .put((req, res) => {                               // Update a product
        let id = req.params.product_id
        let index = products.findIndex(product => (product.id === +id))
        products[index].name = req.body.name;
        products[index].price = req.body.price;
        products[index].img = req.body.img;
        res.json({ message: 'Product updated!' + req.params.product_id });
    })
    .delete((req, res) => {                   // Delete a product
        // delete     products[req.params.product_id]
        let id = req.params.product_id
        let index = products.findIndex(product => product.id === +id)
        products.splice(index, 1)
        res.json({ message: 'Product deleted: ' + req.params.product_id });
    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(process.env.PORT, () => console.log("Server is running"));