import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isLoggedIn : this.props.isLoggedIn,
            user : this.props.user

        }
    }


    render() {
        let menu 
        if (this.props.isLoggedIn) {
            if(this.props.user.isAdmin){
                 menu =
                    <div>
                        <Nav className="navbar navbar-expand-lg navbar-light bg-light sidebar ">
                            <div class="logo">
    
                            </div>
    
                            <Link to={""} className="nav-link logo" ><a href="#">BOOK <span>Shop</span></a></Link>
                            <Link to={"/books"} className="nav_likns nav-link " >Books</Link>
                            <Link to={"/"} className="nav_likns nav-link" >    Categories</Link>
                            <Link to={"/"} className="nav_likns nav-link" >    Reclation</Link>
                            <div style={{ textAlign: 'right' }, { flexDirection: 'row', justifyContent: 'flex-end' }, { position: 'absolute', right: 0 }}>
                                
                                <Link to={"/login"} className="nav_likns nav-link" >  Logout  </Link>
                            </div>
                        </Nav>
    
                    </div>
    
                
            }else{
               menu = 
                    <div>
                    <Nav className="navbar navbar-expand-lg navbar-light bg-light sidebar ">
                        <div class="logo">

                        </div>

                        <Link to={""} className="nav-link logo" ><a href="#">BOOK <span>Shop</span></a></Link>
                        <Link to={"/books"} className="nav_likns nav-link " >Books</Link>
                        <Link to={"/"} className="nav_likns nav-link" >    Contact </Link>
                        
                        <div style={{ textAlign: 'right' }, { flexDirection: 'row', justifyContent: 'flex-end' }, { position: 'absolute', right: 0 }}>
                            
                            <Link to={"/login"} className="nav_likns nav-link" >  Logout  </Link>
                        </div>
                    </Nav>

                </div>
                
            }
    

        } else {
            menu = 
                <div>
                    <Nav className="navbar navbar-expand-lg navbar-light bg-light sidebar ">
                        <div class="logo">

                        </div>

                      <Link to={"/"} className="nav-link logo" ><a href="#">BOOK <span>Shop</span></a></Link>
                        <div style={{ textAlign: 'right' }, { flexDirection: 'row', justifyContent: 'flex-end' }, { position: 'absolute', right: 0 }}>
                            <Link to={"/register"} className="nav_likns nav-link" >    Register</Link>
                            <Link to={"/login"} className="nav_likns nav-link" >  Login  </Link>
                        </div>
                    </Nav>

                </div>

            
        }
        return (
            <div>{menu}</div>
        )
    }
     

}

const mapStateToProps = (state) => {

    return {
        user: state.authData.user,
        isLoggedIn: state.authData.isLoggedIn
    };
}

export default connect(mapStateToProps,null)(Navbar)