#!/bin/bash

echo "========================================="
echo "Diagnóstico de Node.js en WSL"
echo "========================================="
echo ""

echo "1. Verificando ubicación de node:"
which node
echo ""

echo "2. Verificando ubicación de npm:"
which npm
echo ""

echo "3. Versión de Node.js:"
node --version
echo ""

echo "4. Versión de npm:"
npm --version
echo ""

echo "========================================="
echo "Si ves rutas como /mnt/c/Program Files/..."
echo "significa que estás usando Node.js de Windows."
echo ""
echo "Necesitas instalar Node.js en WSL."
echo "========================================="
