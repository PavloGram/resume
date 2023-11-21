import { aboutHero, heroName, heroProjects } from "@/data/data";
import React from "react";
import Gallery from "./Gallery";
import Image from "next/image";

function ProjectInfo() {
  return (
    <>
      <div className=" max-w-[340px] sm:max-w-[948px] ">
        <div className="border rounded-md border-gray-800 p-2 bg-gray-100">
          <p className="indent-3">{aboutHero}</p>
        </div>

        <Gallery /> 
         <div className="border rounded-md border-gray-800 p-2 mt-3 bg-gray-100  ">
          <p className="text-3xl text-center">Projects</p>
          <ul className="flex flex-col gap-3 ">
            {heroProjects.map((el) => (
              <li key={el.id} className="lg:flex lg:justify-between md:gap-3">
                <div>
                  <p className="indent-3">{el.discription}</p>
                  <p
                    className="font-semibold w-[270px] md:w-[400px] lg:w-full"
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Live page:
                    <a
                      href={el.livePage}
                      className="transition duration-150 hover:text-gray-500   "
                    >
                      {el.livePage}
                    </a>
                  </p>
                  <p
                    className="font-semibold w-[270px] md:w-[400px] lg:w-full"
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Code:
                    <a
                      href={el.code}
                      className="transition duration-150 hover:text-gray-500 "
                    >
                      {el.code}
                    </a>
                  </p>
                  <div className="flex flex-wrap items-center ">
                    <p className="font-semibold pr-1">Stack: </p>

                    {el.stack.map((element, index) =>
                      Number(el.stack.length) === index + 1 ? (
                        <p key={index} className="pr-1">
                          {element}.
                        </p>
                      ) : (
                        <p key={index} className="pr-1">
                          {element},
                        </p>
                      )
                    )}
                  </div>
                </div>

                <a
                  href={el.livePage}
                  className="min-w-[300px] md:min-w-[180px] md:max-w-[180px] cursor-pointer transition duration-150 hover:scale-105"
                >
                  <Image src={el?.img} alt="work photo" width={1800} />
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
