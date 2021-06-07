import React from 'react'
import { Button, Modal, TextareaAutosize, TextField } from '@material-ui/core';
import useStyles from './styles';

export default function CreatePostModal() {
    const classes = useStyles()
    const onSubmit = React.useCallback(() => {
        
    }, []);

    const body = (
        <div className={classes.paper} id='simple-modal-title'>
        <h2>Create New Post</h2>
        <form noValidate autoComplete='off' className={classes.form}>
            <TextField
            className={classes.title}
            required
            label='Title'
            value={""}
            />
            
            <div className={classes.footer}>
                <Button
                    variant='contained'
                    color='primary'
                    component='span'
                    fullWidth
                    onClick={onSubmit}>
                    Create
                </Button>
            </div>
        </form>
    </div>
);

    return (
        <Modal open={true}>
            {body}
        </Modal>
    )
}
