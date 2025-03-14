class CardSinImg extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <style>
          .carta {
            background: #111;
            color: white;
            border-radius: 10px;
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            padding: 20px;
            gap: 10px;
          }
          .categoria {
            font-size: 9px;
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
            text-ident: 20px;
          }
          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
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
          <div class="categoria"></div>
          <div class="titulo"></div>
          <div class="descripcion"></div>
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
        this.shadowRoot.querySelector('.categoria').innerText = this.getAttribute('categoria'); 
        this.shadowRoot.querySelector('.titulo').innerText = this.getAttribute('titulo');
        this.shadowRoot.querySelector('.descripcion').innerText = this.getAttribute('descripcion');
        this.shadowRoot.querySelector('.autor-img').src = this.getAttribute('autor-imagen');
        this.shadowRoot.querySelector('.autor-nombre').innerText = this.getAttribute('autor-nombre');
        this.shadowRoot.querySelector('.fecha').innerText = this.getAttribute('fecha');
    }
}

export default CardSinImg;