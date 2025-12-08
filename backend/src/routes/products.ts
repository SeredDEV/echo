import { Router, Request, Response } from "express";
import { supabase } from "../config/supabase";

const router = Router();

// GET - Obtener todos los productos
router.get("/", async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// GET - Obtener producto por ID
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Crear producto
router.post("/", async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from("products")
      .insert([req.body])
      .select();

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// PUT - Actualizar producto
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from("products")
      .update(req.body)
      .eq("id", id)
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// DELETE - Eliminar producto
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;

    res.json({ success: true, message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

export default router;
