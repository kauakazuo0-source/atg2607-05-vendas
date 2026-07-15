/**
 * ULTRA WATCH PRO — main.js
 * Lógica de animações sofisticadas usando GSAP e ScrollTrigger
 */

// Garantir que a execução ocorra após o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // Registrar o plugin ScrollTrigger do GSAP se ele estiver disponível
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // 1. Animação de Entrada (Hero Section) no Carregamento
        const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
        
        heroTimeline
            .fromTo('nav', { y: -80, opacity: 0 }, { y: 0, opacity: 1 })
            .fromTo('section.safe-zone h1', { y: 40, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5')
            .fromTo('section.safe-zone p', { y: 20, opacity: 0 }, { y: 0, opacity: 0.8 }, '-=0.7')
            .fromTo('.animate-float', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2 }, '-=0.8');

        // 2. Animação dos Glass Cards e Elementos com ScrollTrigger
        // Para cada cartão, criamos uma entrada suave quando ele entra no campo de visão
        const revealElements = document.querySelectorAll('.glass-card, section.safe-zone > div, .details-grid > div');
        
        revealElements.forEach((element) => {
            gsap.fromTo(element, 
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 85%', // inicia a animação quando o topo do elemento atinge 85% do viewport
                        toggleActions: 'play none none none', // apenas reproduz uma vez
                    }
                }
            );
        });

        // 3. Efeito Parallax sutil no fundo e na imagem do relógio ao dar scroll
        gsap.to('.animate-float', {
            y: 30,
            scrollTrigger: {
                trigger: 'section.safe-zone',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    } else {
        // Fallback básico caso o GSAP não carregue por algum motivo (por exemplo, falta de rede)
        console.warn('GSAP ou ScrollTrigger não encontrados. Usando IntersectionObserver como fallback.');
        setupFallbackObserver();
    }

    // 4. Scroll Suave para Links de Âncora da Navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();
                const navHeight = document.querySelector('nav').offsetHeight || 64;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Botões de Ação - Rolar para a seção de Oferta
    const buyButtons = document.querySelectorAll('button:contains("Compre Agora"), button:contains("Comprar Agora"), #mobile-buy-btn');
    // Para simplificar a busca por texto do botão
    document.querySelectorAll('button').forEach(btn => {
        const text = btn.innerText.toLowerCase();
        if (text.includes('compre agora') || text.includes('comprar agora')) {
            btn.addEventListener('click', () => {
                const target = document.querySelector('#oferta') || document.querySelector('section:last-of-type');
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight || 64;
                    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

// Implementação simples de fallback se as CDN do GSAP falharem
function setupFallbackObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.glass-card, section.safe-zone > div, .details-grid > div');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(card);
    });
}
