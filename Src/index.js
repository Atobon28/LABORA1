import BarraBusqueda from './WebComponents/BUSQUEDA/BarraBusqueda.js';
import BotonBusqueda from './WebComponents/BUSQUEDA/BotonBusqueda.js';
import PanelNoticias from './WebComponents/CARD/panelnoticias.js';
import Card from './WebComponents/CARD/card.js';
import CardSinImg from './WebComponents/CARD/CardSinImg.js'; 
import FeedNoticias from './WebComponents/FEED/FeedNoticias.js';
import PanelFinal from './WebComponents/PanelFinal/PanelFinal.js';
import Numeros from './WebComponents/NUMEROS/Numeros.js';


customElements.define('barra-busqueda', BarraBusqueda);
customElements.define('boton-personalizado', BotonBusqueda);
customElements.define('panel-noticias', PanelNoticias);
customElements.define('card-imagen', Card);
customElements.define('card-sin-img', CardSinImg);
customElements.define('feed-noticias', FeedNoticias);
customElements.define('panel-final', PanelFinal);
customElements.define('custom-numeros', Numeros);
