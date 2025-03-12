class BarraBusqueda extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #0f0f0f;
            padding: 10px;
            border-radius: 10px;
          }
          .buttons {
            display: flex;
            gap: 10px;
          }
          .search {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 5px 15px;
          }
          input {
            background: transparent;
            border: none;
            color: white;
            outline: none;
            font-size: 14px;
            padding: 5px;
          }
          ::placeholder {
            color: rgba(74, 56, 56, 0.5);
          }
          .icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        </style>
        <div class="container">
          <div class="botones">
            <boton-personalizado>All categories</boton-personalizado>
            <boton-personalizado>Company</boton-personalizado>
            <boton-personalizado>Product</boton-personalizado>
            <boton-personalizado>Design</boton-personalizado>
            <boton-personalizado>Engineering</boton-personalizado>
          </div>
          <div class="search">
            <img src="./Src/WebComponents/BUSQUEDA/IMG/icon.png" alt="search icon" class="icon">
            <input type="text" placeholder="Search...">
          </div>
        </div>
      `;
    }
  }
  
export default BarraBusqueda;

  