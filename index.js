const express = require('express');
const {connectDb} = require("./db/db.connect");
const {addProductsData, deleteProductsData} = require("./db/db-addAndDelDb");
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
app.use(bodyParser.json())

app.use(cors())

connectDb();
// addProductsData();
// deleteProductsData();


const productsRouter = require("./router/products.router");

app.get('/', (req, res) => {
  res.send('Hello Ecomm backend app!')
});

app.use("/products", productsRouter);

app.use((req, res) => {
  res.status(404).json({sucess: false, msg: "errorrr.."})
})

app.listen(3000, () => {
  console.log('server started');
});