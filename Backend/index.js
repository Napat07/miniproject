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
    { 'id': 0, 'name': 'Cat', 'price': 007, 'img': 'https://i.pinimg.com/736x/60/d9/26/60d9269a5ada1ee5e2f5161d036209e5.jpg' },
    { 'id': 1, 'name': 'Catcat', 'price': 111, 'img': 'https://i.pinimg.com/originals/f3/bd/84/f3bd8497e15399201b634714ec5ed390.jpg' },
    { 'id': 2, 'name': 'Cat3', 'price': 213, 'img': 'https://i.imgur.com/gdWIxn2.jpg' },
    { 'id': 3, 'name': 'Cat4', 'price': 652, 'img': 'https://lh3.googleusercontent.com/ObdbSatQvNUymufVs3vL5YmhGdvs3w5vvTciaGLFQOZoREVAEIIueioFOrWk9je_fqxR' },
    { 'id': 4, 'name': 'Cat5', 'price': 43, 'img': 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&w=1000&q=80' },
    { 'id': 5, 'name': 'Cat6', 'price': 34, 'img': 'https://fsb.zobj.net/crop.php?r=DIRnAiiiyJkFkfpMsvWknlEIXkuYLfYvI-s3DG3Afrdgn54EWiIqaNqyjomP1mJo8-iAIaZo8J6kdNhqsDwLm8b90xiYYxYOirvHOlW-SCHgqgsNsidIfDxCmtJjgK5LfIQkKEU3uxI1Yv1H' }
];

router.route('/products')
    // get all products
    .get((req, res) => res.json(products))
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