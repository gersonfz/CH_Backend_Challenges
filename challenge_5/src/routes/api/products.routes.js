import { Router } from "express";
import productController from "../../controller/product.controller.js";

const router = Router();

router.post('/inventoryupload', productController.addProduct);

export default router;