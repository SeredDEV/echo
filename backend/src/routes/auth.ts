import { Router, Request, Response } from "express";
import { supabase, supabaseAdmin } from "../config/supabase";

const router = Router();

// POST - Registro
router.post("/register", async (req: Request, res: Response) => {
  try {
    const { email, password, ...userData } = req.body;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });

    if (error) throw error;

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Login
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Logout
router.post("/logout", async (req: Request, res: Response) => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) throw error;

    res.json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Solicitar recuperación de contraseña
router.post("/forgot-password", async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    // Supabase enviará un correo con un link tipo:
    // https://tu-frontend.com/reset-password?token=xxxxx
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `http://localhost:5173/reset-password`,
    });

    if (error) throw error;

    res.json({ 
      success: true, 
      message: "Se ha enviado un correo para recuperar tu contraseña. Revisa tu bandeja de entrada." 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Cambiar contraseña con token de recuperación
router.post("/reset-password", async (req: Request, res: Response) => {
  try {
    const { token, password } = req.body;

    if (!token || !password) {
      return res
        .status(400)
        .json({ success: false, error: "Token y contraseña son requeridos" });
    }

    // Verificar el token y actualizar la contraseña
    const { error } = await supabase.auth.updateUser({
      password: password,
    });

    if (error) throw error;

    res.json({ 
      success: true, 
      message: "Contraseña actualizada exitosamente" 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// PUT - Cambiar contraseña (usuario autenticado)
router.put("/change-password", async (req: Request, res: Response) => {
  try {
    const { newPassword } = req.body;
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;

    res.json({ 
      success: true, 
      message: "Contraseña actualizada exitosamente" 
    });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// GET - Obtener usuario actual
router.get("/user", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error) throw error;

    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// GET - Obtener perfil del usuario con rol
router.get("/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    // Obtener perfil con rol
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id)
      .single();

    if (profileError) throw profileError;

    res.json({ success: true, data: { ...user, profile } });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// PUT - Actualizar perfil
router.put("/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    const { data, error } = await supabase
      .from("profiles")
      .update(req.body)
      .eq("id", user?.id)
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// POST - Crear usuario (solo admins)
router.post("/create-user", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    // Verificar que el usuario sea admin
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user?.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, error: "Forbidden: Admin only" });
    }

    // Crear usuario
    const { email, password, full_name, role = "user" } = req.body;

    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name },
    });

    if (error) throw error;

    // Actualizar rol si es necesario
    if (role === "admin") {
      const { error: updateError } = await supabaseAdmin
        .from("profiles")
        .update({ role: "admin" })
        .eq("id", data.user?.id);

      if (updateError) throw updateError;
    }

    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// GET - Listar todos los usuarios (solo admins)
router.get("/users", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    // Verificar que el usuario sea admin
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user?.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, error: "Forbidden: Admin only" });
    }

    // Obtener todos los perfiles
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

// PUT - Actualizar rol de usuario (solo admins)
router.put("/users/:id/role", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ success: false, error: "No token provided" });
    }

    // Verificar que el usuario sea admin
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);

    if (authError) throw authError;

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user?.id)
      .single();

    if (profileError || profile?.role !== "admin") {
      return res
        .status(403)
        .json({ success: false, error: "Forbidden: Admin only" });
    }

    // Actualizar rol
    const { id } = req.params;
    const { role } = req.body;

    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({ success: false, error: "Invalid role" });
    }

    const { data, error } = await supabase
      .from("profiles")
      .update({ role })
      .eq("id", id)
      .select();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: (error as Error).message });
  }
});

export default router;
