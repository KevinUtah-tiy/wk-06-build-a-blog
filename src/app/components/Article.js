"use strict";

import React from "react";
import article from './article.sass';

export default class Article extends React.Component {
  render() {
    // const { title } = this.props;

    return (
      <div className = 'container'>
        <div className = 'column'>
        <div className="col-md-12">
          <h4>Title:  Thoughts on Cats' Ipsum</h4>
          <h5>Posted:  Date</h5>
          <p>Article:  Tempora est modi adipisci. Adipisicing. Illo. Pariatur illo but consequat eu yet sed ut but magnam. Aliqua nemo quisquam cupidatat and vel culpa. Numquam inventore ipsa. Duis quia for quisquam laboriosam elit so ab velit. Pariatur. Ex in yet perspiciatis. Vel aliquid. Iure ullam or cillum and exercitationem but iure. Exercitation. Consequatur accusantium irure ea. Dolorem vel, aliquam or dolores veritatis. Ipsam nesciunt pariatur, deserunt yet nequeporro or commodo. Dicta ut, irure. Ipsa minima but velit duis but autem id aliquid. Tempora consectetur.</p>
          <p>tag:</p>
        </div>

        <div className="col-md-12">
          <h4>Title: Thoughts on Swine Ipsum</h4>
            <h5>Posted:  </h5>
            <p>Article:  Bacon ipsum dolor amet hamburger kielbasa meatloaf, beef sirloin tail tri-tip ham hock short loin swine pork belly ham burgdoggen pig. Picanha pork turkey turducken shankle strip steak ham hock. Pancetta doner shoulder fatback. Jerky filet mignon cow, jowl pastrami sausage alcatra meatball. Jerky tenderloin cow short loin alcatra corned beef drumstick tail salami andouille pork loin. Beef filet mignon brisket tenderloin. Short loin prosciutto shank tri-tip burgdoggen beef ribs.</p>
        </div>

        <div className="col-md-12">
          <h4>Title:  Thoughts on Cupcake Ipsum</h4>
          <h5>Posted:  </h5>
          <p>Article:  Cupcake ipsum dolor sit amet tiramisu icing cheesecake cake. Jujubes bonbon powder cupcake caramels apple pie chocolate bar. Macaroon sweet cotton candy sugar plum. Oat cake jelly cupcake dragée. Muffin pastry dessert cookie chupa chups. Lemon drops cheesecake sugar plum.</p>
          </div>

        </div>
      </div>


    );
  }
}


// [{
//         "title" : "Thoughts on Cats' Ipsum",
//         "posted" : "2016-10-30Z08:30",
//         "article" : "Tempora est modi adipisci. Adipisicing. Illo. Pariatur illo but consequat eu yet sed ut but magnam. Aliqua nemo quisquam cupidatat and vel culpa. Numquam inventore ipsa. Duis quia for quisquam laboriosam elit so ab velit. Pariatur. Ex in yet perspiciatis. Vel aliquid. Iure ullam or cillum and exercitationem but iure. Exercitation. Consequatur accusantium irure ea. Dolorem vel, aliquam or dolores veritatis. Ipsam nesciunt pariatur, deserunt yet nequeporro or commodo. Dicta ut, irure. Ipsa minima but velit duis but autem id aliquid. Tempora consectetur.",
//         "tags" : ["cats", "kittens", "ipsum"]
//   },
//
//   {
//         "title" : "Thoughts on Swine Ipsum",
//         "posted" : "2016-10-30Z09:30",
//         "article" : "Bacon ipsum dolor amet hamburger kielbasa meatloaf, beef sirloin tail tri-tip ham hock short loin swine pork belly ham burgdoggen pig. Picanha pork turkey turducken shankle strip steak ham hock. Pancetta doner shoulder fatback. Jerky filet mignon cow, jowl pastrami sausage alcatra meatball. Jerky tenderloin cow short loin alcatra corned beef drumstick tail salami andouille pork loin. Beef filet mignon brisket tenderloin. Short loin prosciutto shank tri-tip burgdoggen beef ribs.",
//         "tags" : ["bacon", "pork", "carnivore"]
//   },
//
//   {
//         "title" : "Thoughts on Cupcake Ipsum",
//         "posted" : "2016-10-30Z09:30",
//         "article" : "Cupcake ipsum dolor sit amet tiramisu icing cheesecake cake. Jujubes bonbon powder cupcake caramels apple pie chocolate bar. Macaroon sweet cotton candy sugar plum. Oat cake jelly cupcake dragée. Muffin pastry dessert cookie chupa chups. Lemon drops cheesecake sugar plum.",
//         "tags" : ["", "", ""]
//   }
// ]
