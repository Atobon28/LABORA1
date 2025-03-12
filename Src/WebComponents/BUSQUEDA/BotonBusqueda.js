class BotonBusqueda extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          button {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 20px;
            color: white;
            padding: 10px 20px;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.3s;
          }
          button:hover {
            background: rgba(255, 255, 255, 0.2);
          }
        </style>
        <button><slot></slot></button>
      `;
    }
  }

export default BotonBusqueda;