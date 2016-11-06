'use strict';

import React from 'react';

import Article from './Article';
import main from './main.sass';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
  render () {
    return(
      <div className="mainDiv">
        <h2>Main section</h2>
        <h3>
          {this.props.data[0].title}
        </h3>
        <p>
          {this.props.data[0].posted.month} {this.props.data[0].posted.day} {this.props.data[0].posted.year}<br />
      </p>
      <ArticleContent data={this.props.data[0].article} />

        <h3>
          {this.props.data[1].title}
        </h3>
        <p>
          {this.props.data[1].posted.month} {this.props.data[1].posted.day} {this.props.data[1].posted.year}<br />
      </p>
      <ArticleContent data={this.props.data[1].article} />

        <h3>
          {this.props.data[2].title}
        </h3>
        <p>
          {this.props.data[2].posted.month} {this.props.data[2].posted.day} {this.props.data[2].posted.year}<br />
      </p>
      <ArticleContent data={this.props.data[2].article} />

        <Article />
        <Sidebar />
      </div>

    );
  }
}
