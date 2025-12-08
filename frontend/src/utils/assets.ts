/**
 * Helper para obtener la ruta correcta de un asset
 * En desarrollo: /assets/...
 * En producción: /echo/assets/...
 */
export const getAssetUrl = (path: string): string => {
  // Remover la barra inicial si existe
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Agregar el BASE_URL que Vite configura automáticamente
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
