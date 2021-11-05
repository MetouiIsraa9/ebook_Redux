import { combineReducers } from "redux";

import books from './bookReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
    booksData : books,
    authData : auth 
});
export default rootReducer;

