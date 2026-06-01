// Criação da timeline do GSAP com animações do scroll
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true, // A animação sincroniza com o movimento de scroll
        markers: false, // Depuração
    },
});

tl.to(
    '#fanta',
    {
        top: '120%', // Move o elemento com id fanta para 120% do topo
        left: '0%',
    },
    'orange'
); // Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja_cortada',
    {
        top: '160%',
        left: '23%',
    },
    'orange'
); // Sincronizada com a animação nomeada de orange

tl.to(
    '#laranja',
    {
        width: '15%', // Reduz o tamanho do elemento id 'laranja'
        top: '160%',
        right: '10%',
    },
    'orange'
); // Sincronizada com a animação nomeada de orange

tl.to(
    '#folha',
    {
        top: '110%',
        rotate: '490deg',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha_2',
    {
        top: '110%',
        rotate: '490deg',
        left: '0%',
    },
    'orange'
);

// Criação da segunda timeline

let tl_2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '20% 50%', // Fim da animação (topo da tela atinge 50% da altura quando estiver 20% da seção .three)
        scrub: true, // A animação sincroniza com o movimento de scroll
        markers: false, // Depuração
    },
});

tl_2.from(
    '.lemon-1',
    {
        rotate: '-90deg',
        left: '-100', // inicia o elemento fora da tela à esquerda (-100%)
        top: '110%'
    },
    'ca'
); // Nomeação dessa etapa como 'ca' para sincronização

tl_2.from(
    '#coca_cola',
    {
        rotate: '-90deg',
        left: '-100', // inicia o elemento fora da tela à esquerda (-100%)
        top: '110%'
    },
    'ca'
); // Sincronizando com a animação nomeada de 'ca'

tl_2.from(
    '.lemon-2',
    {
        rotate: '90deg',
        left: '100', // inicia o elemento fora da tela à esquerda (-100%)
        top: '110%'
    },
    'ca'
); // Sincronizando com a animação nomeada de 'ca'

tl_2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100', // inicia o elemento fora da tela à esquerda (-100%)
        top: '110%'
    },
    'ca'
); // Sincronizando com a animação nomeada de 'ca'

tl_2.to(
    '#fanta',
    {
        width: '32%',
        top: '210%',
        left: '34%',
    },
    'orange'
); // Sincronizada com a animação nomeada de ca

tl_2.to(
    '#laranja_cortada',
    {
        width: '18%',
        top: '204%',
        left: '41%',
    },
    'ca'
); // Sincronizada com a animação nomeada de ca
