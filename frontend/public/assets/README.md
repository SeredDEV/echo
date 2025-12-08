# 📁 Carpeta de Assets - Echo Tecnología

## 📍 Ubicación
Esta carpeta contiene todos los recursos visuales del sitio web.

```
public/assets/images/
```

## 🖼️ Archivos que debes agregar

### 1. Logo Principal
- **Nombre del archivo**: `logo.png`
- **Ubicación**: `public/assets/images/logo.png`
- **Uso**: Header/Navegación del sitio
- **Especificaciones**:
  - Formato: PNG con fondo transparente
  - Tamaño recomendado: 200-250px de ancho x 50-70px de alto
  - Resolución: 72-144 DPI
  - Colores: Preferiblemente en colores oscuros o el gradiente de tu marca

### 2. Logo Blanco (Opcional pero recomendado)
- **Nombre del archivo**: `logo-white.png`
- **Ubicación**: `public/assets/images/logo-white.png`
- **Uso**: Footer (fondo oscuro)
- **Especificaciones**:
  - Formato: PNG con fondo transparente
  - Mismo tamaño que el logo principal
  - Color: Blanco o colores claros

### 3. Favicon (Opcional)
- **Nombre del archivo**: `favicon.ico` o `favicon.png`
- **Ubicación**: `public/favicon.ico`
- **Uso**: Icono de la pestaña del navegador
- **Especificaciones**:
  - Formato: ICO o PNG
  - Tamaño: 32x32px o 64x64px

## 📝 Instrucciones para agregar tu logo

### Paso 1: Preparar tus archivos
1. Asegúrate de que tu logo esté en formato PNG con fondo transparente
2. Redimensiona el logo si es necesario (recomendado: 200-250px de ancho)
3. Crea una versión en blanco del logo para el footer

### Paso 2: Copiar los archivos
Copia tus archivos de logo a esta carpeta:

**Desde Windows:**
```
\\wsl.localhost\Ubuntu-24.04\home\mi\Yesica\echo\public\assets\images\
```

**Desde WSL:**
```bash
cp /ruta/a/tu/logo.png ~/Yesica/echo/public/assets/images/logo.png
cp /ruta/a/tu/logo-white.png ~/Yesica/echo/public/assets/images/logo-white.png
```

### Paso 3: Verificar
Una vez agregados los archivos, el sitio los cargará automáticamente:
- El logo principal aparecerá en el **Header**
- El logo blanco aparecerá en el **Footer**

## 🔄 Fallback Automático
Si no agregas los archivos de logo, el sitio mostrará automáticamente el texto "Echo Tecnología" con un gradiente bonito. No hay problema si aún no tienes el logo listo.

## 🎨 Recomendaciones de Diseño

### Para el Logo Principal:
- Usa colores que contrasten bien con fondo blanco
- Mantén un diseño limpio y profesional
- Asegúrate de que sea legible en tamaños pequeños (móvil)

### Para el Logo Blanco:
- Debe ser completamente blanco o en tonos muy claros
- Mismo diseño que el logo principal, solo cambia el color
- Debe verse bien sobre fondo oscuro (gris oscuro/negro)

## 📂 Estructura Final

Cuando termines, deberías tener esta estructura:

```
public/
├── assets/
│   ├── images/
│   │   ├── logo.png          ✅ Tu logo principal
│   │   └── logo-white.png    ✅ Tu logo en blanco
│   └── README.md
└── favicon.ico               ⭐ (Opcional)
```

## ❓ ¿Necesitas ayuda?

Si no tienes un logo aún, puedes:
1. Usar el texto con gradiente que ya está configurado (se ve muy bien)
2. Crear un logo simple con herramientas como:
   - Canva (gratis)
   - Figma (gratis)
   - Adobe Express (gratis)

## 🔍 Verificar que funciona

Después de agregar los logos:
1. Inicia el servidor: `npm run dev`
2. Abre el navegador en `http://localhost:5173`
3. Verifica que el logo aparezca en el header y footer
4. Prueba en móvil (responsive mode del navegador)

---

**Nota**: Los errores de lint que ves sobre React son normales hasta que instales las dependencias con `npm install`. Una vez instaladas, desaparecerán.
