import React, { Component } from "react";
//import the components we will need
import PatronCard from "./PatronCard";
import PatronManager from "../../modules/PatronManager";
import BookManager from "../../modules/BookManager";

class PatronList extends Component {
  //define what this component needs to render
  state = {
    patrons: [],
    books: []
  };
  // mark a patron incomplete by calling inactivate method here
  inactivatePatron = id => {
    PatronManager.inactivate(id).then(() => {
      // return all of the patrons which are active
      PatronManager.getAll().then(newPatrons => {
        this.setState({
          patrons: newPatrons
        });
      });
    });
  };
  componentDidMount() {
    console.log("PATRON LIST: ComponentDidMount");
    //getAll from patronManager and hang on to that data; put it in state
    PatronManager.getPatronBooks().then(patrons => {
      console.log(patrons);
      const booksArray = []
      patrons.forEach(eachPatron => {
        eachPatron.patronBooks.forEach(singleBookId => {
          BookManager.get(singleBookId.bookId).then(singleBook => {
booksArray.push(singleBook)
        })
            this.setState({
          patrons: patrons,
          books: booksArray
            })
        });
      });
    });
  }
  // render the books and return the keys to be used in the book card
  render() {
    console.log("PatronList: Render");

    return (
      <div className="container-cards">
        {this.state.patrons.map(patron =>
          // return only active patrons
          !!patron.active ? (
            <PatronCard
              key={patron.id}
              inactivatePatron={this.inactivatePatron}
              patron={patron}
            />
          ) : null
        )}
      </div>
    );
  }
}

export default PatronList;
