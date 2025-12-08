import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { validate } from "../middlewares/validation.middleware";
import {
  registerSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  changePasswordSchema,
  updateProfileSchema,
  createUserSchema,
  changeRoleSchema,
} from "../schemas/auth.schema";
import { requireAuth, requireAdmin } from "../middlewares/auth.middleware";

const router = Router();

// POST - Registro
router.post("/register", validate(registerSchema), authController.register);

// POST - Login
router.post("/login", validate(loginSchema), authController.login);

// POST - Logout
router.post("/logout", authController.logout);

// POST - Solicitar recuperación de contraseña
router.post(
  "/forgot-password",
  validate(forgotPasswordSchema),
  authController.forgotPassword
);

// POST - Cambiar contraseña con token de recuperación
router.post(
  "/reset-password",
  validate(resetPasswordSchema),
  authController.resetPassword
);

// PUT - Cambiar contraseña (usuario autenticado)
router.put(
  "/change-password",
  requireAuth,
  validate(changePasswordSchema),
  authController.changePassword
);

// GET - Obtener usuario actual
router.get("/user", requireAuth, authController.getCurrentUser);

// GET - Obtener perfil del usuario con rol
router.get("/profile", requireAuth, authController.getProfile);

// PUT - Actualizar perfil
router.put(
  "/profile",
  requireAuth,
  validate(updateProfileSchema),
  authController.updateProfile
);

// POST - Crear usuario (solo admins)
router.post(
  "/create-user",
  requireAdmin,
  validate(createUserSchema),
  authController.createUser
);

// GET - Listar todos los usuarios (solo admins)
router.get("/users", requireAdmin, authController.listUsers);

// PUT - Actualizar rol de usuario (solo admins)
router.put(
  "/users/:id/role",
  requireAdmin,
  validate(changeRoleSchema),
  authController.changeUserRole
);

export default router;
