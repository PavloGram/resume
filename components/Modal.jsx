import Image from "next/image";
import React from "react";

function Modal({ isActiveModal, setIsActiveModal, currentImage }) {
  return (
    <>
      {isActiveModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center"
          onClick={() => setIsActiveModal(false)}
        >
            <div className="w-[340px] sm:w-[500px]  p-5 bg-white pointer-events-auto" onClick={(e) => e.stopPropagation()}>
              <Image src={`/page${currentImage}.jpg`} alt='big photo' width={912} height={1280}/>
            </div>
        </div>
      )}
    </>
  );
}

export default Modal;
