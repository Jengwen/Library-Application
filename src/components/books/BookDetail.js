import React, { Component } from 'react';
import BookManager from '../../modules/BookManager';
import './books.css';

class BookDetail extends Component {

    state = {
title: "",
author: "",
ISBN: "",
coverPhoto:"",
    }

componentDidMount (){
    console.log("Book Detail: component Did Mount");
    // get one book from the json with get fetch call
    BookManager.get(this.props.bookId)
    .then((book)=> {
        // set state of book object returned from the json
        this.setState({
           title: book.title,
           author: book.author,
           ISBN: book.ISBN,
           coverPhoto: book.coverPhoto
        });
    });
}
render () {
    // create card with individual book information displayed
    return (
        <div className="card">
        <div className="card-content">
          <h3>Title: <span className="card-bookTitle">{this.state.title}</span></h3>
          <picture>
              <img alt="gone with the wind" src= {this.state.coverPhoto}/>
          </picture>
          <p>Author: {this.state.author}</p>
<p>ISBN: {this.state.ISBN}</p>
        </div>
      </div>
    );
}
}

export default BookDetail;