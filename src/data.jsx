import proj1 from "./assets/1proj.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";
import proj4 from "./assets/proj4.png";
import logo from "./assets/logo.png";
export const data = {
  image: logo,
  fio: "Бондарев Александр",
  prof: "Front-end developer",
  bio: "Занимаюсь Front-end разработкой 1 год. Разбираюсь в Html, Css, JavaScript, React",
  skills: ["Html", "Css", "JavaScript", "React"],
  projects: [
    {
      image: proj1,
      title: "Научиться Учиться",
      description: "Лендинг, сайт по правилам обучения человека",
      langs: ["HTML, CSS, Лендинг"],
      link: "https://alexanderweb123.github.io/learntolearn/",
    },
    {
      image: proj2,
      title: "Low Studio",
      description: "Магазин для продажи сайтов, музыки, логотипов и т.д.",
      langs: ["HTML, CSS, JavaScript, Лендинг, Магазин"],
      link: "https://alexanderweb123.github.io/lowstudiobuy/",
    },
    {
      image: proj3,
      title: "Магазин Смузи",
      description: "Лендинг, магазин смузи, макет, не реальный магазин",
      langs: ["HTML, CSS, JavaScript, Лендинг, Магазин, Макет"],
      link: "https://alexanderweb123.github.io/smoothie/",
    },
    {
      image: proj4,
      title: "Калькулятор Валют",
      description: "Лендинг, рабочий калькулятор валют",
      langs: ["HTML, CSS, JavaScript, Лендинг, Калькулятор"],
      link: "https://alexanderweb123.github.io/valcalc/",
    },
  ],
  contacts: {
    telegram: (
      <a href="https://t.me/ashabondarev" target="_blank">
        @ashabondarev
      </a>
    ),
    email: (
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=slavaflo947@gmail.com"
        target="_blank"
      >
        slavaflo947@gmail.com
      </a>
    ),
    phone: <a href="sms:+79165681929">Написать сообщение</a>,
  },
};
