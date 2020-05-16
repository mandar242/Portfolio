import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Mandar Kulkarni', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Mandar',
  subtitle: '',
  cta: '',
  subtext: 'MS Computer Science. Cal State Long Beach.',
  subsubtext: 'Class of 2021.',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Computer Science Graduate student at California State University, Long Beach. Previously I have worked with Accenture as Associate Software Engineer and with Indicus Software as Software Engineer Intern.',
  paragraphTwo:
    'Having experience in various domains such as Web Application Development, Software Development and Internet of Things. I have good understanding of Javascript frameworks such as React.js, Node.js and database systems such as MongoDB and MySQL.',
  paragraphThree:
    'Also have understanding of Agile  Development, Docker, Kubernetes and tools such as git and Postman. Being a passionate techie, in my spare time, you can find me exploring new tools and technologies and working on personal projects, or as I like to call them.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'bughound.png',
    title: 'Bug Hound',
    info:
      'A web-based bug recording and tracking software product. This will allow users to manage, record, and update any bugs during their development of their projects.',
    info2: '',
    url: '',
    repo: 'https://github.com/mandar242/Bughound', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'vcs.jpg',
    title: 'Version Control System',
    info:
      'Provides users functionalities to create, check-in, check-out, merge and modify repositories. Also maintains the history of operations performed.',
    info2: '',
    url: '',
    repo: 'https://github.com/mandar242/Version-Control-System-using-Node.js', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'port.JPG',
    title: 'Personal Portfolio',
    info:
      'A fully responsive personal portfolio website with features such as Single page layout, Modern UI design, Animations and styled with Bootstrap and custom SCSS.',
    info2: '',
    url: 'https://mandar242.netlify.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mandar242@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/mandar242',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mandar242',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://www.github.com/mandar242',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
