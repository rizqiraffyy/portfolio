import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Rizqi",
  lastName: "Raffy",
  name: `Rizqi Raffy Imam Malik`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "rizqiraffy@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rizqiraffyy",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rizqiraffy/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/rizqiraffy/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@rizqiraffy",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/growt/dashboard.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio showcasing my work as a ${person.role}`,
  headline: <>Building realible software systems for real-world applications</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Selected project
        </Text>
      </Row>
    ),
    href: "/work/growt",
  },
  subline: (
    <>
    I'm Rizqi, a <Text as="span" weight="strong">Software Engineer</Text> and fresh graduate from{""} <Text as="span" size= "xl" weight="strong">Universitas Gadjah Mada</Text>. <br />
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Dedicated and detail-oriented Software Engineer with strong expertise in web development, data visualization, and integrated IoT monitoring systems. Experienced in building full-stack web platforms using modern frameworks, focusing on creating responsive, interactive, and data-driven user interfaces. Known for adaptability, effective collaboration, and problem-solving skills, I am passionate about developing innovative technologies and delivering well-structured solutions that contribute meaningfully to the advancement of software and system development.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Badan Riset dan Inovasi Nasional (BRIN)",
        timeframe: "February 2025 - June 2025",
        role: "Intern Frontend Developer",
        achievements: [
          <>
            Developed an interactive web dashboard to visualize real-time IoT air quality index using{" "}
            <strong>Next.js</strong> and <strong>Leaflet</strong> through
            dynamic charts, tables, and heatmaps.
          </>,
          <>
            Integrated <strong>Supabase (PostgreSQL)</strong> for storage and API access, ensuring accurate
            data synchronization for real-time monitoring workflows.
          </>,
          <>
            Delivered a responsive, user-friendly interface optimized for performance and usability in
            data visualization-heavy pages.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/brin/certif.jpg",
            alt: "BRIN Internship Certificate",
            width: 9,
            height: 14,
          },
        ],
      },
      {
        company: "AMX UAV Technologies",
        timeframe: "August 2024 - January 2025",
        role: "Intern Full Stack Developer",
        achievements: [
          <>
            Designed and developed a web platform using <strong>PHP</strong> and <strong>JavaScript</strong>{" "}
            integrated with <strong>Supabase (PostgreSQL)</strong> to manage IoT livestock weighing systems.
          </>,
          <>
            Enabled monitoring of livestock weight, health, and condition through structured records and a
            dashboard-oriented interface for farm operations.
          </>,
          <>
            Built IoT components using <strong>ESP32</strong>, <strong>load cells</strong>, and{" "}
            <strong>RFID</strong> for data acquisition and visualization workflows.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/amx/certif.jpg",
            alt: "AMX Internship Certificate",
            width: 14,
            height: 10,
          },
        ],
      },
      {
        company: "PT PLN (Persero)",
        timeframe: "July 2024 - August 2024",
        role: "Intern Distribution System Planner",
        achievements: [
          <>
            Conducted research on <strong>Disaster Recovery Center (DRC)</strong> and{" "}
            <strong>microgrid</strong> systems to improve reliability and resilience of power network operations.
          </>,
          <>
            Analyzed system architecture, backup power strategies, and data recovery mechanisms to support
            operational continuity during disruptions.
          </>,
          <>
            Contributed to evaluating smart grid integration and renewable energy potential within microgrid
            infrastructures.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Universitas Gajah Mada",
        description: <>B.Sc. Electronics and Instrumentation · GPA: 3.50</>,
      },
      {
        name: "SMA Negeri 70 Jakarta",
        description: <>High School, Math and Natural Sciences · Gade:86.77</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: (
          <>
            Building responsive dashboards with charts, tables, and maps for monitoring systems (including IoT telemetry).
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "Leaflet",
            icon: "leaflet",
          },
          {
            name: "PHP",
            icon: "php",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/growt/dashboard.png",
            alt: "GROWT Dashboard",
            width: 16,
            height: 9,
          },
          {
            src: "/images/work/brin/dashboard.png",
            alt: "IoT Air Quality Dashboard (BRIN)",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend Integration & Database",
        description: (
          <>
            Integrating APIs and relational storage using Supabase (PostgreSQL), with structured validation and data access patterns.
          </>
        ),
        tags: [
          {
            name: "Supabase",
            icon: "supabase",
          },
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "REST APIs",
            icon: "api",
          },
          {
            name: "Vercel",
            icon: "vercel",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/growt/iot-testing.png",
            alt: "IoT Ingestion Testing",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Internet of Things (IoT)",
        description: (
          <>
            Building IoT modules for monitoring systems (ESP32 + sensors), bridging hardware signals into cloud-ready web dashboards.
          </>
        ),
        tags: [
          {
            name: "Microcontrollers",
            icon: "microchip",
          },
          {
            name: "Sensors",
            icon: "sensors",
          },
          {
            name: "Arduino",
            icon: "arduino",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/growt/weightscale.png",
            alt: "Smart Weighing Device",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Hardware / EDA & 3D",
        description: (
          <>Creating immersive 3D experiences with Autodesk Fusion and Eagle.</>
        ),
        tags: [
          {
            name: "Autodesk Fusion",
            icon: "autodesk",
          },
          {
            name: "KiCad",
            icon: "kicad",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/growt/pcb.jpeg",
            alt: "PCB Design",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about engineering and product building...",
  description: `Read what ${person.name} has building and learning`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected projects and case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
