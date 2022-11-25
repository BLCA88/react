import './App.css';
import Navbar from './Navbar/Nav';
import ItemListContainer from './ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <div className='relative top-10'>
        <ItemListContainer greeting={"Bienvenidos"}/>
      </div>
      
    </>
  );
}

export default App;
