import React, { Component } from 'react'
//import the components we will need
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

class PatronList extends Component {
  //define what this component needs to render
  state = {
    patrons: [],
  }
  // mark a patron incomplete by calling inactivate method here
  inactivatePatron = id => {
    PatronManager.inactivate(id)
    .then(() => {
      // return all of the patrons which are active
      PatronManager.getAll()
      .then((newPatrons) => {
        this.setState({
          patrons: newPatrons
        })
      })
    })
  }
  componentDidMount() {
    console.log("PATRON LIST: ComponentDidMount");
    //getAll from BookManager and hang on to that data; put it in state
    PatronManager.getAll()
      .then((patrons) => {
        this.setState({
          patrons: patrons
        })
      })
  }
  // render the books and return the keys to be used in the book card
  render() {
    console.log("PatronList: Render");

    return (
      <div className="container-cards">
        {this.state.patrons.map(patron =>
          <PatronCard key={patron.id} inactivatePatron= {this.inactivatePatron} patron={patron} />
        )}
      </div>
    )
  }
}

export default PatronList