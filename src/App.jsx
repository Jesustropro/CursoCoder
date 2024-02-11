import React from 'react';
import Navbar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Error from './components/Error';
import ComponenteFuncional from './components/ComponenteFuncional';
import InputSinVocales from './components/InputSinVocales';
import Message from './components/Message';
import Abstract from './components/Abstract';

const App = () => {

  return (
    <>

    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

        <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

        <Route path='*' element={<Error/>}/>
        
      </Routes>

      <Footer/>
      
    </BrowserRouter>






    {/* Clase 10 */}

    {/* <ComponenteFuncional/> */}

    {/* <InputSinVocales/> */}

    {/* <Abstract/> */}

    </>
  );
};

export default App;