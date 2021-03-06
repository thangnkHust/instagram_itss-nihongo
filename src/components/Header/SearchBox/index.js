import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Grid container xs={8}>
        <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Tìm kiếm"
            inputProps={{ 'aria-label': 'Tìm kiếm' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
    </Grid>

  );
}
