# 📁 Estructura de Carpetas - Assets

## 📂 Organización actual:

```
public/assets/
├── logo/                    ✅ Logos del sitio
│   ├── logo.png            (Logo principal - header)
│   ├── logo-white.png      (Logo blanco - footer)
│   └── README.md
│
├── images/                  📸 Imágenes para el carrusel de productos
│   └── (Pendiente: alexa-echo.jpg, chromecast.jpg, etc.)
│
├── video/                   🎥 Videos del sitio
│   ├── hero/               ✅ Videos de fondo para Hero section
│   │   ├── alexa.mp4
│   │   ├── google.mp4
│   │   ├── googlecam.mp4
│   │   ├── googlemini.mp4
│   │   └── README.md
│   ├── alexa/              (Otros videos de Alexa)
│   ├── google/             (Otros videos de Google)
│   └── accesory/           (Videos de accesorios)
│
└── README.md
```

## ✅ Archivos correctamente ubicados:

### Logos (en `public/assets/logo/`):
- ✅ `logo.png` - 1.1 MB
- ✅ `logo-white.png` - 1.1 MB

**Rutas en el código:**
- Header: `/assets/logo/logo.png`
- Footer: `/assets/logo/logo-white.png`

### Videos Hero (en `public/assets/video/hero/`):
- ✅ `alexa.mp4` - 27.3 MB
- ✅ `google.mp4` - 668 KB
- ✅ `googlecam.mp4` - 1.6 MB
- ✅ `googlemini.mp4` - 877 KB

**Uso:** Sección Hero ("Bienvenido al Futuro de tu Hogar")
**Comportamiento:** Rotan automáticamente cada 10 segundos

## 📸 Imágenes pendientes para el carrusel de productos:

Coloca estas imágenes en `public/assets/images/`:

1. **alexa-echo.jpg** - Imagen del Amazon Echo Dot
2. **chromecast.jpg** - Imagen del Google Chromecast  
3. **firetv.jpg** - Imagen del Amazon Fire TV Stick
4. **smart-bulb.jpg** - Imagen de bombillas RGB inteligentes

**Tamaño recomendado:** 1200x675px (16:9)

## 📍 Rutas de acceso:

**Desde Windows:**
```
\\wsl.localhost\Ubuntu-24.04\home\mi\Yesica\echo\public\assets\
```

**Desde WSL:**
```
~/Yesica/echo/public/assets/
```

## ✨ Estado actual:

- ✅ Logos funcionando correctamente
- ✅ Videos de Hero configurados y rotando
- ⏳ Imágenes del carrusel de productos pendientes (usando placeholders)

## 🎯 Componentes y sus assets:

| Componente | Asset | Ubicación |
|------------|-------|-----------|
| Header | Logo principal | `/assets/logo/logo.png` |
| Footer | Logo blanco | `/assets/logo/logo-white.png` |
| Hero | Videos de fondo | `/assets/video/hero/*.mp4` |
| ProductCarousel | Imágenes de productos | `/assets/images/*.jpg` |
