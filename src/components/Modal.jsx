import { useDispatch } from "react-redux";
import {closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to clear the cart?</h4>
        <div className="btn-container">
          <button type="button" className="btn btn-confirm">
            Confirm
          </button>
          <button type="button"
          className="btn btn-cancel"
          onClick={()=> {
            dispatch(closeModal());
          }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
