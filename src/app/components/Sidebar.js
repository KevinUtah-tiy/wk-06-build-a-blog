"use strict";

import React from 'react';

import MonthList from './MonthList';
import TagList from './TagList';

import sidebar from './sidebar.sass';

export default class Sidebar extends React.Component {
  render() {
    return (
        <div className='sidebar col-sm-3'>
          <h2>Sidebar</h2>
          <h3>Month</h3>
          <MonthList data={this.props.data}/>
          <h3>Tags</h3>
          <TagList data={this.props.data}/>
          <hr />


        </div>
      );
  }
}
