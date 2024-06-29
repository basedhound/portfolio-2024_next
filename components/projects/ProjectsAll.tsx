import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const ProjectsAll = () => {
  return (
    <section className="section-wrapper" id="projects">
      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
      <div className={styles.galleryLink}>
        <AiOutlineArrowRight size="2rem" />
        <Link href="/#projects">Go Back</Link>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
  {
    title: "Project",
    imgSrc: "/projects/iphone.webp",
    code: "https://www.github.com",
    projectLink: "https://iphone15-fv.netlify.app/",
    tech: ["React", "Nextjs", "Tailwind", "Prisma"],
    description:
      "A Talent finder app for anything around the world. This is my first time as a React developer job.",
    modalContent: (
      <>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          quisquam exercitationem aliquam delectus quas. Obcaecati aperiam,
          dignissimos expedita at quisquam nostrum commodi consequuntur ea,
          placeat magni maxime tenetur deleniti voluptates?
        </p>
      </>
    ),
  },
];