import { NavLink } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'

function Navbar(){
    const activeStyle={
        textDecoration: 'underline'
    }
    return(
        <nav className=' flex justify-between items-center fixed z-10 w-full py-5 px-8 text-5m font-light h-fit top-0 bg-emerald-200	'>
            {/* Navegacion izquierda */}
            <ul className='flex items-center gap-3'>
                <li className='text-3xl font-bold text-green-500 size-5'>
                    <NavLink to='/' >
                        Shope
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clectronics' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* Navegacion Derecha */}
            <ul className='flex items-center gap-3'>
                <li className='font-semibold'>
                    Mymail@gmail.com
                </li>
                <li>
                    <NavLink to='/MyOrders' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/MyAccount' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/SignIn' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        SignIn
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex gap-1' to='/MyOrder' style={({isActive})=>
                        isActive ? activeStyle : undefined
                    }>
                        <FaShoppingCart/> 0 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar