import React from "react";
import "./Navbar.css";
import main_logo from "../../assets/main_logo.jpg";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../Utils/Redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.user.item);
  const cart = useSelector((state) => state.cart.item)
  return (
    <div className="navbar">
      <div className="logoDiv">
        <Link to="/">
          <img src={main_logo} alt="" />
        </Link>
      </div>
      <div className="rightDiv">
        <span className="rightDivSpan">
          <Link to="/">Home</Link>
        </span>
        <span className="rightDivSpan">
          <Link to="/about">About</Link>
        </span>
        <span className="rightDivSpan">
          <Link to="/cart">Cart- {cart.length}</Link>
        </span>
        <span className="rightDivSpan">
          {isLogin ? (
            <>
            <Link to='/'>

              <span onClick={() => dispatch(userLogout())}>Logout</span> <BiLogOut />
            </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                Login <BiLogIn />
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
