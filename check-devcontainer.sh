#!/bin/bash

echo "🐳 Verificando requisitos para Dev Container..."
echo ""

# Verificar Docker
if command -v docker &> /dev/null; then
    echo "✅ Docker instalado: $(docker --version)"
    
    # Verificar que Docker esté corriendo
    if docker info &> /dev/null; then
        echo "✅ Docker está ejecutándose"
    else
        echo "❌ Docker está instalado pero no está ejecutándose"
        echo "   Por favor inicia Docker Desktop"
        exit 1
    fi
else
    echo "❌ Docker no está instalado"
    echo "   Descárgalo de: https://www.docker.com/products/docker-desktop"
    exit 1
fi

echo ""
echo "🎉 Todo listo para usar Dev Containers!"
echo ""
echo "Pasos siguientes:"
echo "1. Abre VS Code en esta carpeta"
echo "2. Instala la extensión 'Dev Containers'"
echo "3. Presiona F1 → 'Dev Containers: Reopen in Container'"
