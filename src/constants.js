// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";

import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import androidStudioLogo from "./assets/tech_logo/androidStudio.png";
import flutterLogo from "./assets/tech_logo/flutter.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import laravelLogo from "./assets/tech_logo/laravel.png";
import dartLogo from "./assets/tech_logo/dart.png";

// Experience Section Logo's

// Education Section Logo's

import TmvLogo from "./assets/education_logo/tmvlogo.jpg";

// Project Section Logo's

import fssamuLogo from "./assets/work_logo/fssamu.png";
import EcommerceLogo from "./assets/work_logo/ecommerce.png";
import weatherLogo from "./assets/work_logo/weather.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Flutter", logo: flutterLogo },
      { name: "Dart", logo: dartLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap 5", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Laravel", logo: laravelLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Dart" },

      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Android Studio", logo: androidStudioLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://cineguru.in/backend/uploads/settings/1756199932.webp",
    role: "Fullstack Developer, Flutter Developer",
    company: "Cineguru Pvt Ltd",
    date: "Dec 2024 - May 2025",
    desc: "Developed dynamic and scalable web applications and android development using the Full stack and full stack android, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React JS",
      "Express JS",
      "Node JS",
      "Bootstarp 5",
      "Tailwind CSS",
      "MongoDb",
      "Laravel",
      "Php",
      "Flutter",
      "dart",
      "Hostinger",
      "MySQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://content3.jdmagicbox.com/v2/comp/mumbai/65/022p8400865/catalogue/sanskardham-vidyalaya-goregaon-west-mumbai-english-medium-schools-u33b9msox8.jpg",
    school: "Sanskardham College Of Science, Mumbai",
    date: "Sept 2017 - Aug 2019",
    grade: "73.2%",
    desc: "I completed my 12th science from Sanskardham College, Mumbai",
    degree: "Bachelor of Computer Application - BCA",
  },
  {
    id: 1,
    img: TmvLogo,
    school: "Saraf College, Mumbai",
    date: "Sept 2021 - Aug 2024",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Bachelor of Computer Application (BCA) from Saraf College, Mumbai. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA",
  },
];

export const projects = [
  {
    id: 0,
    title: "FSSAMU",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: fssamuLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "",
    webapp: "https://fssamu.in",
    playstore:
      "https://play.google.com/store/apps/details?id=com.fssamu&hl=en_IN&pli=1",
  },
  {
    id: 1,
    title: "Ecommerce Website ",
    description:
      "Clothing Blue Ten is a sleek e-commerce platform showcasing modern fashion, built with Next.js and deployed on Vercel for optimal performance. It features a responsive, user-friendly interface with a dynamic product catalog and secure checkout. The minimalist design emphasizes accessibility and engagement, catering to style-conscious shoppers across devices",
    image: EcommerceLogo,
    tags: [
      "React JS",
      "Laravel",
      "MySQL",
      "SASS",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
    ],
    github: "https://github.com/Shivambaranwal267/clothing",
    webapp: "https://clothing-blue-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Weather App is a streamlined application developed to provide real-time weather updates and forecasts for users worldwide. Built with modern web technologies, it features an intuitive interface displaying key weather metrics, such as temperature, humidity, and wind speed. Hosted on GitHub, the project showcases proficiency in API integration and responsive design for seamless cross-device functionality",
    image: weatherLogo,
    tags: ["Java", "API", "Android Studio"],
    github: "https://github.com/Shivambaranwal267/Weather-App",
  },
  {
    id: 3,
    title: "Blinkit Clone App",
    description:
      "The Blinkit Clone App is a Flutter-based frontend project that replicates the modern grocery shopping experience of Blinkit with a clean UI and smooth navigation. It is designed to showcase responsive layouts, animations, and reusable components for a real-world grocery delivery app.",
    image:
      "https://yellowslice.in/bed/wp-content/uploads/2024/08/1-Feature-Image-1.jpg",
    tags: ["Flutter", "Dart", "Figma", "Android Studio"],
    github: "https://github.com/Shivambaranwal267/blinkitclone",
  },
  {
    id: 4,
    title: "Construction website",
    description:
      "Our construction website is designed to showcase modern construction services, projects, and expertise in a professional and user-friendly way. Built with a responsive and sleek design, the website highlights services such as residential, commercial, and industrial construction, renovations, and interior design solutions.The homepage features a hero banner with bold visuals, quick access to core services, and a project portfolio section to build trust. An about us page emphasizes experience, safety, and quality assurance, while the contact page includes inquiry forms, location maps, and direct call-to-action buttons for quick communication.",
    image:
      "https://res.cloudinary.com/dodo59mn6/image/upload/v1757683782/Screenshot_2025-09-12_185831_sxaq8q.png",
    tags: ["ReactJs", "Figma", "Laravel", "Vs Code", "Postman"],
    webapp: "https://construction-dusky-eta.vercel.app/",
    github: "https://github.com/Shivambaranwal267/construction",
  },
];
