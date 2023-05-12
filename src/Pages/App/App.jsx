import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../Home/Home'
import MyAccount from '../MyAccount/MyAccount'
import MyOrder from '../MyOrder/MyOrder'
import MyOrders from '../MyOrders/MyOrders'
import NotFound from '../NotFound/NotFound'
import SignIn from '../SignIn/SignIn'
import '../../App.css'



function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/MyAccount' element={<MyAccount />}/>
            <Route path='/MyOrder' element={<MyOrder />}/>
            <Route path='/MyOrders' element={<MyOrders />}/>
            <Route path='/SignIn' element={<SignIn />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default App
