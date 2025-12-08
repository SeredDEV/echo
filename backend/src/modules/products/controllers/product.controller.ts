import { Request, Response } from "express";
import { productService } from "../services/product.service";

export const productController = {
  // Obtener todos los productos
  async getAllProducts(req: Request, res: Response) {
    try {
      const data = await productService.getAllProducts();
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Obtener producto por ID
  async getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await productService.getProductById(id);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Crear producto
  async createProduct(req: Request, res: Response) {
    try {
      const data = await productService.createProduct(req.body);
      res.status(201).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Actualizar producto
  async updateProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await productService.updateProduct(id, req.body);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Eliminar producto
  async deleteProduct(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await productService.deleteProduct(id);
      res.json({ success: true, message: "Producto eliminado" });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },
};
