"use strict";

import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Sidebar from'./Sidebar';

import app from './app.sass';

import blogData from './blogposts.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: blogData
    }
  }
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <div className="content">
          <Sidebar data={this.state.data} />
          <Main data = {this.state.data} />
          </div>
        
        <Footer />
      </div>
    );
  }
}
