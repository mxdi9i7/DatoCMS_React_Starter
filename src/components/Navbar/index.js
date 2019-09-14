import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default function Navbar() {
  return (
    <div className='nav-bar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/collection'>Collection</Link>
        </li>
        <li>
          <Link to='/item'>Item</Link>
        </li>
      </ul>
    </div>
  );
}
