'use strict';

import React from 'react';
import Article from './Article';
import main from './main.sass';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
  render () {
    return(
      <div className="mainDiv">
        <Article />
        <Sidebar />
      </div>

    );
  }
}
