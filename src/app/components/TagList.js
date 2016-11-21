"use strict";

import React from 'react';

export default class TagList extends React.Component {
  render() {
    let tagArray=[];
    for (let i = 0; i < this.props.data.length; i++) {
      for (let j = 0; j < this.props.data[i].tags.length; j++) {
        if (tagArray.includes(this.props.data[i].tags[j]) == false) {
          tagArray.push(this.props.data[i].tags[j]);
        }
      }
    }
    return(
      <ul className="tagList">
        {tagArray.map(function(tag, index)  {
            return (
              <li key={index}> {tag} </li>
            )
          })}
      </ul>
    )
  }
}
