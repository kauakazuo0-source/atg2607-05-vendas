#!/usr/bin/env bash
# Script de publicação para Unix (Linux/macOS/Git Bash)

echo "=========================================================="
echo "[DevOps] Configurando Repositório Remoto e Publicando no GitHub"
echo "=========================================================="
echo ""

# Verificar se o Git está instalado
if ! command -v git &> /dev/null; then
    echo "[ERRO] Git não encontrado! Instale o Git e tente novamente."
    exit 1
fi

# Renomear branch atual para main se necessario
echo "[1/3] Configurando branch principal para 'main'..."
git branch -M main

# Adicionar repositório remoto
echo "[2/3] Adicionando link de conexão com o GitHub remoto..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/kauakazuo0-source/atg2607-05-vendas.git

# Fazer o push
echo "[3/3] Enviando commits para o GitHub (branch main)..."
echo ""
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "=========================================================="
    echo "[SUCESSO] Repositório publicado no GitHub com sucesso!"
    echo "=========================================================="
else
    echo ""
    echo "=========================================================="
    echo "[AVISO] Ocorreu um problema ao enviar. Verifique se o repositório remoto existe"
    echo "e se você tem permissão de escrita (login efetuado no Git)."
    echo "=========================================================="
fi
echo ""
