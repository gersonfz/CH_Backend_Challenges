import app  from './app.js';
import { Server } from 'socket.io';
import ProductManager from './model/product.container.js';

const PORT = process.env.PORT || 8080;

//Products
const productManager = new ProductManager('./src/database/product.json');



//Server

const server = app.listen(PORT, () => {
    console.log(`Server listen and running in PORT: ${PORT}`);
});

const io = new Server(server);

//Sockets Events


io.on('connection', async (socket) => {
    console.log('New client connected!');
    const products = await productManager.getProducts()


    //Emit products!
    socket.emit('products', {
        products: products,
        showProducts: products.length > 0
    });
})