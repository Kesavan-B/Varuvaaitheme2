import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
 
import AbtMenu from './components/Aboutmenu/AbtMenu';
import Contactsus from './components/contact/Contactsus';
import ShopCrd from './components/Shopping/ShopCrd';
import ParamsCrds from './components/Productcrd/ParamsCrds';
import Main from './Main';
 

function App() {
  
  return (
<div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/abt' element={<AbtMenu/>}/>
  <Route path='/cont' element={<Contactsus/>}/>
  <Route path='/shop' element={<ShopCrd/>}/>
  <Route path='/parms/:id' element={<ParamsCrds/>}/>
</Routes>
</BrowserRouter>

</div>
  );
}

export default App;
