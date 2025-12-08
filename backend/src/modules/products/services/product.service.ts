import { supabase } from "../../../config/supabase";

export const productService = {
  // Obtener todos los productos
  async getAllProducts() {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  // Obtener producto por ID
  async getProductById(id: string) {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    return data;
  },

  // Crear producto
  async createProduct(productData: any) {
    const { data, error } = await supabase
      .from("products")
      .insert([productData])
      .select();

    if (error) throw error;
    return data;
  },

  // Actualizar producto
  async updateProduct(id: string, productData: any) {
    const { data, error } = await supabase
      .from("products")
      .update(productData)
      .eq("id", id)
      .select();

    if (error) throw error;
    return data;
  },

  // Eliminar producto
  async deleteProduct(id: string) {
    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) throw error;
  },
};
