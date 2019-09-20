import React, { Component } from 'react';

class BookCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Title: <span className="card-bookTitle">{this.props.book.title}</span></h3>
          <p>Author: {this.props.book.author}</p>
        </div>
      </div>
    );
  }
}

export default BookCard;