import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/Order/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../Hooks/useCart";




const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    console.log('cart', cart);
    const [carts,setCarts]=useState([])
    const [cartData, setCartData]=useState(false)
    
    const url = `http://localhost:5000/carts/${user?.email}`
    // console.log('urls', url, user.email );
    useEffect(()=>{
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[url])

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to={
            '/dashboard/cart'
        }>
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{carts?.length}</div>
        </Link></li>


    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className="navbar max-w-screen-xl mx-auto fixed z-10 bg-opacity-30  bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <h2 className="font-extrabold text-4xl uppercase">
                        <span className="text-yellow-500">B</span>istro Aria
                    </h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <Link to='/login'> <button className="btn">Login</button> </Link> */}
                    {
                        user ? <>
                            <span className="text-green-500">{user?.email}</span>
                            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                        </> : <>  <Link to='/login'> <button className="btn">Login</button> </Link></>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;