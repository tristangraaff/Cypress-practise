import './Modal.css';

function Modal({ children, onClose }) {
  return (
    <>
      <div className="backdrop" data-cy="backdrop" onClick={onClose}></div>
      <dialog className="modal" open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
