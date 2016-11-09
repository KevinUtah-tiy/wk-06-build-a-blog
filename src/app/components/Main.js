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
        <h2>Main section</h2>
        <h3>
          {this.props.data[0].title}
        </h3>
        <p>
          {this.props.data[0].date} <br />
      </p>
      <Article data={this.props.data[0].article} />

        <h3>
          {this.props.data[1].title}
        </h3>
        <p>
          {this.props.data[1].date}  <br />
      </p>
      <Article data={this.props.data[1].article} />

        <h3>
          {this.props.data[2].title}
        </h3>
        <p>
          {this.props.data[2].date} <br />
      </p>
      <Article data={this.props.data[2].article} />


      </div>

    );
  }
}
