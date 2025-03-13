class BarraBusqueda extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            width: 100%;
          }

          .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 0;
            width: 100%;
          }

          .search-container {
            display: flex;
            align-items: center;
          }
          .buttons {
            display: flex;
            gap: 10px;
          }
          .search {
            display: flex;
            align-items: center;
            background-color:rgb(47, 46, 46);
            border-radius: 8px;
            padding: 5px 15px;
          }
            .search:hover {
                    background: #ffffff;}
          input {
            background: transparent;
            border: none;
            color: white;
            outline: none;
            font-size: 14px;
            padding: 5px;
          }
          ::placeholder {
            color: rgba(142, 125, 125, 0.5);
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

          
          <div class="search-container">
            <div class="search">
              <img src="./Src/WebComponents/BUSQUEDA/IMG/icon.png" alt="search icon" class="icon">
              <input type="text" placeholder="Search...">
            </div>
            
          </div>
        </div>
      `;
    }
  }
  
  // Poner el search container en otro web component
  
export default BarraBusqueda;

  