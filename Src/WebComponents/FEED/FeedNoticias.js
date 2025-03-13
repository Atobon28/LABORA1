import noticiasImag from '../assets/news.js';

class FeedNoticias extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .feed {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }
      </style>
      <div class="feed"></div>
    `;
  }

  connectedCallback() {
    const data = noticiasImag();
    const feedContainer = this.shadowRoot.querySelector('.feed');

    console.log(data);
    
    data.slice(0, 4).forEach((noticia, index) => {
      const card = document.createElement(index === 0 || index === 3  ? 'card-imagen' : 'card-sin-img');
      
      card.setAttribute('categoria', noticia.categoria);
      card.setAttribute('titulo', noticia.titulo);
      card.setAttribute('descripcion', noticia.descripcion);
      card.setAttribute('autor-nombre', noticia.autor);
      card.setAttribute('autor-imagen', noticia.autorImagen);
      card.setAttribute('fecha', noticia.fecha);
      card.setAttribute('imagen', noticia.imagen);
      
      feedContainer.appendChild(card);
    });
  }
}

export default FeedNoticias;