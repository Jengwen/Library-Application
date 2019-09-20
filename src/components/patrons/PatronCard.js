import React, { Component } from 'react';

class PatronCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-patronName">{this.props.patron.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default PatronCard;