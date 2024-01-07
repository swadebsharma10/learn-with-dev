import { useContext } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Header = () => {

  const {user, logOutUser} = useContext(AuthContext);

  const handleLogOut =()=>{
    logOutUser()
    .then(()=>{
      alert('Logout Successfully')
    })
    .catch(error =>{
      console.log(error.message)
    })
  }

    const menus = <>
        <li><NavLink
        to="/"
        className={({ isActive }) => isActive ? "text-orange-500" : ""
        }
      >
        Home
      </NavLink></li>
        <li><NavLink
        to="/course"
        className={({ isActive }) => isActive ? "text-orange-500" : ""
        }
      >
        Courses
      </NavLink></li>
        <li><NavLink
        to="/faq"
        className={({ isActive }) => isActive ? "text-orange-500" : ""
        }
      >
        FAQ
      </NavLink></li>
        <li><NavLink
        to="/blogs"
        className={({ isActive }) => isActive ? "text-orange-500" : ""
        }
      >
       Blogs
      </NavLink></li>
        <li><NavLink
        to="/login"
        className={({ isActive }) => isActive ? "text-orange-500" : ""
        }
      >
       Login
      </NavLink></li>
    
    </>


    return (
        <div>
        <div className="navbar bg-primary text-primary-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-primary-content rounded-box w-52">
              {menus}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl font-bold">Learn With Dev</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menus}
          </ul>
        </div>
        <div className="navbar-end">
        {user ? <button onClick={handleLogOut} className="btn btn-secondary btn-sm">
        LogOut</button> : <Link to='/login'><button className="btn btn-secondary btn-sm">
        <IoPersonAdd />
        Login</button></Link>}

       { user && <div className="avatar ml-3">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img title={user.displayName} src={user.photoURL} alt="User profile" />
        </div>
       </div>}

        </div>
      </div>
        </div>
    );
};

export default Header;