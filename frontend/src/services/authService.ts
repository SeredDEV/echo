const API_URL = "http://localhost:3000/api/auth";

interface RegisterData {
  email: string;
  password: string;
  full_name: string;
  phone?: string;
}

interface LoginData {
  email: string;
  password: string;
  remember?: boolean;
}

interface AuthResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export const authService = {
  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al registrarse");
      }

      return result;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      };
    }
  },

  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al iniciar sesión");
      }

      // Guardar token y email si se seleccionó "recordarme"
      if (result.data?.session?.access_token) {
        localStorage.setItem("access_token", result.data.session.access_token);

        if (data.remember) {
          localStorage.setItem("remembered_email", data.email);
        } else {
          localStorage.removeItem("remembered_email");
        }
      }

      return result;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      };
    }
  },

  async logout(): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/logout`, {
        method: "POST",
      });

      const result = await response.json();

      // Limpiar token
      localStorage.removeItem("access_token");

      return result;
    } catch (error) {
      localStorage.removeItem("access_token");
      return {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      };
    }
  },

  getToken(): string | null {
    return localStorage.getItem("access_token");
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },

  getRememberedEmail(): string | null {
    return localStorage.getItem("remembered_email");
  },

  async forgotPassword(email: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/forgot-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al enviar el correo");
      }

      return result;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      };
    }
  },

  async resetPassword(
    password: string,
    accessToken: string
  ): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Error al restablecer la contraseña");
      }

      return result;
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Error desconocido",
      };
    }
  },
};
