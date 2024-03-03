import { aboutHero, heroName, heroProjects, serpStatLink } from "@/data/data";
import React from "react";
import Gallery from "./Gallery";
import Image from "next/image";

function ProjectInfo() {
  return (
    <>
      <div className=" max-w-[340px] sm:max-w-[948px] ">
        <div className="border rounded-md border-gray-800 p-2 bg-gray-100">
          <p className="indent-3 pb-4">
            Вітаю, мене звати Павло Грамажора, я є SEO-junior. Володію навичками
            оптимізації веб додатків, а саме проведення аудиту сайтів на
            наявність помилок які можуть заважати просуванню, та складання ТЗ
            для спеціалістів які будуть вносити правки. Можу збирати семантичне
            ядро, чистити, та кластеризувати його.
          </p>
          <p className="indent-3 pb-4">
            Можу налаштовувати файли robots.txt, sitemap.xml. Знайомий з такими
            інструментами та поняттями, як Google Search Console, Serpstat,
            Screaming Frog, Google Docs, Google Sheets, мікророзмітка, інтент запиту,
            частотність ключа, типи сайтів, YMYL фактори, E-A-T фактори. Маю
            сертифікат Google Analytics, Serpstat та сертифікат від школи GoIt
            про проходження курсів за спеціальністю Front-end developer.
          </p>
          <p className="indent-3 pb-4">
            Також маю некомерційний досвід Front-end розробки, добре розбираюся
            в мові розмітка Html, мові стилізації Css, володію непоганим рівнем
            знання JavaScript.
          </p>
          <p className="indent-3 pb-4">
            До приходу в Іт майже 8 років працював у сфері виготовлення
            весільної сувенірної продукції, працював з деревом, воском, фарбами.
            Працював на себе. Дякую за Вашу увагу, буду вдячний за будь-який
            фідбек.
          </p>
          <p className="indent-3 pb-4 font-semibold text-center pt-5">
            Нижче подаю посилання на сертифікати та курси по яких вивчав і
            вивчаю Seo.
          </p>
          <div className="flex flex-col">
                 <a
            className="  transition duration-150 hover:text-gray-500  indent-3"
            href={serpStatLink}
          >
            Посилання на чек-лист Serpstat &apos;що повинен знати
            seo-junior&apos;
          </a>
          <a 
          className="  transition duration-150 hover:text-gray-500  indent-3"
          href="https://www.youtube.com/watch?v=T9PPUg5o5YU&list=PL7Ssx9xkm05JT0VbpdZ0h0ju0bzXzvKQF&index=2">
            Посилання на безкоштовний відео курс по SEO
          </a>
          <a
            className="  transition duration-150 hover:text-gray-500 indent-3"
            href="https://skillshop.credential.net/330caa09-099b-422b-8cd1-462f47cf3d5a#gs.4owwjg"
          >
            Посилання на сертифікат Google Analytics
          </a>
          <a
            className="  transition duration-150 hover:text-gray-500 indent-3"
            href="https://app.academyocean.com/verify/y5aJI9tQZwO2Ec9i"
          >
            Посилання на сертифікат Serpstat
          </a>
          </div>
     
        </div>

        <Gallery />
        {/* <div className="border rounded-md border-gray-800 p-2 mt-3 bg-gray-100  ">
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
        </div> */}
      </div>
    </>
  );
}

export default ProjectInfo;
