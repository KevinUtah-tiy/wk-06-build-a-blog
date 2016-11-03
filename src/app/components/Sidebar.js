"use strict";

import React from 'react';
import sidebar from './sidebar.sass';

export default class Sidebar extends React.Component {
  render() {
    return (
        <aside className='sidebar col-sm-3'>
          <p>Sidebar!</p>
        </aside>
      );
  }
}
