import { useState } from 'react'
import {Link} from 'react-router-dom'
const Category = () => {
    const [dropdown, setDropdown] = useState(true)

    const dropDown = () => {        
        setDropdown(!dropdown)
    }
    return (
        <>
            <p type="button" className="cursor-pointer z-10 bg-gray-900 text-white px-6 py-2 rounded-md text-lg font-sans" onClick={() => dropDown()}>Categorias</p>
            <div id="dropdownOn" className={dropdown ? 'hidden' : 'bg-gray-900 absolute text-white mt-11 '}>                
                    <Link to={'/categorias/procesadores'} onClick={() => dropDown()} className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white>Procesadores'>Procesadores</Link>
                    <Link to={'/categorias/memorias'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Memoria Ram</Link>
                    <Link to={'/categorias/discos'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Disco Solido</Link>
                    <Link to={'/categorias/fuentes'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Fuente</Link>
                    <Link to={'/categorias/gabinetes'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gabinetes</Link>
                    <Link to={'/categorias/motherboards'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Motherboards</Link>
                    <Link to={'/categorias/placas-video'} onClick={() => dropDown()} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Placas de Video</Link>
            </div>
        </>

    );
}

export default Category;
