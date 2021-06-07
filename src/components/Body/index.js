import React from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import useStyles from './styles'
import RightProfile from './RightProfile'
import { PostAdd } from '@material-ui/icons'
import PostList from '../PostList'

export default function Body() {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid container className={classes.content}>
        <Grid item xs={8} className={classes.homePost}>
          <PostList />
        </Grid>
        <Grid item xs={4} className={classes.suggest}>
          <RightProfile />
        </Grid>
      </Grid>
    </Grid>
  )
}
