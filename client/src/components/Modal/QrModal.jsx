import React from "react";
import { IconButton } from "@material-ui/core";

const DisplayDataModal = ({ modalData, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="modal fixed w-full h-[100vh] top-0 left-0 flex flex-col items-center justify-center border-none p-6">
      <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
      <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 px-6 ">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-gray-800">Detail Hewan Ternak</p>
            <IconButton onClick={handleCloseModal} className="modal-close cursor-pointer z-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </IconButton>
          </div>
          <div className="flex w-full h-auto mt-4">
            <div>
              <p><strong>ID:</strong> {modalData.id}</p>
              <p><strong>Animal:</strong> {modalData.animal}</p>
              <p><strong>Family:</strong> {modalData.family}</p>
              <p><strong>Weight:</strong> {modalData.weight} Kg</p>
              <p><strong>Gender:</strong> {modalData.gender}</p>
              <p><strong>Age:</strong> {modalData.age} Months</p>
              <p><strong>Vaccine:</strong> {modalData.vaccine}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayDataModal;
