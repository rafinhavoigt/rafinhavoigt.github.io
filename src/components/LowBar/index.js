import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';
import AboutModal from '../AboutModal/index.js';
import InfoIcon from '@material-ui/icons/Info';
import {makeStyles} from '@material-ui/core/styles';
import {color0, color1, color2, color3} from '../../styles/colors';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: color0,
    color: color1
  },
  title: {
    paddingRight: '1rem'
  },
  about: {
    marginLeft: 'auto',
    backgroundColor: color2,
    color: color1,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: color3
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
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title}>Rafinha Voigt</Typography>
          <Typography variant="subtitle" component="small">
            Fotografias
          </Typography>
          <Button
            className={classes.about}
            variant="contained"
            endIcon={<InfoIcon />}
            onClick={openModal}
          >
            Sobre
          </Button>
        </Toolbar>
      </AppBar>
      <AboutModal state={open} callback={closeModal} />
    </>
  );
}
