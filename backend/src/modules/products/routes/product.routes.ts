import { Router } from "express";
import { productController } from "../controllers/product.controller";
import { requireAuth } from "../../auth/middlewares/auth.middleware";

const router = Router();

// GET - Obtener todos los productos (público)
router.get("/", productController.getAllProducts);

// GET - Obtener producto por ID (público)
router.get("/:id", productController.getProductById);

// POST - Crear producto (requiere autenticación)
router.post("/", requireAuth, productController.createProduct);

// PUT - Actualizar producto (requiere autenticación)
router.put("/:id", requireAuth, productController.updateProduct);

// DELETE - Eliminar producto (requiere autenticación)
router.delete("/:id", requireAuth, productController.deleteProduct);

export default router;
