import React from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const OptionModal = (props) => (
  <Modal
  isOpen={props.selectedOption}
  style = {customStyles}
  closeTimeoutMS={100}
  contentLabel="Modal"
>
  <h1>Modal Content</h1>
  <p>Etc.</p>
</Modal>
);

export default OptionModal;