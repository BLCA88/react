import {Link} from 'react-router-dom'
import Category from './category';
import consultarBDD from '../../assets/funciones';
const Buttons = () => {
    return (        
        <div className="hidden sm:ml-6 sm:block" id="mobile-menu">
            <div className="flex space-x-4">
                <Category/>                
                <Link to= {'/categorias/pc-armadas'} className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Pc Armadas</Link>
                <Link to= {'/categorias/combos'} className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Combo Actualizacion</Link>
                <Link to= {'/ofertas/sale'} className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Ofertas</Link>
            </div>
        </div>

    );
}

export default Buttons;

