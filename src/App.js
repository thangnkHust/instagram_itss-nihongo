import CreatePostModal from './components/CreatePostModal';
import PostList from './components/PostList';
import Home from './pages/Home';
import MainRoute from './routes'
import { useEffect } from 'react'
import { connect } from 'react-redux';
import { setData } from './actions/auth'

function App(props) {
    useEffect(() => {
        const user = localStorage.getItem('user')
        user && props.setData(JSON.parse(user))
    }, [props])
    return (
        <MainRoute />
        // <Home />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setData: userLogined => {
            dispatch(setData(userLogined))
        }
    }
}

export default connect(null, mapDispatchToProps)(App);
