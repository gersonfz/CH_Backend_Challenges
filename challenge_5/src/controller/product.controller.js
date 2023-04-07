import { HTTP_STATUS } from "../constants/api.contants.js";
import { successResponse } from "../utils/api.utils.js";
import { ProductManager } from "../daos/managers/mongoDB/app.daos.js";


const productManager = new ProductManager()
class ProductsController {
    async addProduct(req, res, next){
        try {
            try {
                const {
                    title,
                    price,
                    code,
                    stock,
                    category,
                    description,
                    status,
                    thumbnails,
                } = req.body;                

                const newProduct = {
                    title,
                    price,
                    code,
                    stock,
                    category,
                    description,
                    status: status === 'on' ? true : false,
                    thumbnails,
                }
                await productManager.addProducts(newProduct);
                const response = successResponse(newProduct);
                res.status(HTTP_STATUS.CREATED).json(response)
            }
            catch (error) {
                next(error);
            }
        } 
        catch (error) {
            next(error);
        }
    };
};
export default new ProductsController;