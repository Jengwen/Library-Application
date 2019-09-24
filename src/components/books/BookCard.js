import React, { Component } from 'react';
import {Link} from "react-router-dom";

class BookCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Title: <span className="card-bookTitle">{this.props.book.title}</span></h3>
          <p>Author: {this.props.book.author}</p>
          <Link to={`/books/${this.props.book.id}`}><button>Details</button></Link>
        </div>
      </div>
    );
  }
}

export default BookCard;