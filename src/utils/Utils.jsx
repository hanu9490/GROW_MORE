import { trainingImages } from "../assets/icons/icons";
let { html, css, js, react, nodejs } = trainingImages;

export const courses = [
  {
    title: "React",
    description:
      "Learn to build complete web applications from front-end to back-end. This course emphasizes React for the front-end, ensuring you master one of the most popular libraries for building dynamic user interfaces.",
    image: react,
  },
  {
    title: "JavaScript",
    description:
      "Master JavaScript, the language that powers the web. This course will take you from the basics to advanced topics, including DOM manipulation, ES6+ features, asynchronous programming, and working with APIs. JavaScript is the key to adding interactivity and functionality to web applications.",
    image: js,
  },
  {
    title: "Node.js",
    description:
      "Master server-side development using Node.js. This course will guide you through building scalable and efficient backend applications with Node.js, a runtime environment that lets you run JavaScript on the server.",
    image: nodejs,
  },
  {
    title: "HTML",
    description:
      "Dive into HTML to understand the structure of web pages. This course will cover the foundational elements of web development, enabling you to create well-structured and accessible content for the web.",
    image: html,
  },
  {
    title: "CSS",
    description:
      "Become proficient in CSS to style and layout web pages. This course will teach you how to create visually appealing and responsive designs, making your web applications not only functional but also beautiful.",
    image: css,
  },
];

export const jobData = [
  {
    title: "Software development",
    overview: ["Overview", "DevOps", "CI/CD", "Languages", "Web Scraping"],
    active: true,
  },
  {
    title: "Machine Learning",
    overview: [
      "Overview",
      "Data Preprocessing",
      "Model Building",
      "Model Training",
      "Model Testing",
    ],
    active: false,
  },
  {
    title: "Data Science",
    overview: [
      "Overview",
      "Data Analysis",
      "Data Visualization",
      "Data Interpretation",
      "Data Presentation",
    ],
    active: false,
  },
  {
    title: "Web Development",
    overview: ["Overview", "Frontend", "Backend", "Full Stack", "Database"],
    active: true,
  },
  {
    title: "App Development",
    overview: [
      "Overview",
      "Android Development",
      "iOS Development",
      "Cross Platform Development",
      "App Hosting",
    ],
    active: true,
  },
  {
    title: "Cyber Security",
    overview: [
      "Overview",
      "Network Security",
      "Web Security",
      "Malware Analysis",
      "Incident Response",
    ],
    active: false,
  },
];
