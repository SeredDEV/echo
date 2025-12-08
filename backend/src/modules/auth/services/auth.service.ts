import { supabase, supabaseAdmin } from "../../../config/supabase";

export const authService = {
  // Registrar usuario
  async register(email: string, password: string, userData: any) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    });

    if (error) throw error;
    return data;
  },

  // Login
  async login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  // Logout
  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  // Obtener usuario por token
  async getUserByToken(token: string) {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);
    if (error) throw error;
    return user;
  },

  // Obtener perfil con rol
  async getProfile(userId: string) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) throw error;
    return data;
  },

  // Actualizar perfil
  async updateProfile(userId: string, profileData: any) {
    const { data, error } = await supabase
      .from("profiles")
      .update(profileData)
      .eq("id", userId)
      .select();

    if (error) throw error;
    return data;
  },

  // Solicitar recuperación de contraseña
  async forgotPassword(email: string, redirectUrl: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: redirectUrl,
    });

    if (error) throw error;
  },

  // Cambiar contraseña
  async changePassword(newPassword: string) {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
  },

  // Verificar si usuario es admin
  async isAdmin(userId: string): Promise<boolean> {
    const profile = await this.getProfile(userId);
    return profile?.role === "admin";
  },

  // Crear usuario (solo admin)
  async createUser(
    email: string,
    password: string,
    fullName: string,
    role: string = "user"
  ) {
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName },
    });

    if (error) throw error;

    // Actualizar rol si es admin
    if (role === "admin") {
      const { error: updateError } = await supabaseAdmin
        .from("profiles")
        .update({ role: "admin" })
        .eq("id", data.user?.id);

      if (updateError) throw updateError;
    }

    return data;
  },

  // Listar todos los usuarios
  async listUsers() {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
  },

  // Cambiar rol de usuario
  async changeUserRole(userId: string, role: string) {
    if (!["admin", "user"].includes(role)) {
      throw new Error("Invalid role");
    }

    const { data, error } = await supabase
      .from("profiles")
      .update({ role })
      .eq("id", userId)
      .select();

    if (error) throw error;
    return data;
  },
};
