"use client";
import { images } from "@/data/galery";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./Modal";

export default function Gallery() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  function handleChangeState(src){
    setIsActiveModal(true)
      setCurrentImage(src)
   
  }
  return (
    <>
      <div className="flex flex-col  mt-3 border rounded-md border-gray-800 p-2 bg-gray-100">
        <p className="text-center text-3xl mb-3">GoIt school certificate</p>
        <ul className="flex justify-center gap-5">
          {images.map((el, index) => (
            <li key={index}>
              <Image
                src={el.src}
                alt={`certificate page ${index + 1}`}
                width={100}
                height={200}
                className="cursor-pointer transition duration-150 hover:scale-110"
                onClick={() => handleChangeState(el.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <Modal
      setCurrentImage={setCurrentImage}
      currentImage ={currentImage}
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
    </>
  );
}
