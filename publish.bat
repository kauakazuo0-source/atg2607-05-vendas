@echo off
:: Script de publicação para Windows (PowerShell/CMD)
echo ==========================================================
echo [DevOps] Configurando Repositório Remoto e Publicando no GitHub
echo ==========================================================
echo.

:: Verificar se o Git está instalado
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERRO] Git nao encontrado! Instale o Git e tente novamente.
    pause
    exit /b 1
)

:: Renomear branch atual para main se necessario
echo [1/3] Configurando branch principal para 'main'...
git branch -M main

:: Adicionar repositório remoto
echo [2/3] Adicionando link de conexao com o GitHub remoto...
git remote remove origin >nul 2>nul
git remote add origin https://github.com/kauakazuo0-source/atg2607-05-vendas.git

:: Fazer o push
echo [3/3] Enviando commits para o GitHub (branch main)...
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ==========================================================
    echo [SUCESSO] Repositorio publicado no GitHub com sucesso!
    echo ==========================================================
) else (
    echo.
    echo ==========================================================
    echo [AVISO] Ocorreu um problema ao enviar. Verifique se o repositorio remoto existe
    echo e se voce tem permissao de escrita (login efetuado no Git).
    echo ==========================================================
)
echo.
pause
