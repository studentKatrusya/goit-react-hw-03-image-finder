import { Overley, Container } from './Modal.styled';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { onClick, image } = this.props;
    return createPortal(
      <Overley onClick={onClick}>
        <Container>
          <img src={image} alt={image.tags} />
        </Container>
      </Overley>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
// function Modal() {
//   return (
//     <Overley>
//       <Container>
//         modalka
//         <img src="" alt="" />
//       </Container>
//     </Overley>
//   );
// }
// export default Modal;
