import Item from "../Item/Item";

const ItemList = ({productList}) => {
    return (
        <>
           {productList.map(productos => <Item key={productos.id} producto={productos}/>)} 
        </>
    );
}

export default ItemList;
