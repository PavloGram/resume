import { aboutHero, heroName, heroProjects } from "@/data/data";
import React from "react";
import Gallery from "./Gallery";
import Image from "next/image";

function ProjectInfo() {
  return (
    <>
      <div className="min-w-[340px] max-w-[340px] sm:max-w-[948px] ">
        <div className="border rounded-md border-black p-2 bg-gray-100">
          <p className="indent-3">{aboutHero}</p>
        </div>

        <Gallery />
        <div className="border rounded-md border-black p-2 mt-3 bg-gray-100">
          <p className="text-2xl text-center">Projects</p>
          <ul className="flex flex-col gap-3">
            {heroProjects.map((el) => (
              <li key={el.id} className="md:flex md:justify-between md:gap-3">
               
                <div >
                  <p className="indent-3">{el.discription}</p>
                  <p className="font-semibold">
                    Live page:<a href={el.livePage}>{el.livePage}</a>
                  </p>
                  <p className="font-semibold">
                    Code:<a href={el.code}>{el.code}</a>
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">Stack: </p>
                    <ul className="flex flex-wrap gap-1">
                      {el.stack.map((element, index) =>
                        Number(el.stack.length) === index + 1 ? (
                          <li className="m-0" key={index}>
                            <p>{element}.</p>
                          </li>
                        ) : (
                          <li className="m-0" key={index}>
                            <p>{element},</p>
                            
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
               
                  <a href={el.livePage} className="min-w-[300px] md:min-w-[180px] md:max-w-[180px] cursor-pointer hover:scale-105">
         
                  <Image src={el?.img} alt='work photo' width={1800}/> 
                </a>
                
                
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectInfo;
