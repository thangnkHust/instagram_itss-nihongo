import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import './top-page.css'

const TopPage = (props) => {
    const { userLogined } = props
    return (
        <div className='bg'>
            <div>
                <ul>
                    {/* <li className='nav__left'>
                        <Link to='/' className='fa fa-instagram' />
                    </li> */}
                    {
                        !userLogined.isLogin ?
                            (
                                <React.Fragment>
                                    <li className='nav__right'>
                                        <Link to='/sign-in'>Login</Link>
                                    </li>
                                    <li className='nav__right'>
                                        <Link to='/sign-up'>Register</Link>
                                    </li>
                                </React.Fragment>
                            )
                            :
                            <li className='nav__right'>
                            <Link to='/home'>Home</Link>
                            </li>
                    }
                    <li className='nav__right'>
                        <Link to=''>About Us</Link>
                    </li>
                </ul>
            </div>
            <div className='main-content'>
                <h1 className='content__title1' style={{fontSize: '50px'}}>INSTAGRAM</h1>
                <h2 className='content__title2'>A Photo And Video Sharing Social Networking Service</h2>
                <br />
                <button className='btn-top'>
                    <span><Link to='/sign-up' style={{textDecoration: 'none', color: 'white'}}>join with us </Link></span>
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userLogined: state.authReducer
    }
}

export default connect(mapStateToProps, null)(TopPage);
