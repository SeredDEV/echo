# 🎥 Videos del Hero - Echo Tecnología

## 📍 Ubicación
Esta carpeta contiene los videos de fondo para la sección Hero ("Bienvenido al Futuro de tu Hogar").

```
public/assets/video/hero/
```

## 🎬 Videos actuales:

### ✅ Videos en la carpeta:

1. **alexa.mp4** (27.3 MB)
   - Video de Amazon Echo Dot / Alexa

2. **google.mp4** (668 KB)
   - Video de Google Home

3. **googlecam.mp4** (1.6 MB)
   - Video de Google Nest Cam

4. **googlemini.mp4** (877 KB)
   - Video de Google Home Mini

## 📏 Especificaciones técnicas:

### Formato:
- **Tipo**: MP4 (H.264)
- **Aspecto**: 16:9 (horizontal)
- **Resolución**: 1920x1080px (Full HD) o 1280x720px (HD)

### Optimización:
- **Peso recomendado**: 5-10 MB por video
- **Bitrate**: 2-4 Mbps
- **FPS**: 30 fps
- **Audio**: No necesario (los videos se reproducen sin sonido)

### Características:
- **Loop**: Los videos se reproducen en bucle automáticamente
- **Autoplay**: Inician automáticamente al cargar
- **Muted**: Sin sonido para mejor experiencia de usuario
- **Transición**: Cambian cada 10 segundos con fade suave

## ✨ Cómo funcionan:

1. Los videos se reproducen en bucle continuo
2. Cada 10 segundos, cambia automáticamente al siguiente video
3. Transición suave con fade entre videos
4. Indicadores visuales (puntos) debajo de las estadísticas
5. Click en los indicadores para cambiar manualmente de video
6. Overlay oscuro para mejorar legibilidad del texto

## 🔧 Rutas en el código:

Los videos se cargan desde:
- `/assets/video/hero/alexa.mp4`
- `/assets/video/hero/google.mp4`
- `/assets/video/hero/googlecam.mp4`
- `/assets/video/hero/googlemini.mp4`

## 📍 Rutas de acceso:

**Desde Windows:**
```
\\wsl.localhost\Ubuntu-24.04\home\mi\Yesica\echo\public\assets\video\hero\
```

**Desde WSL:**
```
~/Yesica/echo/public/assets/video/hero/
```

## 🎨 Recomendaciones para agregar más videos:

1. **Iluminación**: Videos bien iluminados y claros
2. **Enfoque**: El producto debe ser el protagonista
3. **Movimiento**: Movimientos suaves, no bruscos
4. **Contexto**: Mostrar el producto en uso real
5. **Calidad**: Alta calidad de video, sin pixelación
6. **Duración**: 10-20 segundos (se reproducen en loop)

## 💡 Para agregar más videos:

Simplemente coloca archivos MP4 adicionales en esta carpeta y actualiza el array `videos` en `src/components/Hero.tsx`:

```tsx
const videos = [
    '/assets/video/hero/alexa.mp4',
    '/assets/video/hero/google.mp4',
    '/assets/video/hero/googlecam.mp4',
    '/assets/video/hero/googlemini.mp4',
    '/assets/video/hero/tu-nuevo-video.mp4'  // Agregar aquí
];
```
