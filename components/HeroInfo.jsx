import { heroContacts, heroSkills } from "@/data/data";
import Image from "next/image";
import React from "react";

function HeroInfo() {
  return (
    <div className="max-w-[340px] mb-3 sm:mr-3 sm:mb-0 max-h-full bg-gray-800 flex flex-col p-5 text-gray-300 rounded-md ">
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden mb-10">
        <Image
          src="/hero.jpg"
          width={454}
          height={550}
          alt="hero"
          priority={true}
        />
      </div>
      <div className="border rounded-md border-gray-300 p-2 mb-3">
        <p>My contacts:</p>
        <ul className="flex flex-wrap ml-3 ">
          {heroContacts.map((el) => {
            return (
              <li key={el.id}>
                <p>
                  {el.name}
                  <a href={el.href} className="hover:text-gray-400">
                    {el.shortHref}
                  </a>
                </p>
              </li>
            );
          })}
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Ukraine"
              className="ml-0 hover:text-gray-400"
            >
              I&#39;m from Ukraine
            </a>
          </li>
        </ul>
      </div>

      <div className=" border rounded-md border-gray-300 p-2">
        <p>My skills:</p>
        <ul className="flex flex-wrap gap-1 ml-3">
          {heroSkills.map((el, index) =>
            Number(heroSkills.length) === index + 1 ? (
              <li key={el}>
                <p>{el}.</p>
              </li>
            ) : (
              <li key={el}>
                <p>{el},</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default HeroInfo;
