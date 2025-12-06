#!/bin/bash

echo "========================================="
echo "Instalando Node.js en WSL con nvm"
echo "========================================="
echo ""

# Verificar si nvm ya está instalado
if command -v nvm &> /dev/null; then
    echo "✓ nvm ya está instalado"
else
    echo "→ Instalando nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
    
    # Cargar nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
fi

echo ""
echo "→ Instalando Node.js LTS..."
nvm install --lts

echo ""
echo "→ Configurando Node.js LTS como predeterminado..."
nvm use --lts
nvm alias default 'lts/*'

echo ""
echo "========================================="
echo "Verificación:"
echo "========================================="
node --version
npm --version

echo ""
echo "========================================="
echo "✓ Node.js instalado correctamente en WSL"
echo "========================================="
echo ""
echo "Ahora puedes ejecutar:"
echo "  cd ~/Yesica/echo"
echo "  npm install"
echo "  npm run dev"
