
import React from "react";
import { Link  } from "react-router-dom";

const Navbar =()=> {
    return (
      <div>
          <Link to="/">Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/things'>Things</Link>
          <Link to='/landon'>Landon</Link>
      </div>
    );
}

export default Navbar;