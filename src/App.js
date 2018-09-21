import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css'
import SearchPage from './SearchPage';
import MainPage from './MainPage';


class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
  console.log(this.state.books);
}

moveShelf = (book, shelf) => {
  BooksAPI.update(book, shelf);
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <MainPage
          books = {this.state.books}
          moveShelf = {this.moveShelf}
        />
        )}/>
        <Route path='/search' render={() => (
        <SearchPage
          moveShelf = {this.moveShelf}
          books = {this.state.books}
        />
      )}/>

      </div>
    )
  }
}

export default BooksApp
