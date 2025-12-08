# Echo Tecnología

Proyecto de e-commerce para productos de tecnología inteligente.

## 📁 Estructura del Proyecto

```
echo/
├── .devcontainer/     # Configuración de Dev Container
├── frontend/          # Aplicación React + Vite + TypeScript + Tailwind
├── backend/           # API REST (pendiente de desarrollo)
└── README.md
```

## 🐳 Dev Container (Recomendado)

La forma más rápida de empezar a desarrollar:

1. Instala **Docker Desktop** y la extensión **Dev Containers** en VS Code
2. Abre el proyecto en VS Code
3. Presiona `F1` → **Dev Containers: Reopen in Container**
4. ¡Listo! Todo está pre-configurado

[Ver documentación completa del Dev Container](.devcontainer/README.md)

## 🚀 Frontend

El frontend está construido con:
- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilos)

### Iniciar el Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔧 Backend

La carpeta backend está lista para cuando necesites implementar la API.

## 🛠️ Desarrollo Local (Sin Docker)

Si prefieres trabajar sin Dev Container:

```bash
# Frontend
cd frontend
npm install
npm run dev     # http://localhost:5173

# Backend (futuro)
cd backend
npm install
npm run dev     # http://localhost:3000
```

**Nota:** Necesitas Node.js 24+ instalado localmente.

## 📦 Scripts disponibles

Desde la raíz del proyecto (dentro del Dev Container):

```bash
npm run dev:frontend      # Iniciar frontend
npm run build:frontend    # Build de producción
npm run preview:frontend  # Preview del build
npm run install:all       # Instalar todas las dependencias
npm run clean             # Limpiar node_modules y builds
```

## 📝 Notas

- El frontend está completamente funcional
- El backend se desarrollará según las necesidades del proyecto
