"use strict";

import React from 'react';
import app from './app.sass';
import Header from './Header';
import Main from './Main';
import Sidebar from'./Sidebar';
import Footer from './Footer';

export default class App extends React.Component {
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
