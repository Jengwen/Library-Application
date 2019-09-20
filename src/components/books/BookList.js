import React, { Component } from 'react'
    //import the components we will need
    import BookCard from './BookCard'
    import BookManager from '../../modules/BookManager'

    class BookList extends Component {
        //define what this component needs to render
        state = {
            books: [],
        }

    componentDidMount(){
        console.log("BOOK LIST: ComponentDidMount");
        //getAll from BookManager and hang on to that data; put it in state
        BookManager.getAll()
        .then((books) => {
            this.setState({
                books: books
            })
        })
    }
// render the books and return the keys to be used in the book card
    render(){
        console.log("BookList: Render");

        return(
          <div className="container-cards">
            {this.state.books.map(book =>
              <BookCard key={book.id} book={book} />
            )}
          </div>
        )
      }
}

export default BookList