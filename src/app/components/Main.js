'use strict';

import React from 'react';
import blogData from'./blog-data.json';

export default class Main extends React.Component {
  render () {
    console.log("blogData: ", blogData[0].title);
    console.log("blogData: ", blogData.length);
    return(
      <section>
        <h2>Main section</h2>
        <h3>(blogData[0].title)</h3>
        <h4>blogData[0].article</h4>
        <h3>(blogData[1].title)</h3>
        <h4>blogData[1].article</h4>
      </section>
    );
  }
}
