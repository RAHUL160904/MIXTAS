import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './PAGES/Home';
import About from './PAGES/About';
import Contact from './PAGES/Contact'; 
import Shop from './PAGES/Shop';
import FAQ from './PAGES/FAQ';
import Product from './PAGES/Product';
import Blog from './PAGES/Blog';
import Error from './PAGES/Error';
import Wishlist from './PAGES/Wishlist';
import Admin from './PAGES/Admin';


const App = () => {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Home />} />           
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} /> 
        <Route path='/shop' element={<Shop />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/wishlist/' element={<Wishlist/>}/>
        <Route path='/admin/' element={<Admin/>}/>
        <Route path='*' element={<Error />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App;
