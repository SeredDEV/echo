import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  // Registrar usuario
  async register(req: Request, res: Response) {
    try {
      const { email, password, ...userData } = req.body;
      const data = await authService.register(email, password, userData);
      res.status(201).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Login
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const data = await authService.login(email, password);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Logout
  async logout(req: Request, res: Response) {
    try {
      await authService.logout();
      res.json({ success: true, message: "Sesión cerrada exitosamente" });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Solicitar recuperación de contraseña
  async forgotPassword(req: Request, res: Response) {
    try {
      const { email } = req.body;
      await authService.forgotPassword(
        email,
        "http://localhost:5173/reset-password"
      );
      res.json({
        success: true,
        message:
          "Se ha enviado un correo para recuperar tu contraseña. Revisa tu bandeja de entrada.",
      });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Cambiar contraseña con token de recuperación
  async resetPassword(req: Request, res: Response) {
    try {
      const { password } = req.body;
      await authService.changePassword(password);
      res.json({
        success: true,
        message: "Contraseña actualizada exitosamente",
      });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Cambiar contraseña (usuario autenticado)
  async changePassword(req: Request, res: Response) {
    try {
      const { newPassword } = req.body;
      await authService.changePassword(newPassword);
      res.json({
        success: true,
        message: "Contraseña actualizada exitosamente",
      });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Obtener usuario actual
  async getCurrentUser(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Obtener perfil del usuario con rol
  async getProfile(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      const profile = await authService.getProfile(user.id);
      res.json({ success: true, data: { ...user, profile } });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Actualizar perfil
  async updateProfile(req: Request, res: Response) {
    try {
      const user = (req as any).user;
      const data = await authService.updateProfile(user.id, req.body);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Crear usuario (solo admins)
  async createUser(req: Request, res: Response) {
    try {
      const { email, password, full_name, role = "user" } = req.body;
      const data = await authService.createUser(
        email,
        password,
        full_name,
        role
      );
      res.status(201).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Listar todos los usuarios (solo admins)
  async listUsers(req: Request, res: Response) {
    try {
      const data = await authService.listUsers();
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },

  // Actualizar rol de usuario (solo admins)
  async changeUserRole(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { role } = req.body;
      const data = await authService.changeUserRole(id, role);
      res.json({ success: true, data });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  },
};
