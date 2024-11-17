import { Link, NavLink } from "react-router-dom";
import user from "../assets/user.png"


const Navbar = () => {

    return (
        <div className="flex items-center justify-between w-11/12 py-8">
            <div></div>
            <div>
                <ul className="space-x-4">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="carrer">Carrer</NavLink>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <img src={user} alt="" />
                <Link to="login" className="text-white font-bold bg-black px-4 py-2">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;