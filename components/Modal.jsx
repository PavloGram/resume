"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CloseIcon from "../public/close-icon.svg";
import LeftIcon from "../public/chevron-left.svg";
import RightIcon from "../public/chevron-right.svg";
import { images } from "@/data/galery";

function Modal({
  isActiveModal,
  setIsActiveModal,
  currentImage,
  setCurrentImage,
}) {
  return (
    <>
      {isActiveModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/[0.5] flex justify-center items-center"
          onClick={() => setIsActiveModal(false)}
        >
          <div
            className="relative w-[340px] sm:w-[500px]  p-5 pt-10 bg-white pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-2 right-4"
              onClick={() => setIsActiveModal(false)}
            >
              <CloseIcon width={25} height={25} />
            </button>
            {currentImage === 1 ? null : (
              <button type="button" className="absolute top-[50%] -left-1" onClick={() => setCurrentImage(currentImage -= 1)}>
                <LeftIcon width={30} />
              </button>
            )}
            {images.length === currentImage ? null : (
              <button type="button" className="absolute top-[50%] right-0" onClick={() => setCurrentImage(currentImage += 1)}>
                <RightIcon width={30} />
              </button>
            )}
            <Image
              src={`/page${currentImage}.jpg`}
              alt="big photo"
              width={912}
              height={1280}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
