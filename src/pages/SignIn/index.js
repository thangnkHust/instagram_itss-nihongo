import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Grid,
    Typography,
    Container,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import useStyles from './styles'
import './sign-in.css'

export default function SignIn() {
    const classes = useStyles();
    const [login, setLogin] = useState({email: '', password: ''})

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(login);
    }

    const handleChange = e => {
        e.target.name === 'email' ?
            setLogin({...login, email: e.target.value})
            :
            setLogin({...login, password: e.target.value})
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <InstagramIcon className={classes.icon} />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={handleLogin}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        type="email"
                        value={login.email}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={login.password}
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link to='/sign-up'>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>

            <p>Sign in with orther </p>
            <div style={{display: 'flex'}}>
                <div id="gSignInWrapper">
                    <div id="customBtn" className="customGPlusSignIn">
                        <span className="g-icon" />
                        <span className="buttonText">Google</span>
                    </div>
                </div>
                <div id="gSignInWrapper" style={{ marginLeft: '5%'}}>
                    <div id="customBtn" className="customGPlusSignIn">
                        <span className='f-icon' />
                        <span className="buttonText">Facebook</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}
