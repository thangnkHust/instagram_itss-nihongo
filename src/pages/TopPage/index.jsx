import {Link} from 'react-router-dom'

const TopPage = () => {
    return (
        <div>
            <h2>Welcom to My team app</h2>
            <div><Link to='/sign-in'><button>Sign in</button></Link></div>
            <div><Link to='/sign-up'><button>Sign up</button></Link></div>
        </div>
    )
}

export default TopPage;
