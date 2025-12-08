# 🚀 Guía de Despliegue en GitHub Pages

## Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

### Paso 1: Habilitar GitHub Pages en tu repositorio

1. Ve a tu repositorio: https://github.com/SeredDEV/echo
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **GitHub Actions**

### Paso 2: Crear el archivo de workflow

Crea el archivo `.github/workflows/deploy.yml` con este contenido:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Paso 3: Hacer commit y push

```bash
git add .
git commit -m "Add GitHub Pages deployment workflow"
git push origin main
```

### Paso 4: Esperar el despliegue

- Ve a la pestaña **Actions** en tu repositorio
- Verás el workflow ejecutándose
- Cuando termine, tu sitio estará en: **https://sereddev.github.io/echo/**

---

## Opción 2: Despliegue Manual con gh-pages

### Paso 1: Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

### Paso 2: Actualizar package.json

Agrega estos scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Paso 3: Desplegar

```bash
npm run deploy
```

Tu sitio estará disponible en: **https://sereddev.github.io/echo/**

---

## Opción 3: Despliegue Manual (Sin dependencias adicionales)

### Paso 1: Construir el proyecto

```bash
npm run build
```

Esto creará la carpeta `dist/` con todos los archivos optimizados.

### Paso 2: Crear rama gh-pages

```bash
git checkout --orphan gh-pages
git rm -rf .
```

### Paso 3: Copiar archivos de dist

```bash
cp -r dist/* .
rm -rf dist
```

### Paso 4: Hacer commit y push

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
```

### Paso 5: Configurar GitHub Pages

1. Ve a **Settings** → **Pages**
2. En **Source**, selecciona **Deploy from a branch**
3. Selecciona la rama **gh-pages** y carpeta **/ (root)**
4. Click en **Save**

Tu sitio estará en: **https://sereddev.github.io/echo/**

---

## ✅ Verificación

Una vez desplegado, tu sitio estará disponible en:

🌐 **https://sereddev.github.io/echo/**

## 📝 Notas Importantes

1. **Base Path**: El archivo `vite.config.ts` ya está configurado con `base: '/echo/'`
2. **Videos**: Los videos grandes pueden tardar en cargar la primera vez
3. **Actualización**: Cada push a `main` activará un nuevo despliegue (con GitHub Actions)
4. **Tiempo**: El despliegue puede tardar 1-2 minutos

## 🔧 Solución de Problemas

### Si el sitio no carga correctamente:

1. Verifica que `base: '/echo/'` esté en `vite.config.ts`
2. Asegúrate de que todas las rutas de assets usen rutas relativas
3. Revisa la consola del navegador para errores

### Si los videos no cargan:

1. Verifica que los archivos de video estén en la carpeta `public/assets/video/`
2. Los videos grandes pueden tardar en cargar
3. Considera optimizar los videos para web (menor tamaño)

---

## 🎉 ¡Listo!

Tu sitio web Echo Tecnología estará disponible públicamente en GitHub Pages.
