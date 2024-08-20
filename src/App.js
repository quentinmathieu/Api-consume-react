import ProductListComponent from './components/ProductListComponent';
import ProductComponent from './components/ProductComponent';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';



function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductListComponent/>}/>
        <Route path="/:id" element={<ProductComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;