# Imagen base con Node.js LTS
FROM node:24-bullseye

# Instalar herramientas adicionales
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    vim \
    nano \
    bash-completion \
    tree \
    htop \
    && rm -rf /var/lib/apt/lists/*

# Configurar como root
USER root

# Copiar configuración de bash personalizada
COPY .bashrc /root/.bashrc
COPY .bashrc /home/node/.bashrc
RUN chown node:node /home/node/.bashrc

# Configurar permisos del workspace
RUN mkdir -p /workspace && chown -R node:node /workspace

# Cambiar a usuario node por defecto
USER node
WORKDIR /workspace

# Exponer puertos
EXPOSE 5173 3000

# Comando por defecto
CMD ["bash"]
