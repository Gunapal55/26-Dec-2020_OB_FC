import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Contentes from './components/Contentes';
import Products from '../src/components/Products';
import { render } from 'react-dom/cjs/react-dom.production.min';
import Bundle from '../src/components/Bundle';
import HomeNavbar from '../src/components/HomeNavbar';

import Pro from './components/Pro';
import ListPro from './components/ListPro';
import AddProduct from './components/AddProduct';

function App() {

  return (
   <div>
    {/* <Pro /> */}
  {/* <Menu/> */}
  <AddProduct/>
  {/* <Products/> */}
 {/* <ListPro/> */}
   </div>
  );
 
}

export default App;
