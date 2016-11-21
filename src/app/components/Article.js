"use strict";

import React from "react";

import article from './article.sass';

export default class Article extends React.Component {
  render() {
    return (
      <div className = 'article col-sm-9'>
        {this.props.data.map(function(paragraph, idx) {
          return <p key={idx}>{paragraph}<br /></p>
        })}
      </div>
    );
  }
}
