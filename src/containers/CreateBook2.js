import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBook } from '../actions/books/book.actions';
import { Card, Button, Col, Row, Form, FormGroup } from 'react-bootstrap';
import { history } from '../index';


export class CreateBook2 extends Component {
    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.state = {
            _id: null,
            title: '',
            auther: '',
            price: 0,
            qte: 0,
            
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state)
    }

    handleOnValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    onFileChange(e) {
        this.setState({ img: e.target.files[0] })
    }
    handelRest(e) {
        e.preventDefault();
        this.setState({
            title: '',
            auther: '',
            price: 0,
            qte: 0,
            
        })
    }
    handelBack (e){
        history.push("/");
    }

    componentWillMount() {
        const props = this.props;
        if (props.location && props.location.state) {
            const book = props.location.state.book;

            this.setState({
                _id: book._id,
                title: book.title,
                auther: book.auther,
                price: book.price,
                qte: book.qte,
                img:book.img
            })
        }
    }
    render() {
        return (
            <div >                
                <Card  style={{marginLeft:50 , marginTop : 30 , marginRight: 50}}>
                <Card.Title style={{marginLeft:20 , marginTop : 20 ,font:500}}>Edit Book
                  </Card.Title>
                {this.props.error ? <div className="alert alert-danger" role="alert">
                        {this.props.error.message}
                    </div> : '' }
                    <Card.Body>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div class="form-row">
                            <div className="form-group col-md-12">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="title"
                                    placeholder="Title "
                                    onChange={this.handleOnValueChange.bind(this)}
                                    value={this.state.title}
                                />
                            </div>
                            <div class="form-group col-md-12">
                                <input
                                    type="text"
                                    class="form-control"
                                    name="auther"
                                    placeholder="Author"
                                    onChange={this.handleOnValueChange.bind(this)}
                                    value={this.state.auther}
                                />
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-12">
                                <input
                                    type="number"
                                    class="form-control"
                                    name="price"
                                    placeholder="Price"
                                    onChange={this.handleOnValueChange.bind(this)}
                                    value={this.state.price}
                                />
                            </div>
                            <div class="form-group col-md-12">
                                <input
                                    type="number"
                                    class="form-control"
                                    name="qte"
                                    placeholder="Qte"
                                    onChange={this.handleOnValueChange.bind(this)}
                                    value={this.state.qte}
                                />
                            </div>
                            <div class="form-group col-md-12">
                                <input
                                    type="file"
                                    class="form-control"
                                    onChange={this.onFileChange}
                                    
                                />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" data-dismiss="modal">save</button>
                            <button type="reset" class="btn btn-secondary" onClick={this.handelRest.bind(this)}>Rest</button>
                            <button type="reset" class="btn btn-secondary" onClick={this.handelBack.bind(this)}>Back</button>
                        </div>
                    </form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        error: state.booksData.error
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (book) => {
            dispatch(createBook(book));
        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook2)
