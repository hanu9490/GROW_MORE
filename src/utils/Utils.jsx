import { trainingImages } from "../assets/icons/icons";
let {
  html,
  css,
  js,
  react,
  nodejs,
  python,
  data_analyst,
  data_science,
} = trainingImages;

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
  {
    title: "Python",
    description:
      "Master Python, the versatile and popular programming language. This course will take you from the basics to advanced topics, including data analysis, web scraping, and automation. Python is widely used in web development, data science, and machine learning.",
    image: python,
  },
  {
    title: "Data Analyst",
    description:
      "Become a data analyst by mastering data analysis techniques and tools. This course will cover data manipulation, visualization, and interpretation, enabling you to derive valuable insights from data.",
    image: data_analyst,
  },
  {
    title: "Data Science",
    description:
      "Become a data scientist by mastering data science concepts and techniques. This course will cover data preprocessing, model building, training, testing, and interpretation, enabling you to build and deploy machine learning models.",
    image: data_science,
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
