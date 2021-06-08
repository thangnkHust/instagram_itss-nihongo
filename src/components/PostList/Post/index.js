import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';
import moment from 'moment';
import imgDefaultUrl from '../../../assets/images/post.jpg';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CommentList from '../../CommentList';
import CommentInput from '../../CommentList/CommentInput';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Post({ post }) {
  const classes = useStyles();

  const onLikeBtnClick = React.useCallback(() => {
  }, []);

  //menulist
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleIconClicks = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleEdit = () => {
    handleClose();
    //open screen edit
    //todo

    //save post
    //todo
  };
  const handleDelete = () => {
    handleClose();
    //show popup confirm 
    handleClickOpenPopup();
  };


  const menu = (
    <Menu
      id="fade-menu"
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={handleEdit}>Edit</MenuItem>
      <MenuItem onClick={handleDelete}>Delete</MenuItem>
    </Menu>
  );

  //popup
  const [openPopup, setOpenPopup] = React.useState(false);
  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  const handlePopupOkClose = React.useCallback(() => {      //xac nhan xoa
   
    console.log("Delete post");
    setOpenPopup(false);
  }, []);

  const popupConfirm = (
    <>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        onClose={handlePopupClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Do you want to delete this blog?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePopupOkClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={"Hung"}
        subheader={moment(post.updatedAt).format('HH:MM MMM DD,YYYY')}
        action={
          <>
            <IconButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleIconClicks}>
              <MoreVertIcon />
            </IconButton>
            {menu}
            {popupConfirm}
          </>
        }
      />
      <CardMedia
        image={imgDefaultUrl}
        className={classes.media}
        title="Title"
      />
      <CardActions>
        <IconButton onClick={onLikeBtnClick}>
          <FavoriteIcon />
          <Typography component='span' color='textSecondary'>
            {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>
        <CommentList />
      </CardContent>
      <CommentInput />
    </Card>
  );
}