import jsHw from '../public/js-home-work.jpg'
import htmlHw from '../public/html-home-work.jpg'
import portfolio from '../public/portfolio.jpg'
const heroSkills = [
  "Html5",
  "Css3",
  "Sass",
  "Bem",
  "JavaScript",
  "React.js",
  "TypeScript",
  "Redax",
  "Styled-components",
  "Next.js",
  "Tailwind Css",
];
const heroProjects = [
  {
    id: 1,
    discription: "A simple learning project written in pure JavaScript.",
    livePage: "https://pavlogram.github.io/goit-markup-hw-08/",
    code: "https://github.com/PavloGram/goit-markup-hw-08",
    stack: ["Html5", "Css3", "JavaScript", "Sass", "Bem"],
    img: htmlHw
  },
  {
    id: 2,
    discription:
      "This is also an educational project, but already a group one, in which I played the role of teamLead."+" "+
      "This web application is written on the React framework, styling is done using the Styled Components library,"+" "+ 
      "styles are created for viewing on three types of devices, mobile devices, tablets with a width of 768px,"+" "+
      "and a desktop version with a width of 1280px, this application allows you to view a list of popular movies"+" "+
      "as well as movies by search, view more detailed information in a modal window, and save movies in two lists: 'watched' and 'queue'.",
    livePage: "https://pavlogram.github.io/project-group-13/",
    code: "https://github.com/PavloGram/project-group-13",
    stack: ["Html5", "Css3", "JavaScript", "Sass", "Bem"],
    img: jsHw
  },
  {
    id: 3,
    discription:
      "This is a repeat of the previous project, only done by me using the React framework," +" "+
      "the Styled-components library was used for styling.",
    livePage: "https://spectacular-dango-301146.netlify.app/",
    code: "https://github.com/PavloGram/film",
    stack: ["Html5", "Css3", "JavaScript", "Bem", "React.js", "Styled-components"],
    img: jsHw
  },
  {
    id: 4,
    discription:
      " Actually, the fourth project is the portfolio itself, made using the Next.js framework," +" "+
      " the Tailwind Css library was used for styling.",
    livePage: "https://resume-steel-five.vercel.app/",
    code: "https://github.com/PavloGram/resume",
    stack: [ 'Html5', 'Css3', 'JavaScript', 'Bem', 'Next.js', 'Tailwind Css'],
    img: portfolio
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
  "Hello my name is Pavlo Hramazhora, I am a Front-End developer, my stack is React.js and related" +" "+
  "technologies Next.js Tailwind Styled-components, I like minimalism" +" "+
  "when writing code, that is, only the necessary set of tools and" +" "+
  "technologies, I like to learn new development technologies and solve" +" "+
  "complex tasks.";
export { heroContacts, heroProjects, heroSkills, aboutHero };
