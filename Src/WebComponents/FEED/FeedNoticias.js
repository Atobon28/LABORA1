import noticiasImag from '../assets/news.js';

class FeedNoticias extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .feed {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
        }

        .midcard {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 10px;
          width: 100%;
          height: 100%;
        }
      </style>
      <div class="feed">
      </div>
    `;
  }

  connectedCallback() {
    const data = noticiasImag();
    const feedContainer = this.shadowRoot.querySelector('.feed');
    const midcard = this.ownerDocument.createElement('div');
    midcard.classList.add('midcard');

    console.log(data);
    
    data.slice(0, 4).forEach((noticia, index) => {
    
      if (index === 1) {
        feedContainer.appendChild(midcard);
      }

      const card = document.createElement(index === 0 || index === 3  ? 'card-imagen' : 'card-sin-img');
      
      card.setAttribute('categoria', noticia.categoria);
      card.setAttribute('titulo', noticia.titulo);
      card.setAttribute('descripcion', noticia.descripcion);
      card.setAttribute('autor-nombre', noticia.autor);
      card.setAttribute('autor-imagen', noticia.autorImagen);
      card.setAttribute('fecha', noticia.fecha);
      card.setAttribute('imagen', noticia.imagen);

      if (index === 1 || index === 2) {
        midcard.appendChild(card); 
      } else {
        feedContainer.appendChild(card);
      }
      
    });
  }
}

export default FeedNoticias;
