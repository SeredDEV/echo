import { z } from "zod";

// Esquema para registro
export const registerSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  full_name: z.string().min(1, "El nombre completo es requerido"),
  phone: z.string().optional(),
});

// Esquema para login
export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

// Esquema para forgot password
export const forgotPasswordSchema = z.object({
  email: z.string().email("Email inválido"),
});

// Esquema para reset password
export const resetPasswordSchema = z.object({
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Esquema para cambiar contraseña
export const changePasswordSchema = z.object({
  newPassword: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Esquema para actualizar perfil
export const updateProfileSchema = z.object({
  full_name: z.string().optional(),
  phone: z.string().optional(),
  avatar_url: z.string().url().optional(),
});

// Esquema para crear usuario (admin)
export const createUserSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
  full_name: z.string().min(1, "El nombre completo es requerido"),
  role: z.enum(["admin", "user"]).default("user"),
});

// Esquema para cambiar rol
export const changeRoleSchema = z.object({
  role: z.enum(["admin", "user"]).refine(() => true, {
    message: "El rol debe ser 'admin' o 'user'",
  }),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type ChangeRoleInput = z.infer<typeof changeRoleSchema>;
