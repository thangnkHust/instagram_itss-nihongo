import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  card:{
    backgroundColor: 'white',
    marginBottom: 40,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
}));