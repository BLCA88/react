import { Link } from 'react-router-dom'
import ItemCount from "../itemCount/itemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="flex flex-col text-center justify-around mb-10 max-w-md m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">            
            <img src={`../img/${item.img}`} className="p-10 " alt="product image" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.titulo} {item.marca} {item.modelo}</h5>            
            <div className="flex flex-col  items-center justify-around mt-4 mb-2">
                <p className="mb-3 text-xl text-gray-700 dark:text-white">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <p className="mb-3 text-xl text-gray-700 dark:text-white">Stock: {item.stock}</p>
                <div className='text-white'>
                    <ItemCount stock={item.stock} />
                </div>
                <Link to={'/carrito/finalizar-compra'} className="w-1/2 m-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar al carrito</Link>                                
            </div>            
        </div>
    );
}

export default ItemDetail;

