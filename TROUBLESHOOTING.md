# Solución al Error de NPM en WSL

## Problema
El error ocurre porque npm está intentando usar Node.js de Windows dentro de WSL, causando conflictos con rutas UNC.

## Solución: Instalar Node.js dentro de WSL

### Opción 1: Instalar Node.js con nvm (Recomendado)

Ejecuta estos comandos **dentro de tu terminal WSL**:

```bash
# 1. Instalar nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 2. Recargar la configuración del shell
source ~/.bashrc

# 3. Instalar Node.js LTS
nvm install --lts

# 4. Verificar la instalación
node --version
npm --version

# 5. Navegar al proyecto e instalar dependencias
cd ~/Yesica/echo
npm install
```

### Opción 2: Instalar Node.js con apt

```bash
# 1. Actualizar repositorios
sudo apt update

# 2. Instalar Node.js y npm
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Verificar instalación
node --version
npm --version

# 4. Instalar dependencias del proyecto
cd ~/Yesica/echo
npm install
```

### Opción 3: Usar yarn en lugar de npm

Si prefieres usar yarn:

```bash
# 1. Instalar yarn
sudo npm install -g yarn

# 2. Instalar dependencias
cd ~/Yesica/echo
yarn install

# 3. Ejecutar el proyecto
yarn dev
```

## Verificar qué Node.js estás usando

Ejecuta esto para ver si estás usando el Node.js de Windows o de WSL:

```bash
which node
which npm
```

**Debería mostrar algo como:**
- `/home/mi/.nvm/versions/node/v20.x.x/bin/node` (si usas nvm)
- `/usr/bin/node` (si usas apt)

**NO debería mostrar:**
- `/mnt/c/Program Files/nodejs/node` (esto indica que estás usando el de Windows)

## Solución Rápida (Si tienes prisa)

Si no quieres instalar Node.js en WSL ahora, puedes usar el proyecto directamente desde Windows:

1. Copia el proyecto a una ubicación de Windows:
```bash
cp -r ~/Yesica/echo /mnt/c/Users/sopor/Desktop/echo
```

2. Abre PowerShell como Administrador y ejecuta:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
cd C:\Users\sopor\Desktop\echo
npm install
npm run dev
```

## Después de la Instalación

Una vez que npm install funcione correctamente, ejecuta:

```bash
npm run dev
```

El sitio estará disponible en: http://localhost:5173
