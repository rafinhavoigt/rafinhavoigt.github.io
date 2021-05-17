import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PhotoViewer({currentState, picture, callback}) {
  return (
    <Dialog
      fullScreen
      open={currentState}
      onClose={callback}
      TransitionComponent={Transition}
    >
      <img src={picture} alt="Teste" onClick={callback} />
    </Dialog>
  );
}

PhotoViewer.propTypes = {
  currentState: PropTypes.bool,
  picture: PropTypes.string,
  callback: PropTypes.func
};
