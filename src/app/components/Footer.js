'use strict';

import React from 'react';

import footer from './footer.sass';

export default class Footer extends React.Component {
  render () {
    return(
      <div>
      <footer className='footer'>
        <p>Kevin J Black</p>
        <p>The Iron Yard</p>
        <p>Footer</p>
      </footer>
    </div>
    );
  }
}
