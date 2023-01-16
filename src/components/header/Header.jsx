import React from 'react';
import { FiMenu } from 'react-icons/fi';
import '../../styles/header.scss';
import data from '../../data';

const Header = () => (
  <nav>
    <div className="container nav-container">
      <a href="index.html" className="nav-logo">
        <FiMenu />
      </a>
      <ul className="nav-menu">
        {data.map((item) => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Header;
