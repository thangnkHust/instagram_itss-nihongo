import { Grid } from '@material-ui/core'
import React from 'react'
import Comment from './Comment'

export default function CommentList() {
    const comments = [
        {
          username: "Truong Hung",
          createAt: "12/03/1999",
          content: "Anh dep qua ban oi",
        },
        {
          username: "Truong Hoan",
          createAt: "12/03/2021",
          content: "Anh dep qua ban oi",
        }
      ]

    return (
        <Grid container spacing={2}>
            {comments.map((comment) => (
                <Grid key={comment._id} item xs={12}>
                    <Comment comment={comment} />
                </Grid>
            ))}
        </Grid>
    )
}
