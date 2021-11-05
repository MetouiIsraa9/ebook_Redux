import React from 'react'
import { Button} from 'react-bootstrap';

export default function Book({ book, onEdit, onDelete ,onView}) {
    return (
        <tr key={book._id} >
            <td>{book.title}</td>
            <td>{book.auther}</td>
            <td>{book.price}</td>
            <td>{book.qte}</td>
            <td>
                <div class="btn-group">
                    <Button
                        type="button"
                        variant="info"
                        onClick={() => onEdit(book)}
                        size="sm"
                    ><i class="fa fa-pencil-alt"></i>
                    </Button>
                    <Button
                        type="button"
                        variant="danger"
                        size="sm"
                        onClick={() => onDelete(book._id)}
                    ><i class="fa fa-trash-alt"></i></Button>
                    <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        onClick={() => onView(book)}
                        size="sm"
                    ><i class="fa fa-eye"></i>
                    </Button>
                </div>
            </td>
        </tr>
    )
}
