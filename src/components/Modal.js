import React from "react";

const Modal = ({ handleModal, handleClose, desc, isDemo = false }) => {
  return (
    <div
      tabIndex="-1"
      className="fixed top-0 right-0 z-[999] w-full p-4 overflow-x-hidden overflow-y-hidden md:inset-0 h-screen bg-[rgba(0,0,0,0.4)]"
    >
      <div
        className={`${
          isDemo
            ? "mx-auto mt-[4vh] w-full max-w-5xl max-h-full"
            : "mx-auto mt-[16vh] top-[50%] w-full max-w-2xl max-h-full"
        }`}
      >
        <div className="w-full bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-center p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-center text-xl font-semibold text-gray-900 dark:text-white">
              {isDemo ? "Video demo" : desc.title}
            </h3>
            <button
              onClick={handleClose}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {isDemo ? (
            <video
              className="p-4"
              src="https://docs.google.com/uc?id=1DzpUmFzioRCyPwH7DBZrlsYIJIzQhagR"
              controls
            ></video>
          ) : (
            <>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Mục tiêu: {desc.target}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Các bước triển khai: {desc.steps}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Trải nghiệm thành công, thất bại: {desc.result}
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Suy nghĩ cá nhân khi triển khai dự án: {desc.thoughts}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
