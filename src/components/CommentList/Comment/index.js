import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'

export default function Comment({comment}) {
    const classes = useStyles();
    return (
        <Grid container direction='row' className={classes.container}>
            <Grid item>
                <Typography><b>{comment.username}</b> {comment.content}</Typography>
            </Grid>
        </Grid>
    )
}
