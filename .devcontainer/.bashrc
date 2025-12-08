# ~/.bashrc: ejecutado por bash para shells no-login.

# Si no es interactivo, no hacer nada
case $- in
    *i*) ;;
      *) return;;
esac

# Historia
HISTCONTROL=ignoreboth
HISTSIZE=1000
HISTFILESIZE=2000
shopt -s histappend

# Verificar tamaño de ventana después de cada comando
shopt -s checkwinsize

# Hacer que less sea más amigable
[ -x /usr/bin/lesspipe ] && eval "$(SHELL=/bin/sh lesspipe)"

# Habilitar color en el prompt
force_color_prompt=yes

# Colores para ls
if [ -x /usr/bin/dircolors ]; then
    test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
    alias ls='ls --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

# Algunos alias útiles
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias ..='cd ..'
alias ...='cd ../..'
alias cls='clear'
alias tree='tree -C'

# Git aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline --graph --decorate'
alias gd='git diff'

# NPM aliases
alias ni='npm install'
alias nd='npm run dev'
alias nb='npm run build'
alias nt='npm test'

# Funciones útiles
mkcd() {
    mkdir -p "$1" && cd "$1"
}

# Prompt personalizado con colores
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/(\1)/'
}

# Colores
COLOR_RESET='\[\033[0m\]'
COLOR_USER='\[\033[38;5;39m\]'      # Azul brillante
COLOR_HOST='\[\033[38;5;141m\]'     # Púrpura claro
COLOR_PATH='\[\033[38;5;77m\]'      # Verde brillante
COLOR_GIT='\[\033[38;5;215m\]'      # Naranja
COLOR_ARROW='\[\033[38;5;208m\]'    # Naranja brillante
COLOR_TIME='\[\033[38;5;250m\]'     # Gris

# Prompt con emojis y colores (una sola línea)
PS1="${COLOR_TIME}\t${COLOR_RESET} "                           # Hora
PS1+="${COLOR_USER}\u${COLOR_RESET}"                          # Usuario
PS1+="${COLOR_RESET}@${COLOR_RESET}"                          # @
PS1+="${COLOR_HOST}\h${COLOR_RESET} "                         # Host
PS1+="${COLOR_PATH}\w${COLOR_RESET} "                         # Directorio
PS1+="${COLOR_GIT}\$(parse_git_branch)${COLOR_RESET} "        # Branch git
PS1+="${COLOR_ARROW}❯${COLOR_RESET} "                         # Flecha

# Habilitar autocompletado
if ! shopt -oq posix; then
  if [ -f /usr/share/bash-completion/bash_completion ]; then
    . /usr/share/bash-completion/bash_completion
  elif [ -f /etc/bash_completion ]; then
    . /etc/bash_completion
  fi
fi

# Mensaje de bienvenida
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  🚀 Echo Tecnología - Dev Container"
echo "  📦 Node $(node --version) | npm $(npm --version)"
echo "  📂 Workspace: $PWD"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Comandos rápidos:"
echo "   nd  → npm run dev (frontend)"
echo "   nb  → npm run build"
echo "   gs  → git status"
echo "   ll  → listar archivos"
echo ""
