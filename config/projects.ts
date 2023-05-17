type Project = {
  name: string;
  url: string;
  description: string;
  tags: Array<string>;
  image: string;
  isPublished?: boolean;
};

export const projects: Array<Project> = [
  // TODO: Add your projects here
  {
    name: "Ark Designs",
    url: "https://www.arkdesigns.studio/",
    description:
      "As the web developer behind Ark Designs' website, I am proud to present a captivating portfolio that embodies the transformative power of architecture. Through this platform, I invite you to explore our philosophy, approach, and exceptional projects. Witness the seamless integration of design and functionality as I bring the vision of Ark Designs to life online. Get inspired and let's embark on a journey to transform your architectural dreams into reality.",
    tags: [
      "React",
      "Firebase",
      "TypeScript",
      "MUI",
      "Design",
      "Web Development",
    ],
    image: "/projects/ark.png",
  },
  {
    name: "Cebu Furniture Connect",
    url: "https://www.cebufurnitureconnect.com/",
    description:
      "As the web developer behind Cebu Furniture Connect, I created a platform that brings together buyers and esteemed furniture manufacturers in the Visayas region. Through this platform, buyers can easily sign up, create profiles, and submit inquiries for their desired orders. I implemented a sophisticated matching system that connects buyers with the most suitable manufacturers based on their requirements. This streamlined process enables efficient communication, allowing manufacturers to reach out to buyers and facilitate successful orders and purchases. Experience the convenience and effectiveness of Cebu Furniture Connect in connecting buyers and manufacturers seamlessly.",
    tags: ["PHP", "Laravel", "TailwindCSS", "Design", "Web Development"],
    image: "/projects/cfif.png",
  },
  {
    name: "Spenza",
    url: "https://spenza-web-edmer664.vercel.app/",
    description:
      "Discover Spenza, the ultimate social food recipe app designed for culinary enthusiasts. With Spenza, you can explore, follow, and search for a wide range of delectable recipes shared by passionate cooks. What sets Spenza apart is its additional features, including pantry tracking and grocery lists. Keep tabs on your pantry items and effortlessly plan your shopping trips with the app's convenient pantry tracking and grocery list features. Join a vibrant community of food lovers, share your favorite recipes, and uncover endless culinary inspiration. Spenza brings people together through the joy of cooking and connects them through their shared love of food. Experience the power of Spenza today.",
    tags: [
      "React",
      "Firebase",
      "TypeScript",
      "MUI",
      "Design",
      "Web Development",
    ],
    image: "/projects/spenza.png",
  },
  {
    name: "Marcohly Builders and Designers Inc.",
    url: "https://marcohlyinc.ph/",
    description:
      "As a developer for MARCOHLY BUILDERS & DESIGNERS, INC., I created a responsive, feature-rich portfolio website to showcase their range of architectural and construction projects. Utilizing the latest web technologies, I designed interactive displays providing an optimal user experience that reflects the company's commitment to economy, durability, and beauty in their design and build concepts.",
    tags: ["Laravel", "TailwindCSS", "Design", "Web Development"],
    image: "/projects/marcohly.png",
  },
  {
    name: "Connect Outsourcing",
    url: "https://connect-outsourcing.com/",
    description: "",
    tags: ["Laravel", "Bootstrap", "Design", "Web Development"],
    image: "/projects/connect_outsourcing.png",
  },
  {
    name: "Saint Luke's Maternity Clinic",
    url: "https://www.saintlukesmaternity.com/",
    description: "",
    tags: ["Laravel", "Bootstrap", "Design", "Web Development"],
    image: "/projects/saint_lukes.png",
  },
  {
    name: "West Philippine Institute",
    url: "https://wpi.edu.edmer.xyz/",
    description: "",
    tags: ["React", "Design", "Web Development"],
    image: "/projects/wpi.png",
  },
  {
    name: "JokesAPI App",
    url: "https://github.com/edmer664/JokesAPI",
    description: "",
    tags: ["Android", "Java", "Design", "Mobile Development"],
    image: "/projects/jokesapi.png",
  },
  {
    name: "5BDF Corp.",
    url: "http://5bdf.ph/",
    description: "",
    tags: ["Laravel", "Bootstrap", "Design", "Web Development"],
    image: "/projects/5bdf.png",
  },
  {
    name: "TimeOut",
    url: "https://www.figma.com/proto/Ikkkp7U2mOMNZ1sRIWUYKI/TimeOut?node-id=194%3A1561",
    description: "",
    tags: ["Figma", "Design"],
    image: "/projects/timeout.png",
  },
  // {
  //   name: "BuyTPL",
  //   url: "https://buytpl.com/",
  //   description: "",
  //   tags: ["Laravel", "Tailwind", "Design", "Web Development"],
  //   image: "/projects/buytpl.png",
  // },
  {
    name: "getDone()",
    url: "https://www.figma.com/file/u9Af25HIIhpuriHhP4CeKm/getDone()?type=design&node-id=0%3A1&t=W3hktXMIGiqR0HyS-1",
    description: "",
    tags: ["Figma", "Design"],
    image: "/projects/getdone.png",
  },
  // {
  //   name: "Easymanager",
  //   url: "",
  //   description: "",
  //   tags: ["React", "Laravel", "Design", "Web Development"],
  //   image: "/projects/easymanager.png",
  // },
];

export default projects;
