"use strict";

import React from 'react';

export default class MonthList extends React.Component {
  render() {
    let monthArray=[];
    for (let i = 0; i < this.props.data.length; i++) {
      let dateSplit=this.props.data[i].date.split(" ");
      if (monthArray.includes(dateSplit[0]) == false) {
        monthArray.push(dateSplit[0]);
      }
    }
    return(
      <ul className="monthList">
        {monthArray.map(function(month, index)  {
            return (
              <li key={index}> {month} </li>
            )
          })}
      </ul>
    )
  }
}
