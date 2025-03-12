class BotonBusqueda extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          button {
            background-color: #0f0f0f;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            color: white;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.3s;
          }
          button:hover {
            background-color:rgb(52, 52, 52);
          }
        </style>
        <button><slot></slot></button>
      `;
    }
  }

export default BotonBusqueda;