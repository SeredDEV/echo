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
    && rm -rf /var/lib/apt/lists/*

# Configurar usuario node
USER node
WORKDIR /workspace

# Configurar bash para el usuario node
RUN echo 'export PS1="\[\e[36m\]\u@\h:\[\e[32m\]\w\[\e[0m\]\$ "' >> ~/.bashrc

# Exponer puertos
EXPOSE 5173 3000

# Comando por defecto
CMD ["bash"]
