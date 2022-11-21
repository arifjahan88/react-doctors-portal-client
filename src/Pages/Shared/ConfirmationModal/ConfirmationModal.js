import React from "react";

const ConfirmationModal = ({ title, message, closeModal, modaldata, successaction, successbuttonname }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4 font-semibold text-red-600">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successaction(modaldata)}
              htmlFor="confirmation-modal"
              className="btn btn-outline btn-error btn-sm"
            >
              {successbuttonname}
            </label>
            <button className="btn btn-sm btn-outline btn-success" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
