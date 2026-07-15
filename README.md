# Ultra Watch Pro — Página de Vendas Premium

Página de vendas de alta conversão, responsiva e performática, projetada com uma estética premium baseada no sistema de design **Lumina Tech OS** e equipada com micro-animações sofisticadas para capturar a atenção do usuário.

---

## 🚀 Tecnologias e Stack

O projeto utiliza uma stack leve e moderna focada em performance de carregamento e fidelidade de design (sem dependência de ferramentas de build complexas):

- **HTML5:** Estruturação semântica e acessível (SEO otimizado).
- **CSS3 (Vanilla):** Estilos customizados focados em um design premium com suporte a **Glassmorphism**, gradientes fluidos e responsividade completa.
- **JavaScript (ES6):** Interatividade e manipulação dinâmica do DOM.
- **GSAP & ScrollTrigger (CDN):** Biblioteca líder de mercado para animações robustas ativadas pelo scroll da tela, com fallback nativo via `IntersectionObserver` caso ocorra falha de rede na CDN.

---

## 🎨 Sistema de Design (Lumina Tech OS)

A identidade visual é inspirada em "Quiet Power"—uma estética voltada a profissionais e entusiastas de performance:
- **Cores principais:** Fundo preto absoluto (`#000000`) para preservação de bateria e integração com telas circulares (bezel), com acentos em Azul Elétrico (Primária), Cyan (Dados) e Rosa/Vermelho (Alertas/Saúde).
- **Tipografia:** 
  - `Sora` para títulos de grande destaque.
  - `Hanken Grotesk` para o corpo do texto de fácil leitura.
  - `JetBrains Mono` para dados numéricos de sensores (BPM, passos, GPS).
- **Formas:** Bordas totalmente arredondadas (estilo "Pill") que complementam a tela circular do relógio.

---

## 📁 Estrutura de Arquivos

```bash
├── .gitignore          # Arquivos e pastas omitidos no versionamento Git
├── .env.example        # Modelo de variáveis de ambiente preventivo
├── DESIGN.md           # Especificação detalhada da identidade visual e design system
├── index.html          # Estrutura principal da página de vendas
├── main.js             # Lógica das animações GSAP e interatividade
├── style.css           # Estilos e animações básicas em CSS
├── screen.png          # Referência visual de captura de tela
├── publish.bat         # Script para publicação rápida no GitHub (Windows)
└── publish.sh          # Script para publicação rápida no GitHub (Linux/macOS)
```

---

## 🛠️ Execução Local

Como o projeto é estático, você pode rodá-lo localmente de duas formas:

1. **Abertura Direta:** Abra o arquivo `index.html` diretamente em seu navegador.
2. **Servidor Local (Recomendado):** Use uma extensão como *Live Server* no VS Code ou execute via Python/Node:
   ```bash
   # Com Python
   python -m http.server 8000
   
   # Com Node (servidor global)
   npx serve .
   ```

---

## 📤 Publicação no GitHub

Para vincular este repositório local ao seu repositório remoto no GitHub e realizar o primeiro push com segurança:

1. Execute o script automatizado correspondente ao seu sistema operacional:
   - **No Windows (Prompt/PowerShell):**
     ```cmd
     .\publish.bat
     ```
   - **No Linux/macOS (Terminal):**
     ```bash
     chmod +x publish.sh
     ./publish.sh
     ```
2. Ou execute os comandos manualmente no terminal:
   ```bash
   # Adicionar o repositório remoto
   git remote add origin https://github.com/kauakazuo0-source/atg2607-05-vendas.git
   
   # Renomear branch principal para main (caso necessário)
   git branch -M main
   
   # Enviar código para o GitHub
   git push -u origin main
   ```
