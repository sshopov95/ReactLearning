import Button from "./Button";

const Modal = ({isOpen, onClose, rating}) => {
  if (!isOpen) return null; //При връщане на Null От компонент - не показва нищо

  
    return (
    <div className="modal-overlay">
      <div className="modal">
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        {/*Replaced by component
        <button className="close-btn" onClick={() => onClose()}>
          Close
        </button>*/}
        <Button className="close-btn" onClick={() => onClose()}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
