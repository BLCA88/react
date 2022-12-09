import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



//componentes
import Navbar from './Navbar/Nav'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer'
import Cart from './Cart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/product/:id' element= {<ItemDetailContainer />}/>
          <Route path='/categorias/:categorias' element= {<ItemListContainer />} />
          <Route path='/ofertas/:sale' element= {<ItemListContainer />} />
          <Route path='carrito/finalizar-compra' element={<Cart />} />          
        </Routes>        
      </BrowserRouter>
    </>
  );
}

export default App;
