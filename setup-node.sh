#!/bin/bash

echo "🔧 Configurando Node.js en WSL..."

# Cargar nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Instalar Node.js LTS
echo "📦 Instalando Node.js LTS..."
nvm install --lts
nvm use --lts
nvm alias default 'lts/*'

echo ""
echo "✅ Node.js instalado correctamente en WSL:"
node --version
npm --version

echo ""
echo "🧹 Limpiando node_modules de Windows..."
cd /home/mi/Yesica/echo/frontend
rm -rf node_modules package-lock.json

echo ""
echo "📦 Instalando dependencias en WSL..."
npm install

echo ""
echo "✅ ¡Listo! Ahora puedes ejecutar:"
echo "  cd /home/mi/Yesica/echo/frontend"
echo "  npm run dev"
