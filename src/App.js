// import SignIn from "./pages/SignIn";
// import SignUp from "./pages/SignUp";
import Home from './pages/Home'
import './App.css'
import {getFirebaseUsers} from './lib/firebase'
import { useState, useEffect } from 'react';

function App() {
    const [users, setUsers] = useState([])
    // const getUsers = async () => {
    //     const users = await getFirebaseUsers();
    //     setUsers(users);
    // }
    // useEffect(() => {
    //     getUsers()
    // }, [users])

    // console.log(users);
    // getFirebaseUsers()
    //     .then((users) =>{
    //         setUsers(users)
    //     });
    console.log(users);
    return (
        <div className="App">
            <div className='test1'>
                test 1
            </div>
            <Home />
        </div>
    );
}

export default App;
