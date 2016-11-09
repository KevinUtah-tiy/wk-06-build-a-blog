"use strict";

import React from 'react';

import sidebar from './sidebar.sass';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div className='sidebar col-sm-3'>
          <h2>Sidebar</h2>
          <h3>Month</h3>
          <ul>
            <li>August</li>
            <li>September</li>
            <li>October</li>
          </ul>
          <br />
          <ul>
            <li>November</li>
            <li>December</li>
            <li>January</li>
          </ul>

        </div>
      );
  }
}
