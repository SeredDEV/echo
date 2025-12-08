#!/bin/bash

echo "🚀 Instalando dependencias de Echo Tecnología..."
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encuentra package.json"
    echo "Por favor ejecuta este script desde el directorio del proyecto"
    exit 1
fi

# Limpiar instalaciones previas si existen
if [ -d "node_modules" ]; then
    echo "🧹 Limpiando node_modules anterior..."
    rm -rf node_modules
fi

if [ -f "package-lock.json" ]; then
    echo "🧹 Limpiando package-lock.json anterior..."
    rm -f package-lock.json
fi

echo ""
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ ¡Instalación completada exitosamente!"
    echo ""
    echo "Para iniciar el servidor de desarrollo, ejecuta:"
    echo "  npm run dev"
    echo ""
else
    echo ""
    echo "❌ Error durante la instalación"
    exit 1
fi
