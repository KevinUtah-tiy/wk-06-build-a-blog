"use strict";

import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import app from './app.sass';
import Sidebar from'./Sidebar';

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
