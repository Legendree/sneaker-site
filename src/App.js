import React from 'react';

import './styles/main.css';
import './styles/header.css';
import './styles/landing.css';

export const App = () => {
  return (
    <div className='main_container'>
      <div className='header_container'>
        <span>Sneaks</span>
        <ul className='header_menu'>
          <li className='menu_item'>
            <span>New Releases</span>
            <div className='item_tooltip'>
              <div className='tp_main'>
                <span className='tooltip_main_item'>Nike</span>
                <span className='tooltip_main_category'>Popular</span>
              </div>
              <span className='tooltip_item'>// Air</span>
              <span className='tooltip_item'>// Jordan</span>
              <span className='tooltip_item'>// React</span>
              <span className='tooltip_item'>// SB</span>
              <span className='tooltip_item'>// Cortez</span>
              <span className='tooltip_item'>// Zoom</span>
              <span className='tooltip_item'>// Element</span>
              <div className='tp_main'>
                <span className='tooltip_main_item'>Adidas</span>
                <span className='tooltip_main_category'>Popular</span>
              </div>
              <span className='tooltip_item'>// Yeezy</span>
              <span className='tooltip_item'>// Ultra Boost</span>
              <span className='tooltip_item'>// Superstar</span>
              <span className='tooltip_item'>// Samba</span>
              <span className='tooltip_item'>// NMD</span>
              <span className='tooltip_item'>// Superfast</span>
              <span className='tooltip_item'>// Stan Smith</span>
            </div>
          </li>
          <li className='menu_item'>Men</li>
          <li className='menu_item'>Women</li>
          <li className='menu_item'>Brands</li>
        </ul>
        <div className='menu_cart_icon'>
          <svg viewBox='0 0 511.34 511.34' xmlns='http://www.w3.org/2000/svg'>
            <path d='M490.33 106.67H90.53l-5.95-66.2a21 21 0 00-20.91-19.13H21a21 21 0 100 42h23.47l24.15 269.09c1.72 19.4 12.2 40.44 30.25 54.74C66.32 428.73 96.06 490 149 490c43.94 0 74.94-43.82 59.87-85.33H323.8C308.75 446.13 339.68 490 383.67 490c35.1 0 63.66-28.56 63.66-63.66s-28.56-63.67-63.66-63.67H149.14a39 39 0 01-35.85-23.65l335.6-19.72a21 21 0 0019.15-15.87l42.67-170.67a21.01 21.01 0 00-20.38-26.1zM149 448c-11.95 0-21.67-9.72-21.67-21.66s9.72-21.67 21.67-21.67c11.95 0 21.67 9.72 21.67 21.67S160.95 448 149 448zm234.67 0c-11.95 0-21.67-9.72-21.67-21.66s9.72-21.67 21.67-21.67 21.66 9.72 21.66 21.67S395.61 448 383.67 448zm47.36-169.72l-323.4 19L94.3 148.67h369.14z' />
          </svg>
        </div>
      </div>
      <div className='landing_container'>
        <img className='shoe' src='shoe.png' alt='shote_rpesent' />
        <span className='shoe_title'>AIR MAX 97</span>
      </div>
    </div>
  );
};
