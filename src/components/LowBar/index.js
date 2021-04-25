import React from 'react';
import {AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import AboutModal from '../AboutModal/index.js';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles} from '@material-ui/core/styles';
import {color0, color1} from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: color0
  },
  title: {
    paddingRight: '1rem'
  },
  about: {
    '&:hover': {
      cursor: 'pointer',
      color: color0,
      backgroundColor: color1
    }
  }
}));

export default function LowBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>Rafinha Voigt</Typography>
          <Typography variant="small" component="small">
            Fotografias
          </Typography>
          <Box
            ml="auto"
            justifyContent="center"
            alignItems="center"
            display="flex"
            onClick={openModal}
            className={classes.about}
          >
            <Typography>Sobre</Typography>
            <Box pl={1}>
              <InfoIcon color="inherit" fontSize="small" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <AboutModal state={open} callback={closeModal} />
    </>
  );
}
