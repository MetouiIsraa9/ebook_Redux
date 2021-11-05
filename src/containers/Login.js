import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { loginUser } from '../actions/users/auth/auth.actions';
import { connect } from 'react-redux';
import { history } from '../index';
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            pwd:''
        }
    }

    handleOnValueChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.email,this.state.pwd)
       
       
    }

    render() {
        return (
            <div>
               
                <div class="login-div" style={{marginLeft:500, marginTop : 30 , marginRight: 500}}>
                    <div className="logo d-flex justify-content-center" style={{font:500}}>
                        BOOK <span>Shop</span>
                    </div>
                    {this.props.error ? <div className="alert alert-danger" role="alert">
                        {this.props.error.message}
                    </div> : '' }
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div class="form-group">
                            <input 
                            type="email" 
                            class="form-control" 
                            name="email" 
                            placeholder="Username "
                            onChange={this.handleOnValueChange.bind(this)}
                            value={this.state.email}
                            />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your info with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <input 
                            type="password" 
                            class="form-control" 
                            name="pwd"
                            placeholder="Password"
                            onChange={this.handleOnValueChange.bind(this)}
                            value={this.state.pwd} />
                        </div>
                        <div class="d-flex justify-content-center ">
                            <button type="submit" class="btn btn-primary style_btn margin-left">Submit</button>
                            <button type="reset" class="btn btn-secondary style_btn margin-left">Reset</button>
                        </div>
                    </form>

                </div>
                              
            </div>
        )
    }
} 
const mapStateToProps = (state) => {
    return {
        error: state.authData.error
    };
    
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email,pwd) => {
            dispatch(loginUser(email,pwd));
        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
