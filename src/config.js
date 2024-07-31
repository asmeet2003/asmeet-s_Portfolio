// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "asmeet2003";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I am passionate about technology and its potential to enhance lives and productivity. My expertise spans React, Node.js, Express.js, MongoDB, Java, Python, and JavaScript. I leverage these skills to build robust and innovative solutions, blending front-end and back-end technologies to create seamless and efficient applications.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React js",
  },
  {
    id: 2,
    skill: <Icon icon="logos:nodejs-icon" className="display-4" />,
    name: "Node js",
  },
  {
    id: 3,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "Express js",
  },
  {
    id: 4,
    skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
    name: "MongoDB",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:language-java" className="display-4" />,
    name: "JAVA",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 7,
    skill: <Icon icon="simple-icons:redux" className="display-4" />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <Icon icon="mdi:language-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 9,
    skill: <Icon icon="mdi:language-javascript" className="display-4" />,
    name: "JavaScript",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["vegStore", "ReactCart", "example-3"];

// Replace the default GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";



// // Skills icons - https://icon-sets.iconify.design/
// import { Icon } from "@iconify/react";

// // Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// // import newLogo from "./images/yourFileName"

// // Hero Images (add your images to the /images directory with the same names)
// import HeroLight from "./images/hero-light.jpg";
// import HeroDark from "./images/hero-dark.jpg";

// // Projects Images (add your images to the images directory and import below)
// import Logo from "./images/logo.svg";

// /* START HERE
//  **************************************************************
//   Add your GitHub username (string - "YourUsername") below.
// */
// export const githubUsername = "asmeet2003";

// // Navbar Logo image
// export const navLogo = null;

// /* Main
//  ************************************************************** 
//   Add a custom blog icon or update the hero images for the Main section.
// */
// export const Blog = null;

// // Hero images (imported above - lines 8-9)
// export { HeroLight as Light };
// export { HeroDark as Dark };

// /* About Me
//  **************************************************************
//   Add a second paragraph for the about me section.
// */
// export const moreInfo =
//   "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

// /* Skills
//  ************************************************************** 
//   Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
// */
// export const skillData = [
//   {
//     id: 1,
//     skill: <Icon icon="mdi:react" className="display-4" />,
//     name: "React js",
//   },
//   {
//     id: 2,
//     skill: <Icon icon="logos:nodejs-icon" className="display-4" />,
//     name: "Node js",
//   },
//   {
//     id: 3,
//     skill: <Icon icon="simple-icons:express" className="display-4" />,
//     name: "Express js",
//   },
//   {
//     id: 4,
//     skill: <Icon icon="simple-icons:mongodb" className="display-4" />,
//     name: "MongoDB",
//   },
//   {
//     id: 5,
//     skill: <Icon icon="mdi:language-java" className="display-4" />,
//     name: "JAVA",
//   },
//   {
//     id: 6,
//     skill: <Icon icon="mdi:language-html5" className="display-4" />,
//     name: "HTML",
//   },
//   {
//     id: 7,
//     skill: <Icon icon="simple-icons:redux" className="display-4" />,
//     name: "Redux",
//   },
//   {
//     id: 8,
//     skill: <Icon icon="mdi:language-css3" className="display-4" />,
//     name: "CSS",
//   },
//   {
//     id: 9,
//     skill: <Icon icon="mdi:language-javascript" className="display-4" />,
//     name: "JavaScript",
//   },
// ];


// // Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
// export const resume = null;

// /* Projects
//  ************************************************************** 
//   List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
// */
// export const filteredProjects = ["example-1", "example-2", "example-3"];

// // Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
// export const projectCardImages = [
//   {
//     name: "example-1",
//     image: Logo,
//   },
// ];

// /* Contact Info
//  ************************************************************** 
//   Add your formspree endpoint below.
//   https://formspree.io/
// */
// export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// // Footer icons theme (light or dark)
// export const footerTheme = "dark";
