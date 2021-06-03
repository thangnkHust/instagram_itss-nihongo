import { useState, useEffect } from 'react';
import Home from './pages/Home'
import {db} from './lib/firebase'
import './App.css'

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        db.collection('users').onSnapshot(snapShot => {
            const users = snapShot.docs.map(doc => {
                return {id: doc.id, data: doc.data()}
            });
            setUsers(users);
        })
    }, [])

    console.log(users);

    return (
        <div className="App">
        {
            users.map(({id, data}) => (
                <div className='test1'>
                    <p>{id}</p>
                    <p>{data.nickname}</p>
                </div>
            ))
        }
            <Home />
        </div>
    )
}

export default App;
