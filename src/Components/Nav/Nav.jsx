import { useState } from "react";
import Link from "../Links/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const Nav = () => {
    let [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];

    return (
        <div>
            <div className=" md:hidden text-2xl" onClick={()=> setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex duration-1000 gap-5 absolute md:static ${open? 'top-18':'-top-60'}`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </div>
    );
};

export default Nav;