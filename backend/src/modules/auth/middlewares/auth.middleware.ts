import { Request, Response, NextFunction } from "express";
import { authService } from "../services/auth.service";

// Middleware para verificar autenticación
export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Token no proporcionado",
      });
    }

    const user = await authService.getUserByToken(token);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Token inválido",
      });
    }

    // Agregar usuario al request
    (req as any).user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: "No autorizado",
    });
  }
};

// Middleware para verificar que el usuario sea admin
export const requireAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Token no proporcionado",
      });
    }

    const user = await authService.getUserByToken(token);

    if (!user) {
      return res.status(401).json({
        success: false,
        error: "Token inválido",
      });
    }

    const isAdmin = await authService.isAdmin(user.id);

    if (!isAdmin) {
      return res.status(403).json({
        success: false,
        error: "Acceso denegado: Se requieren permisos de administrador",
      });
    }

    // Agregar usuario al request
    (req as any).user = user;
    next();
  } catch (error) {
    res.status(403).json({
      success: false,
      error: "Acceso denegado",
    });
  }
};
