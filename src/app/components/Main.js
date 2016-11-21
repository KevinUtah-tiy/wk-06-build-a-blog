'use strict';

import React from 'react';

import Article from './Article';
import Sidebar from './Sidebar';

import main from './main.sass';

export default class Main extends React.Component {
  render () {
    console.log("data:", this.props.data);
    return(
      <div className="mainDiv">
        <h2>Main Section</h2>

        {this.props.data.map(function(c,i,a) {
          return(
             <div key={i} className="postDiv">
               <h3>{a[i].title}</h3>
               <p>{a[i].date}<br /></p>
               <Article data={a[i].article} />
             </div>
           )
        })}

      </div>

    );
  }
}
