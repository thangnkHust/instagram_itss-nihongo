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
