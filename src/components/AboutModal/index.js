import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import PropTypes from 'prop-types';

export default function AboutModal({state, callback}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    callback();
  };
  React.useEffect(() => {
    if (state === true) {
      handleOpen();
    } else if (state === false) {
      handleClose();
    }
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <h1>Eu sou uma modal</h1>
    </Modal>
  );
}
AboutModal.propTypes = {
  state: PropTypes.bool,
  callback: PropTypes.func
};
