import jsHw from "../public/js-home-work.jpg";
import htmlHw from "../public/html-home-work.jpg";
import portfolio from "../public/portfolio.jpg";
import provider from "../public/provider.jpg";
const heroSkills = [
  "On-page SEO",
  "Off-page (Off-site) SEO",
  "Seo аналітика",
  "Збір семантичного ядра та кластеризація його", 
  "Google Search Console", 
  "Google Tag Manager", 
  // "", 
  "Html5",
  "Css3",
  "Sass",
  "Bem",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Redux",
  "Zustand",
  "Styled-components",
  "Next.js",
  "Tailwind Css",
];
const heroProjects = [
  {
    id: 1,
    discription:
      "Проект 'Веб студія' фреймворк Next.js, для стилізації використав TailwindCss.",
    livePage: "https://web-studio-next-gamma.vercel.app/",
    code: "https://github.com/PavloGram/web-studio-next",
    stack: ["Html5", "Css3", "JavaScript", "Sass"],
    img: htmlHw,
  },
  {
    id: 2,
    discription:
      "Проект 'Інтернет провайдер', фреймворк Next.js, для стилізації використав TailwindCss, менеджер стану Zustand.",
    livePage: "https://portfolio-project-provider.vercel.app/",
    code: "https://github.com/PavloGram/portfolio-project-provider",
    stack: ["Html5", "Css3", "JavaScript", "Sass"],
    img: provider,
  },
  {
    id: 3,
    discription:
      "Проект 'Фільмотека', фреймворк Next.js, для стилізації використав Scss, менеджер стану Redux. В цьому проекті написав свою пагінацію.",
    livePage: "https://film-next-rho.vercel.app/",
    code: "https://github.com/PavloGram/film-next",
    stack: ["Html5", "Css3", "JavaScript", "Bem", "Next.js", "Scss"],
    img: jsHw,
  },
  {
    id: 4,
    discription:
      "Проект 'Портфоліо', фреймворк Next.js, для стилізації використав TailwindCss.",
    livePage: "https://resume-pied-pi.vercel.app/",
    code: "https://github.com/PavloGram/resume",
    stack: ["Html5", "Css3", "JavaScript", "Bem", "Next.js", "Tailwind Css"],
    img: portfolio,
  },
];
const heroContacts = [
  {
    id: 1,
    name: "Email:",
    href: "mailto:hrampavlo@gmail.com",
    shortHref: "hrampavlo@gmail.com",
  },
  {
    id: 2,
    name: "Tel:",
    href: "tel:+380506624525",
    shortHref: "+380506624525",
  },
  {
    id: 3,
    name: "LinkedIn:",
    href: "https://www.linkedin.com/in/%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE-%D0%B3%D1%80%D0%B0%D0%BC%D0%B0%D0%B6%D0%BE%D1%80%D0%B0-44650b26b/",
    shortHref: "www.linkedin.com",
  },
  {
    id: 4,
    name: "Telegram:",
    href: "https://t.me/PavloHramazhora",
    shortHref: "t.me/PavloHramazhora ",
  },
];

const aboutHero =
  "Вітаю, мене звати Павло Грамажора, я є Front-End розробником який зацікавився SEO, володію навичками Html розмітки, стилізації за допомогою Css, а також бібліотек (Style-components, TailwindCss, Css.module), володію також мовою JavaScript, та фреймфорком React.js і похідним фреймворком Next.js.  В процесі вивчення фронтенду познайомився з Seo-оптимізацією і зрозумів що, без грамотного плану-оптимізації 90% веб-додатків немає сенсу будувати. Вивчаю Seo по чек-листу з сайту Serpstat (посилання даю нижче), Вважаю цей скілл дуже крутим і планую розвивати в собі навички та вміння володіння оптимізацією додатків і надалі. Люблю працювати, беру на себе відповідальність не тільки за успіхи, а і за невдачі. Девіз - підкова не буде приносити тобі вдачі рівно до того моменту, доки ти її не приб’єш до свого копита і не почнеш працювати!     ";
const serpStatLink = "https://serpstat.com/ru/blog/chto-dolzhen-znat-seo-spetcialist/";
  export { heroContacts, heroProjects, heroSkills, aboutHero, serpStatLink };
