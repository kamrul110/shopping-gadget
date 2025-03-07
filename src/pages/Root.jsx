
import { Outlet} from 'react-router-dom';
import Footer from '../components/Footer';
import MainNavBar from '../components/MainNavBar';
import { useState } from 'react';

const Root = () => {

    let [cartItems, setCartItems] = useState([]);
    return (
        <div>
           
            <MainNavBar cartCount={cartItems.length} ></MainNavBar>
            <Outlet context={{cartItems,setCartItems}}></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;