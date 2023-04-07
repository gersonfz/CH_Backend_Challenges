import MongoContainer from './mongo.container.js';
import productSchema from '../../../models/products.schema.js';

const collection = 'products'

class ProductsMongoDAO extends MongoContainer {
    constructor() {
        super(collection, productSchema)
    }
}

export default ProductsMongoDAO;