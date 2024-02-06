// Modal.js
import React, { useRef, useState } from 'react';
import Modal from 'react-modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const CustomModal = ({ isOpen, onClose, imageUrl }) => {

  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  const handleImageLoad = () => {
    if (imageRef.current) {
      const { naturalWidth, naturalHeight } = imageRef.current;
      setImageDimensions({ width: naturalWidth, height: naturalHeight });
      
    }
  };

  console.log(imageDimensions.width + " " + imageDimensions.height)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true} k
      shouldCloseOnEsc={true} 
      ariaHideApp={true} 
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
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          padding:'0',
          height:`${imageDimensions.height < imageDimensions.width ? '700px' : '700px' }`,
          width:`${imageDimensions.width < imageDimensions.height ? '550px' : '1100px' }`,
          overflow:"hidden",
        },
      }}
    >
      <img ref={imageRef} onLoad={handleImageLoad} src={imageUrl} alt="Modal Image" style={{height:'100%',width:'100%'}}/>
      <button onClick={onClose} style={{position:"absolute",top:"5px",right:"5px"}}><FontAwesomeIcon icon={faXmark} style={{fontSize:"30px",color:'white'}}/></button>
    </Modal>
  );
};

export default CustomModal;

