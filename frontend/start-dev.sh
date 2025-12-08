#!/bin/bash

# Cargar nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Node: $(which node)"
echo "npm: $(which npm)"
echo "Node version: $(node --version)"
echo "npm version: $(npm --version)"

cd /home/mi/Yesica/echo/frontend
npm run dev
