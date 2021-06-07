import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { db, auth } from '../../lib/firebase';
import { ToastContainer, toast } from 'react-toastify';
import { setData } from '../../actions/auth';
import 'react-toastify/dist/ReactToastify.css';

function SignIn(props) {
    const [login, setLogin] = useState({email: '', password: ''})
    const { userLogined } = props;

    const handleLogin = (e) => {
        e.preventDefault()

        db.collection("users")
        .where("email", "==", login.email)
        .where('password', '==', login.password)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.docs.length > 0) {
                const user = {...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id }
                console.log(user);
                toast.success('Đăng nhập thành công', {
                    autoClose: 1000,
                });
                setTimeout(() => {
                    props.setData(user)
                    localStorage.setItem('user', JSON.stringify(user))
                }, 1000)
            }else {
                toast.error('Sai tài khoản hoặc mật khẩu', {
                    autoClose: 3000,
                });
                setLogin({
                    email: login.email,
                    password: ''
                })
            }
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    const handleChange = e => {
        e.target.name === 'email' ?
            setLogin({...login, email: e.target.value})
            :
            setLogin({...login, password: e.target.value})
    }

    return (
        userLogined.isLogin ? <Redirect to='/home' />
        :
        <div className="container">
            <ToastContainer />
            <div className="row justify-content-center my-5">
                <div className="col-xl-5 col-lg-12 col-md-5">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                        </div>
                                        <form className='user' onSubmit={handleLogin}>
                                            <div className="form-group">
                                                <input onChange={handleChange} type="email" name='email' className="form-control form-control-user"
                                                    id="exampleInputEmail" aria-describedby="emailHelp" value={login.email}
                                                    placeholder="Enter Email Address..." autoComplete='username' required />
                                            </div>
                                            <div className="form-group">
                                                <input onChange={handleChange} type="password" className="form-control form-control-user" value={login.password} id="exampleInputPassword" placeholder="Password" autoComplete='current-password' required />
                                            </div>
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox small">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                    <label className="custom-control-label" >Remember Me</label>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block" style={{backgroundColor: '#5F9EA0', borderColor: '#5F9EA0'}}>Login</button>
                                            <hr />
                                            <a className="btn btn-google btn-user btn-block" style={{backgroundColor: '#ea4335'}}>
                                                <i className="fab fa-google fa-fw"></i> Login with Google
                                            </a>
                                            <a className="btn btn-facebook btn-user btn-block" style={{color: 'white', backgroundColor: '#3b5998'}} >
                                                <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            {/* <a className="small" href='#'>Forgot Password?</a> */}
                                        </div>
                                        <div className="text-center">
                                            <Link to='/sign-up' className="small" >Create an Account!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userLogined: state.authReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setData: userLogined => {
            dispatch(setData(userLogined))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
