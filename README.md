# Echo Tecnología - Sitio Web Moderno

Este es un sitio web moderno y responsivo para Echo Tecnología, construido con React, Vite y Tailwind CSS.

## 🚀 Características

- ✨ Diseño moderno y premium con gradientes y animaciones
- 📱 Totalmente responsivo (móvil, tablet y desktop)
- 🎨 Paleta de colores personalizada
- ⚡ Animaciones suaves y micro-interacciones
- 🎯 Componentes reutilizables
- 🔥 Rendimiento optimizado con Vite

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

### Opción 1: Usando WSL (Recomendado para Windows)

1. Abre una terminal WSL (Ubuntu)
2. Navega al directorio del proyecto:
   ```bash
   cd /home/mi/Yesica/echo
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

### Opción 2: Usando PowerShell (Windows)

Si tienes problemas con la ejecución de scripts, primero habilita la ejecución de scripts:

1. Abre PowerShell como Administrador
2. Ejecuta:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Luego navega al proyecto e instala:
   ```powershell
   cd "\\wsl.localhost\Ubuntu-24.04\home\mi\Yesica\echo"
   npm install
   npm run dev
   ```

## 🌐 Acceso al Sitio

Una vez que el servidor de desarrollo esté corriendo, abre tu navegador y visita:
```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
echo/
├── src/
│   ├── components/
│   │   ├── Header.tsx       # Navegación y menú
│   │   ├── Hero.tsx         # Sección hero con estadísticas
│   │   ├── ProductShowcase.tsx  # Productos destacados
│   │   ├── Categories.tsx   # Categorías de productos
│   │   ├── Features.tsx     # Características y beneficios
│   │   └── Footer.tsx       # Footer con newsletter
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos globales con Tailwind
├── index.html               # HTML principal
├── tailwind.config.js       # Configuración de Tailwind
├── vite.config.ts           # Configuración de Vite
└── package.json             # Dependencias

```

## 🎨 Personalización

### Colores

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  primary: { ... },  // Azul principal
  accent: { ... },   // Morado/Rosa de acento
}
```

### Fuentes

Las fuentes se cargan desde Google Fonts en `index.html`:
- **Inter**: Para texto general
- **Outfit**: Para títulos y encabezados

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción

## 🎯 Componentes Principales

### Header
- Navegación responsiva con menú móvil
- Banner superior con información de envío
- Botones de acción (login, carrito)

### Hero
- Sección principal con gradiente
- Estadísticas en tarjetas con efecto glass
- Botones de llamada a la acción
- Divisor de onda decorativo

### ProductShowcase
- Grid de productos destacados
- Tarjetas con hover effects
- Iconos animados con efecto float
- Gradientes únicos por producto

### Categories
- Tarjetas de categorías con gradientes
- Efectos hover con transformaciones
- Círculos decorativos de fondo

### Features
- Características del servicio
- Sección de estadísticas de clientes
- Efectos de elevación en hover

### Footer
- Newsletter con formulario de suscripción
- Información de contacto
- Enlaces importantes
- Métodos de pago

## 🚀 Mejoras Implementadas

Comparado con el sitio original, este nuevo diseño incluye:

1. **Diseño Visual Premium**
   - Gradientes modernos
   - Efectos glass morphism
   - Animaciones suaves

2. **Mejor UX**
   - Navegación más intuitiva
   - Mejor jerarquía visual
   - Micro-interacciones

3. **Responsividad Total**
   - Optimizado para móviles
   - Adaptable a tablets
   - Perfecto en desktop

4. **Rendimiento**
   - Carga rápida con Vite
   - Optimización de assets
   - CSS optimizado con Tailwind

## 📱 Responsividad

El sitio está optimizado para:
- 📱 Móviles (320px - 767px)
- 📱 Tablets (768px - 1023px)
- 💻 Desktop (1024px+)

## 🤝 Soporte

Para preguntas o soporte:
- Email: sacechotecnologia@gmail.com
- WhatsApp: +57 320 7548718

## 📄 Licencia

© 2024 Echo Tecnología. Todos los derechos reservados.
