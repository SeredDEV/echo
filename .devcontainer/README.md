# 🐳 Dev Container - Echo Tecnología

Configuración de contenedor de desarrollo para el proyecto Echo.

## 📋 Requisitos

- Docker Desktop instalado y ejecutándose
- VS Code con la extensión **Dev Containers** instalada
- WSL 2 (si estás en Windows)

## 🚀 Cómo usar

### 1. Abrir en Dev Container

**Opción A - Desde VS Code:**
1. Abre la carpeta del proyecto en VS Code
2. Presiona `F1` o `Ctrl+Shift+P`
3. Selecciona: **Dev Containers: Reopen in Container**
4. Espera a que el contenedor se construya (primera vez toma más tiempo)

**Opción B - Desde Command Palette:**
1. `F1` → **Dev Containers: Open Folder in Container**
2. Selecciona la carpeta `echo`

### 2. Trabajar en el contenedor

Una vez dentro del contenedor:

```bash
# Frontend
cd frontend
npm run dev       # Servidor de desarrollo (http://localhost:5173)
npm run build     # Build de producción
npm run preview   # Preview del build

# Backend (futuro)
cd backend
npm run dev       # Servidor backend (http://localhost:3000)
```

## 🔧 Características

### ✅ Incluido en el contenedor:

- **Node.js 24 LTS** (última versión estable)
- **npm** (gestor de paquetes)
- **Git** (control de versiones)
- **GitHub CLI** (gh)
- **Extensiones de VS Code:**
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - React/TypeScript snippets
  - Error Lens
  - Docker
  - GitHub Copilot

### 📦 Volúmenes:

- `node_modules_frontend` - Módulos de Node.js del frontend (persistente)
- `node_modules_backend` - Módulos de Node.js del backend (persistente)

### 🌐 Puertos expuestos:

- **5173** - Frontend (Vite dev server)
- **3000** - Backend (futuro)

## 🎯 Ventajas

✅ **Entorno consistente** - Mismo entorno para todo el equipo  
✅ **Sin configuración local** - No necesitas instalar Node.js localmente  
✅ **Aislamiento** - No interfiere con otras instalaciones  
✅ **Reproducible** - Fácil de compartir y replicar  
✅ **Pre-configurado** - Extensions y settings incluidos  

## 🔄 Reconstruir el contenedor

Si cambias la configuración del Dockerfile:

1. `F1` → **Dev Containers: Rebuild Container**

## 🛑 Salir del contenedor

`F1` → **Dev Containers: Reopen Folder Locally**

## 📝 Notas

- La primera vez tardará más en construir la imagen
- Los `node_modules` se mantienen en volúmenes para mejor rendimiento
- Los cambios en el código se sincronizan automáticamente
