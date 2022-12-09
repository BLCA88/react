import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import consultarBDD from '../../components/assets/funciones'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {categorias, sale} = useParams()
    
    useEffect(() => {
        if (categorias) {
            consultarBDD('../json/productos.json').then(products => {                
                const productList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === categorias)                
                const listaProductos = ItemList({productList})                
                setProductos(listaProductos)            
            })
        }else if (sale) {
            consultarBDD('../json/productos.json').then(products => {
                const productList= products.filter(prod => prod.stock > 0).filter(prod => prod.oferta === sale)
                const listaProductos = ItemList({productList})
                setProductos(listaProductos)            
            })
        }
         else {
            consultarBDD('./json/productos.json').then(products => {
                const productList= products.filter(prod => prod.stock > 0)
                const listaProductos = ItemList({productList})
                setProductos(listaProductos)           
            })
        }       
        
    }, [categorias])
    return (
        <> 
            <div className="flex flex-wrap justify-center w-full m-4 my-4">
                {productos}
            </div>           
        </>
    );
}

export default ItemListContainer;
