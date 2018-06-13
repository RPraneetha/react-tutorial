import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Book from './Book/Book'

class App extends Component {
    state = {
        books: [
            { name: "Harry Potter", author:"J. K. Rowling"},
            { name: "ASOIAF", author:"G. R. R. Martin"},
            { name: "The Temple", author:"Matthew Riley"}
        ]
    }

    switchBookHandler = () => {
        this.setState({books: [
            { name: "LOTR", author:"J. K. Rowling"},
            { name: "ASOIAF", author:"G. R. R. Martin"},
            { name: "The Temple", author:"Matthew Riley"}
        ]
        })
    }


    render() {
        return (
            <div className="App">
            <h1>Why does every tutorial start with a Hello World o.O </h1>
            <button onClick={this.switchBookHandler}>Switch book</button>
            <Book name={this.state.books[0].name} author={this.state.books[0].author} />
            <p>Yo</p>


            </div>
            // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'YOLO!'))
        );
    }
}

export default App;
