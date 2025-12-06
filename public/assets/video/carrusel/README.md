# 🎥 Videos del Carrusel de Productos

## 📍 Ubicación
Esta carpeta contiene los videos para el carrusel de productos ("Tu hogar, siempre a tu alcance").

```
public/assets/video/carrusel/
```

## 📂 Estructura actual:

```
carrusel/
├── alexa-echo/              ✅ 3 videos
│   ├── alexa.mp4           (25.2 MB)
│   ├── alexaecho.mp4       (26.5 MB)
│   └── ZjM0Y2YxZjgt.mp4    (29.4 MB)
│
├── google-nest/             ✅ 1 video
│   └── bf8cb84a-c9d6-4e88-b36a-5b4405c7686a.mp4 (310 KB)
│
├── amazon-fire/             ✅ 1 video
│   └── fireapp.mp4         (4.6 MB)
│
├── google-chromecast/       ⚠️ Vacía (sin videos)
│
└── bombillas-RGB/           ✅ 1 video
    └── f2cdd04dbf114786998e1647945ace50.HD-1080p-7.2Mbps-45550478.mp4 (26.5 MB)
```

## ✨ Cómo funciona:

### Rotación automática de videos:
- Si un producto tiene **múltiples videos**, rotan automáticamente cada **8 segundos**
- Transición suave con fade entre videos
- Indicadores visuales (puntos) en la esquina superior derecha muestran qué video está activo

### Productos:
1. **Alexa Echo**: 3 videos que rotan
2. **Google Nest**: 1 video en loop
3. **Amazon Fire TV**: 1 video en loop
4. **Google Chromecast**: Sin videos (muestra placeholder)
5. **Bombillas RGB**: 1 video en loop

## 📸 Para agregar más videos:

### Opción 1: Agregar videos a un producto existente
Simplemente coloca el archivo `.mp4` en la carpeta del producto:
```
carrusel/alexa-echo/nuevo-video.mp4
```

Luego actualiza el array en `ProductCarousel.tsx`:
```tsx
videos: [
    '/assets/video/carrusel/alexa-echo/alexa.mp4',
    '/assets/video/carrusel/alexa-echo/alexaecho.mp4',
    '/assets/video/carrusel/alexa-echo/ZjM0Y2YxZjgt.mp4',
    '/assets/video/carrusel/alexa-echo/nuevo-video.mp4'  // Agregar aquí
]
```

### Opción 2: Agregar videos a Google Chromecast
1. Coloca los videos en `carrusel/google-chromecast/`
2. Actualiza el array de videos en el código (actualmente está vacío `[]`)

## 📏 Especificaciones técnicas:

### Formato:
- **Tipo**: MP4 (H.264)
- **Aspecto**: 16:9 (horizontal)
- **Resolución**: 1920x1080px (Full HD) o 1280x720px (HD)

### Optimización:
- **Peso recomendado**: 5-30 MB por video
- **Bitrate**: 2-7 Mbps
- **FPS**: 30 fps
- **Audio**: No necesario (los videos se reproducen sin sonido)

### Características:
- **Loop**: Los videos se reproducen en bucle
- **Autoplay**: Inician automáticamente
- **Muted**: Sin sonido
- **Rotación**: Si hay múltiples videos, cambian cada 8 segundos

## 📍 Rutas de acceso:

**Desde Windows:**
```
\\wsl.localhost\Ubuntu-24.04\home\mi\Yesica\echo\public\assets\video\carrusel\
```

**Desde WSL:**
```
~/Yesica/echo/public/assets/video/carrusel/
```

## 🎯 Orden de productos en el carrusel:

1. Alexa Echo
2. Google Nest
3. Amazon Fire TV
4. Google Chromecast
5. Bombillas RGB

## 💡 Notas importantes:

- Los nombres de archivo pueden ser cualquiera (no importa si tienen nombres largos o códigos)
- Cada carpeta de producto puede tener 1 o más videos
- Si no hay videos, se muestra un placeholder con el mensaje "Video próximamente"
- Los videos rotan automáticamente solo si hay más de uno por producto
