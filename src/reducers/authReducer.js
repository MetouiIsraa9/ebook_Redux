import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,

} from '../actions/users/auth/types'

const initialState = {
    user:null,
    isLoggedIn: false,
    error: null
};



const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, isLoggedIn: true };

        case LOGIN_ERROR:
            return {
                error: action.payload
            };

        default:
            return state;
    }
};


export default authReducer;
