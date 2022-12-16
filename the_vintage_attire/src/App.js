import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar/Navbar';

import Dashboard from './Pages/AdminPages/Dashboard';

import SingleProduct from './Pages/single_product/SingleProduct';
import Checkout from './Pages/checkout_page/Dummy';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import { Box } from '@chakra-ui/react';
import Cart  from './Pages/cartPage/Cart'
import CheckoutPage from './Pages/checkout_page/CheckoutPage';


function App() {
  return (
    <div >
        <Dashboard />

        {/* <SingleProduct /> */}
     <Cart />
     {/* <CheckoutPage /> */}
    </div>
  );
}

export default App;
