// import { createPortal } from "react-dom";
import { IoCloseOutline } from "react-icons/io5";
import { ReactNode } from "react";

interface ModelProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Model = ({ isOpen, onClose, children }: ModelProps) => {
  // return createPortal(
  return (
    <>
      {isOpen && (
        <>
          <div className="relative z-20 m-auto min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end cursor-pointer">
              <IoCloseOutline onClick={onClose} className="self-end text-2xl" />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-10 h-screen w-screen backdrop-blur"
          ></div>
        </>
      )}
    </>
    //  </>,
    // document.getElementById("model-root")
  );
};

export default Model;
