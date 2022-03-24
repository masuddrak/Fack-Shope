import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState([]);
  const addToCard=(product)=>{
    const newProduct=[...count,product]
    setCount(newProduct)
  }
  return (
    <div className='main'>
        <Header count={count}></Header>
        <h1 className='text-center my-5 text-white'>Dsisplay All Product</h1>
        <Products addToCard={addToCard}></Products>
    </div>
  );
}

export default App;
