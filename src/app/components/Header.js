'use strict';

import React from 'react';
import header from './header.sass';

export default class Header extends React.Component {
  render () {
    return(
      <div className="container">
        <div className="row">
          <h1>Build A Blog</h1>

          <ul>
         <li>Home</li>
         <li>News</li>
         <li>Contact</li>
         <li>About</li>
          </ul>
        </div>
     </div>
    );
  }
}
