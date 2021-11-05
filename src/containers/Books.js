import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from '../components/Book';
import { Button , Modal} from 'react-bootstrap';
import { deleteBook } from '../actions/books/book.actions';
import { fetchBooks } from '../actions/books/book.actions';
import { history } from '../index';

import { Card, FormControl, InputGroup } from 'react-bootstrap';


class Books extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }

    }

    componentWillMount() {
        this.props.onFech();
    }

    handelEdit(book) {
        history.push({
            pathname: "/edit/" + book._id,
            state: {
                book: book
            }
        })
    }
    handelView(book) {
        history.push({
            pathname: "/view/" + book._id,
            state: {
                book: book
            }
        })
    }
    searchChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {

        if (this.props.isLoading) {
            return (
                <p>Loging.....</p>
            )
        } else if (this.props.error) {
            return (
                <div className="alert alert-danger" role="alert">
                    {this.props.error.message}
                </div>)
        } else {
            return (
                <div>
                    <div class="home-content">
                        <div class="book-boxs">
                            <div class="ticket_table">
                                <div class="table_book_info">
                                    <h5 class="card-title">Book Management</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Add - Update - Delete - select </h6>
                                </div>
                                <div class="add_book_button">
                                    <Link to="/createBook" className="btn btn-sm btn-success"><i class="fa fa-plus-square"></i></Link>
                                </div>
                            </div>

                            <Card>
                                <Card.Header>
                                    <div style={{ "float": "left" }}>
                                        <i class="fa fa-list"></i> Book List
                                    </div>
                                    <div style={{ "float": "right" }}>

                                        <InputGroup size="sm">
                                            <FormControl
                                                placeholder="Search"
                                                name="search"
                                                value={this.search}
                                                onChange={this.searchChange}
                                                autoComplete="off"
                                                className={"info-border bg-white text-dark"}
                                            />
                                        </InputGroup>

                                    </div>
                                </Card.Header>
                                <Card.Body>

                                    <table class="table">
                                        <thead>
                                            <tr>

                                                <th scope="col">Title</th>
                                                <th scope="col">Author</th>
                                                <th scope="col">Stock</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.books
                                                    .filter(book => {
                                                        return book.title.indexOf(this.state.search) >= 0
                                                    })
                                                    .map(book => {
                                                        return (
                                                            <Book
                                                                book={book}
                                                                onEdit={this.handelEdit.bind(this)}
                                                                onDelete={this.props.onDelete}
                                                                onView={this.handelView.bind(this)}
                                                            />
                                                        )
                                                    })
                                            }
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                </div>
            )

        }

    }
}

const mapStateToProps = (state) => {
    return {
        books: state.booksData.books || [],
        isLoading: state.booksData.isLoading,
        error: state.booksData.error || null,

        user: state.authData.user,
        isLoggedIn: state.authData.isLoggedIn
    };

};


const mapDispatchToPropes = (dispetch) => {
    return {
        onFech: () => {
            dispetch(fetchBooks());
        },

        onDelete: (id) => {
            dispetch(deleteBook(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPropes)(Books)