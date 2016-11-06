"use strict";

import React from 'react';

import sidebar from './sidebar.sass';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div className='sidebar col-sm-3'>
          <h2>Sidebar</h2>
          <h3>Blog Entries</h3>
          {this.props.data.map(function(entry.idx) {
            return <p key={idx}></p>{entry.title}<br /><br /></p>
          })}
        </div>
      );
  }
}
