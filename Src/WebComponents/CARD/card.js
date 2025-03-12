class Card extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .carta {
            background: #111;
            color: white;
            border-radius: 10px;
            overflow: hidden;
            width: 450px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
          }
          .imagen {
            width: 100%;
            height: 200px;
            background-size: cover;
            background-position: center;
          }
          .Contenido {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .categoria {
            font-size: 14px;
            color: white;
            text-transform: uppercase;
          }
          .titulo {
            font-size: 18px;
            font-weight: bold;
          }
          .descripcion {
            font-size: 14px;
            color: white;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }
          .autor {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .autor-img {
            width: 25px;
            height: 25px;
            border-radius: 50%;
          }
          .autor-nombre {
            font-size: 14px;
            color: #ddd;
          }
        </style>
        <div class="carta">
          <div class="imagen"></div>
          <div class="contennido">
            <div class="categoria"></div>
            <div class="titulo"></div>
            <div class="descripcion"></div>
          </div>
          <div class="footer">
        <div class="autor">
            <img class="autor-img" src="" alt="Autor">
            <span class="autor-nombre"></span>
        </div>
        <div class="fecha"></div>
        </div>
        </div>
      `;
    }
  
    connectedCallback() {
        this.shadowRoot.querySelector('.imagen').style.backgroundImage = `url(${this.getAttribute('imagen')})`;
        this.shadowRoot.querySelector('.categoria').innerText = this.getAttribute('categoria'); 
        this.shadowRoot.querySelector('.titulo').innerText = this.getAttribute('titulo');
        this.shadowRoot.querySelector('.descripcion').innerText = this.getAttribute('descripcion');
        this.shadowRoot.querySelector('.autor-img').src = this.getAttribute('autor-imgen');
        this.shadowRoot.querySelector('.autor-nombre').innerText = this.getAttribute('autor-nombre');
        this.shadowRoot.querySelector('.fecha').innerText = this.getAttribute('fecha');
    }
  }
  

export default Card;