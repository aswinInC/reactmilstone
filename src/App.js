import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Products } from "./milestone/fetchproduct";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Description } from "./milestone/productdetails";

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Products/>}/>
<Route path="/productdetails/:id" element={<Description/>}/>
     
        
        </Routes>
      </BrowserRouter>
    
      </>
  );
}

export default App;
