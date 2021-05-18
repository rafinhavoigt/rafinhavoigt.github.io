import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    position: 'relative',
    backgroundColor: 'transparent',
    color: 'black'
  },
  dialogContent: {
    backgroundColor: 'transparent',
    padding: 0,
    width: 'fit-content'
  },
  closeButton: {
    marginLeft: 'auto'
  },
  img: {
    maxHeight: 512
  }
}));

export default function PhotoViewer({currentState, picture, callback, title}) {
  const classes = useStyles();
  return (
    <Dialog
      open={currentState}
      onClose={callback}
      TransitionComponent={Transition}
      maxWidth="xl"
    >
      <AppBar className={classes.dialogTitle}>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
          <IconButton
            color="inherit"
            onClick={callback}
            aria-label="close"
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent className={classes.dialogContent}>
        <Box justifyContent="center" display="flex">
          <img
            src={picture}
            alt={title}
            onClick={callback}
            className={classes.img}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}

PhotoViewer.propTypes = {
  currentState: PropTypes.bool,
  picture: PropTypes.string,
  callback: PropTypes.func,
  title: PropTypes.string
};
