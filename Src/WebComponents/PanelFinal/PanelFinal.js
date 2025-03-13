import noticiasImag from '../assets/news.js';

class PanelFinal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .panel {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(10, auto);
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
      </style>
      <div class="panel"></div>
    `;
  }

connectedCallback() {
    const noticias = noticiasImag();
    const panelContainer = this.shadowRoot.querySelector('.panel');

    noticias.slice(0, 10).forEach((noticia) => {
        const card = document.createElement('card-sin-img');
        
        card.setAttribute('categoria', noticia.categoria);
        card.setAttribute('titulo', noticia.titulo);
        card.setAttribute('descripcion', noticia.descripcion);
        card.setAttribute('autor-nombre', noticia.autor);
        card.setAttribute('autor-imagen', noticia.autorImagen);
        card.setAttribute('fecha', noticia.fecha);
        
        panelContainer.appendChild(card);
     });
    }
};

export default PanelFinal;