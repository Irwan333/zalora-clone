import React from 'react';

function Navbar(props) {
  return (
    <div className="content" id="navbar">
      <div className="nav-left">
        <ul>
          <li className="brand"><h1>Z a B a b a</h1></li>
          <li>WANITA</li>
          <li>PRIA</li>
          <li>ANAK-ANAK<span className="new">new</span></li>
        </ul>
      </div>
      <div className="nav-right">
        <ul>
          <li id="search">
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            </form>
          </li>
          <li>
            <i className="material-icons">face</i>
          </li>
          <li>
            <i className="material-icons">favorite_border</i>
          </li>
          <li>
            <i className="material-icons">work_outline</i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
