class Numeros extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                .pagination {
                    display: flex;
                    gap: 10px;
                    font-family: Arial, sans-serif;
                }
                .page {
                    padding: 8px 12px;
                    border-radius: 50%;
                    cursor: pointer;
                    background: #222;
                    color: white;
                    text-align: center;

                }
                .page:hover {
                    background: #ffffff;
                }
                .active {
                    background: white;
                    color: black;
                }
            </style>
            <div class="pagination">
                <span class="page active">1</span>
                <span class="page">2</span>
                <span class="page">3</span>
                <span class="page">4</span>
                <span class="page">5</span>
                <span class="page">6</span>
                <span class="page">7</span>
                <span class="page">8</span>
                <span class="page">9</span>
                <span class="page">10</span>
            </div>
        `;
    }
}

export default Numeros;