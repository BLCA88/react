import {Link} from 'react-router-dom'

const Item = ({ producto }) => {
    return (
        <div className="flex flex-col justify-around  max-w-sm m-4 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img src={`../img/${producto.img}`} className="p-10 rounded-full" alt="product image" />            
            <div className="px-5 pb-5 text-center ">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{producto.titulo} {producto.marca} {producto.modelo}</h5>  
            </div>    
            <div className="flex items-start justify-around mt-4 mb-4">
                <p className="text-3xl font-bold text-gray-900 dark:text-white">${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>                    
                <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to= {`/product/${producto.id}`}>Ver Producto</Link>                    
            </div>
            
        </div>
    );
}

export default Item;
