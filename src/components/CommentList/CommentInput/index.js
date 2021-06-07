import { Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { AccountCircle, Send, EmojiEmotions } from '@material-ui/icons';
import { Button } from 'bootstrap';
import React from 'react'
import useStyles from './styles'

export default function CommentInput() {
    const classes = useStyles();
    return (
        <Grid container classname={classes.container}>
            <Grid item xs={12}>
                <TextField  
                    className={classes.addComment} 
                    id="outlined-add-comment" 
                    placeholder="Thêm bình luận..." 
                    type="text" 
                    variant="outlined" 
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmojiEmotions />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <Send />
                            </InputAdornment>
                        ),
                    }}    
                />
            </Grid>
        </Grid>
    )
}
