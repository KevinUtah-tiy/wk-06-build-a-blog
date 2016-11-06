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
