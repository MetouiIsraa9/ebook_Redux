import React, { Component } from 'react'
import { CardGroup, Button, Col, Row, Form, FormGroup } from 'react-bootstrap';

import { connect } from 'react-redux';
import { fetchBooks } from '../actions/books/book.actions';
import ListBook from '../components/ListBooks'


class ListBooks extends Component {
    constructor(props) {
        super(props)


    }

    componentWillMount() {
        this.props.onFech();


    }
    render() {
        return (
            <div>
                <CardGroup style={{ marginLeft: 50, marginTop: 30, marginRight: 50 }}>
                     {this.props.books.map(book => {
                                            return (
                                                <ListBook
                                                     book={book}
                                                />
                                            )
                                        })
                }
                </CardGroup>
           </div>

        )
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToPropes)(ListBooks)
