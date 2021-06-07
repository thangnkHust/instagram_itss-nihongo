import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
import SearchBox from './SearchBox'
import logo from '../../assets/images/logo.png'
import avatar from '../../assets/images/avt.jpg'
import HomeIcon from '@material-ui/icons/Home'
import ChatIcon from '@material-ui/icons/Chat'
import SearchIcon from '@material-ui/icons/Search'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

export default function Header() {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.content}>
        <Grid item xs={4} className={classes.logoArea} direction="column">
          <img src={logo} className={classes.logo}/>
        </Grid>
        <Grid item xs={4} className={classes.searchBox} direction="column">
          <SearchBox />
        </Grid>
        <Grid item xs={4} className={classes.function} direction="row">
            <HomeIcon className={classes.icon}/>
            <ChatIcon className={classes.icon}/>
            <SearchIcon className={classes.icon}/>
            <FavoriteBorderIcon className={classes.icon}/>
            <Avatar alt="Truonghung" src={avatar} className={classes.avatar}/>
        </Grid>
      </Grid>
    </Grid>
  )
}
