/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhinaav Ramesh",
  title: "Hey everyone! This is Abhinaav",
  subTitle: emoji(
    "Performance-driven Data Scientist with 2 years of hands-on experience in Machine learning and Data Science"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1qtmbdRXlV9EtSv9wlXXiaAK4OejtvYfV/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AbhinaavRamesh",
  linkedin: "https://www.linkedin.com/in/abhinaav-ramesh/",
  gmail: "abhinaav@usc.edu",
  instagram: "https://www.instagram.com/abhinaav_ramesh/",
  googleScholar:"https://scholar.google.com/citations?user=BaAmal8AAAAJ",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA SCIENTIST WHO WANTS TO EXPLORE EVERY NEW AVENUE",
  skills: [
    emoji(
      "⚡ Design experiments and build data models leveraging analytical tools."
    ),
    emoji("⚡ Solve complex business problems and deliver top-notch strategies and solutions"),
    emoji(
      "⚡ Proficient python developer with innovative approaches and extra-ordinary prototyping skills"
    ),
    emoji(
      "⚡ Statistical Analysis, Multivariate Analysis, Feature Engineering, Data Modeling, Correlation Analysis, Business Intelligence, Stochastic Models, A/B Testing, Hypothesis Validation"
    ),
    emoji(
      "⚡ TensorFlow, PyTorch, Caffe, Scikit-Learn, Azure-ML, Sage-Maker Studio"
    )

  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Google Cloud Platform",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Southern California",
      logo: require("./assets/images/uscLogo.png"),
      subHeader: "Masters in Healthcare Data Science",
      duration: "August 2021 - May 2023",
      desc: "Research Assistant - Imaging Genetics Center, Institute of NeuroImaging Informatics",
      descBullets: [
        "GPA - 4",
        "Relevant Course Work: Foundations of Data Management, Machine Learning, Database Systems, Data Mining, Medical Imaging Informatics"
      ]
    },
    {
      schoolName: "PSG College of Technology",
      logo: require("./assets/images/psgLogo.png"),
      subHeader: "Bachelors in Biomedical Engineering",
      duration: "June 2016 - September 2020",
      desc: "Ranked top 10% in the program. Best All-Rounder Student",
      descBullets: [
        "GPA - 3.63",
        "Relevant Course Work: Pattern Recognition, AI and Exper Systems, Python Programmign, Object Oriented Programming, Deep learning"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Programming", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Front-end",
      progressPercentage: "60%"
    }

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist Intern",
      company: "Aruba - HPE",
      companylogo: require("./assets/images/arubaLogo.png"),
      date: "May 2022 - August 2022",
      desc: "Effective identification of the Client Device Type from Network Telemetry Data using Natural Language Processing and Machine Learning"
    },
    {
      role: "STUDENT RESEARCHER – IMAGING GENETICS CENTER",
      company: "USC INI",
      companylogo: require("./assets/images/iniLogo.png"),
      date: "January 2022 – Present",
      desc: "Work collaboratively towards modeling brain age from Magnetic Resonance Imaging (MRI) data through deep neural networks and advanced Generative Adversarial Networks (GANs)."      
    },
    {
      role: "Member Techincal Services - AI",
      company: "Robert Bosch Gmbh",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "August 2020 – June 2021",
      desc: "Created AI algorithms with R&D groups, Healthcare Business (RBEI/EHC) in digital pathology solutions, Peripheral Blood Smears, and Whole Slide Imaging. Efficient ROI identification using edge Neural Networks and effective Image processing techniques."      
    },
    {
      role: "Project Trainee",
      company: "Robert Bosch Gmbh",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "December 2019 – May 2020",
      desc: "Machine Learning Intern"
    },
    {
      role: "Project Trainee",
      company: "Robert Bosch Gmbh",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "May 2019 – July 2019",
      desc: "Summer Intern - SDE ML"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// // Some big projects you have worked on

// const bigProjects = {
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Certification",
      subtitle:
        "The Data Analyst Certification, developed by Google: Navigate tools and platforms to process, analyze, and visualize data.",
      image: require("./assets/images/googleDataAnalytics.png"),
      imageAlt: "Google Data Analytics Certification",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1US6-GYF6QL7BrdO62pn7S5LpIwPjMXaZ/view?usp=sharing"
        },
        {
          name: "Credly Badge",
          url: "https://www.credly.com/badges/2b294dca-7e09-43b1-8476-bf60afe95f87/linked_in?t=rgbwzx"
        },
        {
          name: "Google Data Analytics Certification",
          url: "https://grow.google/certificates/data-analytics/#?modal_active=none"
        }
      ]
    },
    {
      title: "Microsoft Professional Program in Artificial Intelligence",
      subtitle:
        "10 course specialization including a capstone project to get skilled in fundamentals of AI.",
      image: require("./assets/images/msLogo.png"),
      imageAlt: "Microsoft",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mIZQafEnFZvsuuMjVveqLvA8dIeWnGot/view?usp=sharing"
        }
      ]
    },
    {
      title: "Data Structures and Algorithms Specialization",
      subtitle:
        "UC San Diego | Coursera",
      image: require("./assets/images/ucsdLogo.svg"),
      imageAlt: "UC San Diego",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1moQ69SiAxG_ChO5V0gA2LDEDy460Ll6S/view?usp=sharing"
        }
      ]
    },
    {
      title: "Big Data Specialization",
      subtitle:
        "UC San Diego | Coursera",
      image: require("./assets/images/ucsdLogo.svg"),
      imageAlt: "UC San Diego",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mrlhA8u9OYk3uSdkEsQwbZswTQEvZCLV/view?usp=sharing"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle:
        "DeepLearning.AI",
      image: require("./assets/images/DeepLearningAI.png"),
      imageAlt: "Deeplearning.ai",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/11_O-RBFmJiJxkjE54kLlLHii84n6wfJ9/view?usp=sharing"
        }
      ]
    },
    {
      title: "TensorFlow Developer Specialization",
      subtitle:
        "DeepLearning.AI",
      image: require("./assets/images/DeepLearningAI.png"),
      imageAlt: "Deeplearning.ai",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mugIxcTiixww-QkUeH93TnVnZkOLJUCN/view?usp=sharing"
        }
      ]
    },
    {
      title: "Generative Adversarial Networks Specialization",
      subtitle:
        "DeepLearning.AI",
      image: require("./assets/images/DeepLearningAI.png"),
      imageAlt: "Deeplearning.ai",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1mwDMZWxr6UMkRnATils1G8pYhrHXlRUp/view?usp=sharing"
        }
      ]
    },
    {
      title: "AI in Healthcare Specialization",
      subtitle:
        "Stanford Online",
      image: require("./assets/images/stanfordLogo.png"),
      imageAlt: "Stanford University",
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/110Kh4i11ODrcODopmXeJkub88V-ZCHE9/view?usp=sharing"
        }
      ]
    }



  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Actively Looking for Full-time opportunities in Data Science or Machine Learning!",
  number: "+12134219945",
  email_address: "abhinaav@usc.edu"
};

const bigProjects = {};
const blogSection = {};
const talkSection = {};
const podcastSection = {};
const twitterDetails = {};





const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
