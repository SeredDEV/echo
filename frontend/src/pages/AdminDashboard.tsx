import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

type Tab = "productos" | "usuarios" | "ordenes" | "estadisticas";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  role: string;
  created_at: string;
}

interface Order {
  id: number;
  user_email: string;
  total: number;
  status: string;
  created_at: string;
  items: number;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>("productos");

  // Mock data - replace with API calls
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Echo Dot 5ta Gen",
      category: "Alexa Echo",
      price: 59.99,
      stock: 15,
      image: "/placeholder.jpg",
    },
    {
      id: 2,
      name: "Fire TV Stick 4K",
      category: "Amazon Fire",
      price: 49.99,
      stock: 23,
      image: "/placeholder.jpg",
    },
    {
      id: 3,
      name: "Google Nest Hub",
      category: "Google Nest",
      price: 89.99,
      stock: 8,
      image: "/placeholder.jpg",
    },
  ]);

  const [users] = useState<User[]>([
    {
      id: "1",
      email: "user1@test.com",
      full_name: "Juan Pérez",
      role: "user",
      created_at: "2024-01-15",
    },
    {
      id: "2",
      email: "user2@test.com",
      full_name: "María García",
      role: "user",
      created_at: "2024-02-20",
    },
  ]);

  const [orders] = useState<Order[]>([
    {
      id: 1001,
      user_email: "user1@test.com",
      total: 159.98,
      status: "completado",
      created_at: "2024-03-01",
      items: 2,
    },
    {
      id: 1002,
      user_email: "user2@test.com",
      total: 89.99,
      status: "pendiente",
      created_at: "2024-03-05",
      items: 1,
    },
  ]);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = authService.getToken();
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const result = await authService.getProfile();
      if (result.success && result.data) {
        setProfile(result.data);

        if (result.data.profile?.role !== "admin") {
          navigate("/");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    navigate("/login");
  };

  const handleDeleteProduct = (id: number) => {
    if (confirm("¿Eliminar este producto?")) {
      console.log("Eliminar producto:", id);
    }
  };

  const handleDeleteUser = (id: string) => {
    if (confirm("¿Eliminar este usuario?")) {
      console.log("Eliminar usuario:", id);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-900">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50 to-accent-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div
          className="container mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-6"
          style={{ maxWidth: "1500px" }}
        >
          <div className="flex justify-between items-center gap-2">
            <div className="flex-1 min-w-0">
              <h1 className="text-lg sm:text-3xl font-bold text-gray-900 truncate">
                Panel Administrativo
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1 truncate">
                Bienvenido,{" "}
                {profile?.profile?.full_name || profile?.user?.email}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="flex-shrink-0 px-2.5 py-1.5 sm:px-5 sm:py-2.5 bg-accent-600 text-white rounded-md sm:rounded-lg hover:bg-accent-700 transition-colors font-medium shadow-sm text-xs sm:text-sm whitespace-nowrap"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      <main
        className="container mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-8"
        style={{ maxWidth: "1500px" }}
      >
        {/* Mobile Tabs - Horizontal */}
        <div className="lg:hidden mb-2">
          <div className="bg-white rounded shadow-sm border border-gray-200 overflow-x-auto">
            <div className="flex">
              <button
                onClick={() => setActiveTab("productos")}
                className={`flex-shrink-0 px-2 py-1.5 text-xs font-semibold transition-colors border-b-2 ${
                  activeTab === "productos"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>Productos</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("usuarios")}
                className={`flex-shrink-0 px-3 py-2.5 text-xs font-semibold transition-colors border-b-4 ${
                  activeTab === "usuarios"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Usuarios</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("ordenes")}
                className={`flex-shrink-0 px-3 py-2.5 text-xs font-semibold transition-colors border-b-4 ${
                  activeTab === "ordenes"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-1.5">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Órdenes</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("estadisticas")}
                className={`flex-shrink-0 px-2 py-1.5 text-xs font-semibold transition-colors border-b-2 ${
                  activeTab === "estadisticas"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>Estadísticas</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs - Desktop only */}
          <div className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <button
                onClick={() => setActiveTab("productos")}
                className={`w-full px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                  activeTab === "productos"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  <span>Productos</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("usuarios")}
                className={`w-full px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                  activeTab === "usuarios"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Usuarios</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("ordenes")}
                className={`w-full px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                  activeTab === "ordenes"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span>Órdenes</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab("estadisticas")}
                className={`w-full px-5 py-3.5 text-sm font-semibold transition-colors border-l-4 ${
                  activeTab === "estadisticas"
                    ? "text-primary-600 border-primary-600 bg-primary-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50 border-transparent"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span>Estadísticas</span>
                </div>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {/* Productos Tab */}
            {activeTab === "productos" && (
              <div className="bg-white rounded shadow-sm border border-gray-200 p-2 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-6">
                  <h2 className="text-sm sm:text-xl font-bold text-gray-900">
                    Gestión de Productos
                  </h2>
                  <button className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 bg-primary-600 text-white rounded sm:rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span>Nuevo Producto</span>
                  </button>
                </div>

                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Producto
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          Categoría
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Precio
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stock
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {products.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-50">
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 bg-gray-200 rounded"></div>
                              <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                                {product.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap hidden sm:table-cell">
                            <span className="text-sm text-gray-600">
                              {product.category}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                              ${product.price}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                product.stock > 10
                                  ? "bg-primary-100 text-primary-800"
                                  : "bg-accent-100 text-accent-800"
                              }`}
                            >
                              {product.stock}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-2 sm:mr-4">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="text-accent-600 hover:text-accent-900"
                            >
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Usuarios Tab */}
            {activeTab === "usuarios" && (
              <div className="bg-white rounded-md sm:rounded-lg shadow-sm border border-gray-200 p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <h2 className="text-base sm:text-xl font-bold text-gray-900">
                    Gestión de Usuarios
                  </h2>
                  <button className="w-full sm:w-auto px-2.5 py-1.5 sm:px-4 sm:py-2 bg-primary-600 text-white rounded-md sm:rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm">
                    <svg
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                    <span>Nuevo Usuario</span>
                  </button>
                </div>

                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Usuario
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          Email
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Rol
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                          Fecha Registro
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50">
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <div className="flex items-center gap-2 sm:gap-3">
                              <div className="h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0 bg-primary-100 rounded-full flex items-center justify-center">
                                <span className="text-primary-600 font-semibold text-xs sm:text-sm">
                                  {user.full_name.charAt(0)}
                                </span>
                              </div>
                              <div className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                                {user.full_name}
                              </div>
                            </div>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap hidden sm:table-cell">
                            <span className="text-xs sm:text-sm text-gray-600">
                              {user.email}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                user.role === "admin"
                                  ? "bg-accent-100 text-accent-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {user.role}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                            {new Date(user.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900 mr-2 sm:mr-4">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteUser(user.id)}
                              className="text-accent-600 hover:text-accent-900"
                            >
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Órdenes Tab */}
            {activeTab === "ordenes" && (
              <div className="bg-white rounded-md sm:rounded-lg shadow-sm border border-gray-200 p-3 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <h2 className="text-base sm:text-xl font-bold text-gray-900">
                    Órdenes de Compra
                  </h2>
                </div>

                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Orden #
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                          Cliente
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Items
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Total
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                          Fecha
                        </th>
                        <th className="px-2 sm:px-3 lg:px-6 py-2 sm:py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                              #{order.id}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap hidden sm:table-cell">
                            <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[150px] inline-block">
                              {order.user_email}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span className="text-xs sm:text-sm text-gray-900">
                              {order.items}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">
                              ${order.total.toFixed(2)}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 inline-flex text-[10px] sm:text-xs leading-5 font-semibold rounded-full ${
                                order.status === "completado"
                                  ? "bg-primary-100 text-primary-800"
                                  : "bg-accent-100 text-accent-800"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap text-xs sm:text-sm text-gray-600 hidden md:table-cell">
                            {new Date(order.created_at).toLocaleDateString()}
                          </td>
                          <td className="px-2 sm:px-3 lg:px-6 py-3 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                            <button className="text-primary-600 hover:text-primary-900">
                              <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Estadísticas Tab */}
            {activeTab === "estadisticas" && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Total Usuarios
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">
                          {users.length}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Total Productos
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">
                          {products.length}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Total Órdenes
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">
                          {orders.length}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-accent-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">
                          Ventas Totales
                        </p>
                        <p className="text-2xl font-bold text-gray-900 mt-2">
                          $
                          {orders
                            .reduce((sum, o) => sum + o.total, 0)
                            .toFixed(2)}
                        </p>
                      </div>
                      <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-accent-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">
                      Stock Bajo
                    </h3>
                    <div className="space-y-3">
                      {products
                        .filter((p) => p.stock < 10)
                        .map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between p-3 bg-accent-50 rounded-lg border border-accent-200"
                          >
                            <div>
                              <p className="text-sm font-semibold text-gray-900">
                                {product.name}
                              </p>
                              <p className="text-xs text-gray-600">
                                {product.category}
                              </p>
                            </div>
                            <span className="text-sm font-bold text-accent-600">
                              {product.stock} unidades
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                    <h3 className="text-base font-bold text-gray-900 mb-4">
                      Órdenes Recientes
                    </h3>
                    <div className="space-y-3">
                      {orders.slice(0, 5).map((order) => (
                        <div
                          key={order.id}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div>
                            <p className="text-sm font-semibold text-gray-900">
                              Orden #{order.id}
                            </p>
                            <p className="text-xs text-gray-600">
                              {order.user_email}
                            </p>
                          </div>
                          <span className="text-sm font-bold text-primary-600">
                            ${order.total.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
