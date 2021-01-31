import React from 'react';
import {Link} from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
// import Button from '../Button';

function Header() {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              <button>Cart</button>
            </Link>
          </li>
          <li>
            <Link to="/login">
            <button>login</button>
            </Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
}

export default Header;
