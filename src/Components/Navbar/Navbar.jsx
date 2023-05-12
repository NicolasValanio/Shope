import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

function Navbar(){
    return(
        <nav className='flex justify-between items-center fixed z-10 w-full'>
            {/* Navegacion izquierda */}
            <ul className='flex items-center'>
                <li>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clectronics'>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* Navegacion Derecha */}
            <ul className='flex items-center '>
                <li>
                    Mymail@gmail.com
                </li>
                <li>
                    <NavLink to='/MyOrders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/MyAccount'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/SignIn'>
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex'>
                        <FaShoppingCart/> 0 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar