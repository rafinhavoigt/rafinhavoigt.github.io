import React from 'react';
import {
  AppBar,
  Toolbar,
  Fab,
  IconButton,
  Typography,
  Box
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import MoreIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from '@material-ui/core/styles';
import {color0} from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: color0
  }
}));

export default function LowBar() {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography>Rafinha Voigt</Typography>
        <Box m l="auto">
          <Typography>Sobre</Typography>
          <InfoIcon />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
