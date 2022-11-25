const Buttons = () => {
    return (
        <div className="hidden sm:ml-6 sm:block" id="mobile-menu">
            <div className="flex space-x-4">
                <a href="../public/index.html" className="bg-gray-900 text-white px-6 py-2 rounded-md text-lg font-sans" aria-current="page">Categorias</a>
                <a href="../public/index.html" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Pc Armadas</a>
                <a href="../public/index.html" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Combo Actualizacion</a>
                <a href="../public/index.html" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-sans">Ofertas</a>                
            </div>
        </div>
    );
}

export default Buttons;
