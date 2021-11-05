import {

    ADD_BOOK_ERROR,
    ADD_BOOK_SUCCESS,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_SUCCESS,
    EDIT_BOOK_ERROR,
    EDIT_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    FETCH_BOOK_LOADING,
    FETCH_BOOK_SUCCESS
} from './types';

import axios from 'axios';
import { history } from '../../index';

const url = 'http://localhost:3001/books';
const config={
    headers :{
        authorization:'Bearer '+localStorage.getItem('accessToken')
    }
};


axios.interceptors.request.use(
    config => {
        config.headers.authorization= 'Bearer '+localStorage.getItem('accessToken');
        return config ; 
    }, 
    error=>{
        return Promise.reject(error);
    }
);
//Fetch---------------------------------------------

export const fetchBookSuccess = (data) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: data,
    }
};

export const fetchBookLoading = (data3) => {
    return {
        type: FETCH_BOOK_LOADING,
        payload: data3
    }
};

export const fetchBookError = (data4) => {
    return {
        type: FETCH_BOOK_ERROR,
        payload: data4
    }
};


export const fetchBooks = () => {
    let isLoading = true;
    
    return (dispatch) => {
        dispatch(fetchBookLoading(isLoading));
        return axios.get(url)
            .then(response => {
                dispatch(fetchBookSuccess(response.data.books));
                isLoading = false;
                dispatch(fetchBookLoading(isLoading));
            }).catch(error => {
                const errorPayload = {};
                errorPayload['message'] = error.message;
                errorPayload['status'] = error.status;
                dispatch(fetchBookError(errorPayload))
                isLoading = false;
                dispatch(fetchBookLoading(isLoading));
            });
    }

};


//Add-----------------------------------------------------


export const createBookSuccess = (data) => {

    return {
        type: EDIT_BOOK_SUCCESS,
        payload: data,
    }
}

export const createBookError = (data) => {

    return {
        type: ADD_BOOK_ERROR,
        payload: data
    }
};

export const createBook = (book) => {
    const formData = new FormData();
    formData.append('filename', book.img);
    if (book._id) {
        let id = book._id;
        const data = {
            title: book.title,
            auther: book.auther,
            price: book.price,
            qte: book.qte,
            categorie: "615c96bb5b979b572a67ff04"            
        }
        return (dispatch) => {
            dispatch(editBook(id, data))
        }
    }
    else {
        formData.append('title', book.title);
        formData.append('auther', book.title);
        formData.append('price', book.price);
        formData.append('qte', book.qte);
        formData.append('categorie', "615c96bb5b979b572a67ff04");

        const data1 = {
            title: book.title,
            auther: book.auther,
            price: book.price,
            qte: book.qte,
            categorie: "615c96bb5b979b572a67ff04"
        };
        console.log(data1);
        return (dispatch) => {
            return axios.post(url,formData)
                .then(response => {
                    dispatch(createBookSuccess(response.data));
                    history.push("/books");
                }).catch(error => {
                    const errorPayload = {};
                    errorPayload['message'] = error.response.data.message;
                    errorPayload['status'] = error.response.data.status;
                    dispatch(createBookError(errorPayload));
                });
        }

    }
}


// Edit ---------------------------------------------

export const editBookSuccess = (data) => {

    return {
        type: EDIT_BOOK_SUCCESS,
        payload: data,
    }
}

export const editBookError = (data) => {

    return {
        type: ADD_BOOK_ERROR,
        payload: data
    }
};

export const editBook = (id, data) => {
    let res = [];
    res[0] = { "propName": "title", "value": data.title }
    res[1] = { "propName": "auther", "value": data.auther }
    res[2] = { "propName": "price", "value": data.price }
    res[3] = { "propName": "qte", "value": data.qte }
    res[4] = { "propName": "categorie", "value": data.categorie }
    

    return (dispatch) => {
        return axios.patch(url + "/" + id, res)
            .then(() => {
                return axios.get(url + "/" + id)
                    .then(response => {
                        dispatch(editBookSuccess(response.data));
                        history.push("/books");
                    }).catch((error) => {
                        const errorPayload = {};
                        errorPayload['message'] = error.response.data.message;
                        errorPayload['status'] = error.response.status;
                        dispatch(editBookError(errorPayload));
                    })

            }).catch((error) => {
                const errorPayload = {};
                errorPayload['message'] = error.response.data.message;
                errorPayload['status'] = error.response.status;
                dispatch(editBookError(errorPayload));
            })
    }
}

// Delete -------------------------------------------

export const deleteBookSuccess = (id) => {

    return {
        type: DELETE_BOOK_SUCCESS,
        payload: { _id: id },
    }
}

export const deleteBookError = (data) => {

    return {
        type: DELETE_BOOK_ERROR,
        payload: data,
    }
};


export const deleteBook = (id) => {
    return (dispatch) => {
        return axios.delete(url + "/" + id)
            .then(() => {
                dispatch(deleteBookSuccess(id));
            }).catch((error) => {
                const errorPayload = {};
                errorPayload['message'] = error.response.data.msg;
                errorPayload['status'] = error.response.status;
                dispatch(deleteBookError(errorPayload));
            })
    }
}








