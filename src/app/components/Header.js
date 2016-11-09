'use strict';

import React from 'react';

import header from './header.sass';

export default class Header extends React.Component {
  render () {
    return(
      <div className="header">
        <div className="row">
          <h1 className="col-sm-6">Build A Blog</h1>

          <ul className="navbar col-sm-6">
             <li><a href="#">Home</a></li>
             <li><a href="#">News</a></li>
             <li><a href="#">Contact</a></li>
             <li><a href="#">About</a></li>
          </ul>

        </div>
     </div>
    );
  }
}
