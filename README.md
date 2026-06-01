# 🍊 Fanta Landing Page (GSAP Scroll Animation)

Este projeto é uma landing page promocional e interativa para a marca Fanta, desenvolvida com o objetivo de praticar técnicas avançadas de Web Design, manipulação do DOM e animações complexas baseadas no scroll do usuário.

🚀 Funcionalidades e Efeitos
---
* Animação de Scroll Interativa (Cinematic Scroll): Utilizando o GSAP e o ScrollTrigger, os elementos da página (como a lata de Fanta, fatias de laranja e folhas) mudam de posição, tamanho e rotacionam dinamicamente conforme o usuário rola a tela.

* Transição de Seções Coesa: Os elementos visuais da primeira seção (Hero) viajam e integram-se perfeitamente com os conteúdos das seções seguintes à medida que o scroll acontece.

* Design de Cards Moderno: Apresentação de produtos secundários (Coca-Cola e Pepsi) em formato de cards responsivos com gradientes vibrantes no fundo.

* Tipografia Customizada: Integração da fonte Product Sans de forma local para manter a identidade visual limpa e moderna.

🛠️ Tecnologias Utilizadas
---
* HTML5

* CSS3 (com uso de Flexbox, posicionamento avançado z-index e gradientes lineares)

* JavaScript (ES6+)

* GSAP (GreenSock Animation Platform) (via CDN)

* GSAP ScrollTrigger (Plugin para sincronizar animações com a barra de rolagem)

📂 Estrutura do Código
---
`index.html`: Estrutura da página dividida em três seções principais (`.hero`, `.two` e `.three`), importando as bibliotecas de animação necessárias.

`style.css`: Estilização completa do layout, garantindo o posicionamento fixo do menu de navegação e ocultando barras de rolagem horizontais indesejadas (`overflow-x: hidden`).

`app.js`: O "motor" do projeto. Contém as Timelines do GSAP com configurações de `scrub` (sincronização exata com o movimento do dedo do usuário) e marcadores de depuração ativos para refinamento.

⚙️ Como Executar o Projeto
---
Bash
```python
Bash
# 1. Clone o repositório para a sua máquina local
git clone https://github.com/Pedro-Ramon2608/Fanta-LandingPage.git

# 2. Navegue até a pasta do projeto
cd Fanta-LandingPage
```
Execução
---
Como o projeto foi desenvolvido puramente com tecnologias Front-end nativas, você não precisa instalar nenhuma dependência via terminal!

Basta abrir o arquivo index.html diretamente em qualquer navegador moderno ou utilizar a extensão Live Server do seu VS Code para visualizar as animações em tempo real.
