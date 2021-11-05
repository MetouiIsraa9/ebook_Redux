import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Col, Row, Image, Form } from 'react-bootstrap';
import { history } from '../index';




export class ViewBook extends Component {

    constructor(props) {
        super(props);


        this.state = {
            _id: null,
            title: '',
            auther: '',
            price: 0,
            qte: 0,
            img: ''

        }
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
                img: book.img
            })
        }
    }
    render() {
        return (
            <div >
                <Card 
                style={{marginLeft:50 , marginTop : 30 , marginRight: 50}}
                >
                    <Card.Title style={{marginLeft:20 , marginTop : 20 ,font:500}}>View Book
                    </Card.Title>

                    <Card.Body>
                        <Card>
                            <Row className="justify-content-md-center">
                                <Col style={{marginLeft:20 , marginTop : 20 }}>
                                    <img src={this.state.img} />

                                </Col>
                                <Col xs={6}>

                                    <form style={{marginLeft:50 , marginTop : 30 , marginRight: 50}}>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <Form.Label>Title  : </Form.Label>

                                                <Form.Label>{"     " + this.state.title}</Form.Label>

                                            </div>
                                            <div class="form-group col-md-12">
                                                <Form.Label>Auther  : </Form.Label>

                                                <Form.Label>{"     " + this.state.title}</Form.Label>

                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <Form.Label>Price  : </Form.Label>
                                                <Form.Label>{this.state.price} </Form.Label>

                                            </div>
                                            <div class="form-group col-md-12">
                                                <Form.Label>Quantity  : </Form.Label>
                                                <Form.Label>{this.state.qte} </Form.Label>

                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                        <button type="reset" class="btn btn-secondary" onClick={this.handelBack.bind(this)}>Back</button>
                                        </div>
                                    </form>

                                </Col>
                                <Col></Col>
                            </Row>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ViewBook)
