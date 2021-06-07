import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { db } from '../../lib/firebase'
import { ToastContainer, toast } from 'react-toastify'
import { connect } from 'react-redux'
import { setData } from '../../actions/auth'

function SignUp(props) {
    const [register, setRegister] = useState({
        email: '',
        nickname: '',
        password: '',
        re_password: ''
    })
    const [users, setUsers] = useState([])
    const [disable, setDisable] = useState(false)

    const { userLogined, setData } = props

    const handleRegister = (e) => {
        e.preventDefault()

        if(register.password !== register.re_password) {
            toast.error('Password and Repeat password not match');
        }else if(register.password.length < 6) {
            toast.error('Password too short');
        }else if(checkUniqueEmail(register.email) === false) {
            toast.error('Email register not unique');
        }else {
            setDisable(true)
            const user = {
                email: register.email,
                nickname: register.nickname,
                password: register.password,
                avatar: '',
                description: '',
                sex: null
            }
            setTimeout(() => {
                db.collection("users").add(user)
                .then(() => {
                    toast.success('Register success', {
                        autoClose: 2000,
                    });
                    setTimeout(() => {
                        setData(user)
                        localStorage.setItem('user', JSON.stringify(user))
                    }, 2000);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
            }, 10)
        }
    }

    const handleChange = e => {
        const target = e.target
        const value = target.value
        const name = target.name
        setRegister({
            ...register,
            [name]: value
        })
    }

    const checkUniqueEmail = email => {
        return users.filter(u => {
            return u.email === email
        }).length > 0 ? false : true
    }

    useEffect(() => {
        var users = []
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                users.push({id: doc.id, ...doc.data()})
            });
        });
        setUsers(users);
    }, [])

    return (
        userLogined.isLogin ? <Redirect to='/home' />
        :
        <div className="container">
            <div className="row justify-content-center my-5">
                <div className="col-xl-5 col-lg-12 col-md-5">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-10">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                        </div>
                                        <form min='6' className='user' onSubmit={handleRegister} >
                                            <div className="form-group">
                                                <input
                                                    name='nickname'
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    placeholder="Nickname"
                                                    value={register.nickname}
                                                    required
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    name='email'
                                                    type="email"
                                                    className="form-control form-control-user"
                                                    placeholder="Email Address"
                                                    value={register.email}
                                                    required
                                                    autoComplete='username'
                                                    onChange={handleChange}
                                                    id="exampleInputEmail"
                                                />
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-sm-6 mb-3 mb-sm-0">
                                                    <input
                                                        name='password'
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleInputPassword"
                                                        placeholder="Password"
                                                        value={register.password}
                                                        required
                                                        onChange={handleChange}
                                                        autoComplete='new-password'
                                                    />
                                                </div>
                                                <div className="col-sm-6" >
                                                    <input
                                                        onChange={handleChange}
                                                        name='re_password'
                                                        type="password"
                                                        className="form-control form-control-user"
                                                        id="exampleRepeatPassword"
                                                        placeholder="Repeat Password"
                                                        value={register.re_password}
                                                        required
                                                        autoComplete='new-password'
                                                    />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-user btn-block" style={{backgroundColor: '#5F9EA0', borderColor: '#5F9EA0'}} disabled={disable} >Register Account</button>
                                            <hr />
                                            <a href="index.html" className="btn btn-google btn-user btn-block" style={{ backgroundColor: '#ea4335' }} >
                                                <i className="fab fa-google fa-fw"></i> Register with Google
                                            </a>
                                            <a href="index.html" className="btn btn-facebook btn-user btn-block" style={{ color: 'white', backgroundColor: '#3b5998' }} >
                                                <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                            </a>
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                                        </div>
                                        <div className="text-center">
                                            <Link className="small" to='sign-in'>Already have an account? Login!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
