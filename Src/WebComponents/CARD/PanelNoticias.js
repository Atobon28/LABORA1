import noticiasImag from '../assets/news.js';

class PanelNoticias extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const container = document.createElement('div');
    container.classList.add('panel-container');

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: flex;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        overflow: auto;
        background: #121212; 
        padding: 40px 0;
      }

      .panel-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 25px;
        max-width: 900px;
        width: 90%;
      }

      card-imagen {
        display: block;
        background: #1e1e1e;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out;
      }

      card-imagen:hover {
        transform: scale(1.03);
      }
    `;

    const data = noticiasImag().slice(0, 2);

    const cardsHtml = data.map(item => `
      <card-imagen 
        imagen="${item.imagen}" 
        categoria="${item.categoria}" 
        titulo="${item.titulo}" 
        descripcion="${item.descripcion}" 
        autor-imgen="${item['autor-imgen']}" 
        autor-nombre="${item.autor}" 
        fecha="${item.fecha}">
      </card-imagen>
    `).join('');

    container.innerHTML = cardsHtml;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }
}

export default PanelNoticias;
