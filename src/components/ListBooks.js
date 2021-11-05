import React from 'react'
import { Card, Button, Col, Row, Form, FormGroup } from 'react-bootstrap';
export default function ListBooks({book}) {
    return (
        <div>
            <Card style={{ width: '18rem',height:'35rem' , marginLeft:1, marginTop: 5, marginRight: 1 }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                    <form style={{marginLeft:2 , marginTop : 5, marginRight: 2}}>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <Form.Label>Auther  : </Form.Label>
                                                <Form.Label>{' '}{book.title}</Form.Label>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <Form.Label>Price  : </Form.Label>
                                                <Form.Label>{book.price} </Form.Label>
                                            </div>
                                        </div>
                                       
                                    </form> 
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button variant="" ><i class="fas fa-shopping-cart"></i> {' '}Buy it now</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}
