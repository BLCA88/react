import { useState } from "react";
const ItemCount = ({stock}) => {
    const [contador, setNumero] = useState(1)
    //const agregarCarrito = () => {onAdd(numero)}
    const sumar = () => {contador < stock && setNumero(contador + 1) }
    const restar = () => {contador > 1 && setNumero(contador - 1)}
    return (
        <>
            <button type="button" onClick={() => sumar()} className="text-white  bg-blue-700 hover:bg-blue-500  focus:ring-2 focus:ring-white font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">+</button>
            {contador}
            <button type="button" onClick={() => restar()} className="text-white border-blue-700 bg-blue-700 hover:bg-blue-500 focus:ring-2 focus:ring-white font-medium rounded-full text-sm px-5 py-2.5 ml-2 mr-2 mb-2 focus:outline-none ">-</button>            
        </>
    );
}

export default ItemCount;
