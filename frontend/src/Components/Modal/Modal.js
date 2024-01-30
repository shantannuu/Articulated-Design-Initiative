// Modal.js
import React from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const CustomModal = ({ isOpen, onClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true} // Prevent closing on overlay click
      shouldCloseOnEsc={true} // Prevent closing on pressing Esc key
      ariaHideApp={true} // Don't hide the main app content from screen readers
      style={{
        position:"relative",
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          zIndex: "999",
        },
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          height:'600px',
          width:'900px',
          overflow:"hidden",
        },
      }}
    >
      <img src={imageUrl} alt="Modal Image" style={{maxHeight:'100%',maxWidth:"100%"}}/>
      <button onClick={onClose} style={{position:"absolute",top:"5px",right:"5px"}}><FontAwesomeIcon icon={faXmark} style={{fontSize:"30px"}}/></button>
    </Modal>
  );
};

export default CustomModal;

