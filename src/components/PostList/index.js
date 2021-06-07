import React from 'react';
import { Grid } from '@material-ui/core';
import Post from './Post';

export default function PostList() {

  React.useEffect(() => {
    console.log("HomePage");
  }, []);

  const posts = [
    {
      id: "12",
      title: "Đây là description cho cái ảnh này",
      description: "hung",
      likeCount: 10,
      updatedAt: "07/06/2021"
    },
    {
      id: "12",
      title: "abc",
      description: "hung",
      likeCount: 10,
      updatedAt: "07/06/2021"
    },
  ]

  return (
    <Grid container spacing={2} alignItems='stretch'>
        {posts.map((post) => (
        <Grid key={post._id} item xs={12}>
            <Post post={post} />
        </Grid>
        ))}
    </Grid>
  );
}