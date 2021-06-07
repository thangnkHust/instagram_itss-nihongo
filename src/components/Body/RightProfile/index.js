import React from 'react'
import { Grid, Typography, Avatar, TextField } from '@material-ui/core'
import useStyles from './styles'
import avatar from '../../../assets/images/avt.jpg'

export default function Body() {
  const classes = useStyles()
  return (
    <Grid container className={classes.container} xs={12} direction='column'>
      <Grid item className={classes.account}>
        <Grid container direction='row' className={classes}>
          <Grid item>
            <Avatar alt="Truonghung" src={avatar} className={classes.avatar}/>
          </Grid>
          <Grid item direction='column' className={classes.nameAccount}>
            <Grid item>
              <Typography className={classes.textAccount}>User name</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textAccount}>Name</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={classes.suggest}>
        <Grid item xs={12}>
          <Typography>Gợi ý cho bạn</Typography>
        </Grid>

        <Grid container direction='row' className={classes.anotherAccount}>
          <Grid item>
            <Avatar alt="Truonghung" src={avatar} className={classes.avatarSuggest}/>
          </Grid>
          <Grid item direction='column' className={classes.nameAccountSuggest}>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>User name</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>Name</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' className={classes.anotherAccount}>
          <Grid item>
            <Avatar alt="Truonghung" src={avatar} className={classes.avatarSuggest}/>
          </Grid>
          <Grid item direction='column' className={classes.nameAccountSuggest}>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>User name</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>Name</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction='row' className={classes.anotherAccount}>
          <Grid item>
            <Avatar alt="Truonghung" src={avatar} className={classes.avatarSuggest}/>
          </Grid>
          <Grid item direction='column' className={classes.nameAccountSuggest}>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>User name</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.textAccountSuggest}>Name</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
