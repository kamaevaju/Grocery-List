import './App.css';
import image from './shopping.webp';
import man from './man.webp';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } width="200px" alt='shop' />
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className='container'>
      <img src={man} width='200px' alt='man' />
      </div>      
    </div>
  );
}

export default App;
