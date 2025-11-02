import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";

const funProjects = [
  {
    title: "Side Project 1",
    company: "Personal",
    event: "Creative Experiment",
    image: "creative coding art",
    aspectRatio: "4/3",
    link: "https://github.com/yourname/project1",
    platform: "GitHub",
  },
  {
    title: "Side Project 2",
    company: "Personal",
    event: "Passion Project",
    image: "design technology",
    aspectRatio: "3/4",
    link: "https://codepen.io/yourname/project2",
    platform: "CodePen",
  },
  {
    title: "Side Project 3",
    company: "Personal",
    event: "Weekend Hack",
    image: "weekend project",
    aspectRatio: "16/9",
    link: "https://behance.net/yourname/project3",
    platform: "Behance",
  },
  {
    title: "Side Project 4",
    company: "Personal",
    event: "Creative Exploration",
    image: "creative exploration",
    aspectRatio: "1/1",
    link: "https://dribbble.com/yourname/project4",
    platform: "Dribbble",
  },
  {
    title: "Side Project 5",
    company: "Personal",
    event: "UI Experiment",
    image: "ui animations",
    aspectRatio: "4/5",
    link: "https://github.com/yourname/project5",
    platform: "GitHub",
  },
  {
    title: "Side Project 6",
    company: "Personal",
    event: "Photography",
    image: "photography visual",
    aspectRatio: "3/2",
    link: "https://instagram.com/yourname",
    platform: "Instagram",
  },
];

export function Fun() {
  return (
    <div className="min-h-screen px-8 pt-32 pb-16">
      <div>
        <div className="mb-16">
          <h1
            className="mb-6 leading-[1.2]"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#0b0b0b",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            Fun
          </h1>
          <p
            className="leading-[1.6]"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#9f9f9d",
              fontSize: "clamp(16px, 1.8vw, 18px)",
            }}
          >
            Side projects, experiments, and creative
            explorations.
          </p>
        </div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}
        >
          <Masonry style={{ gap: "32px" }}>
            {funProjects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer mb-2 block"
                data-cursor-text={`VIEW ON ${project.platform.toUpperCase()}`}
              >
                <div
                  className="overflow-hidden mb-4 border border-[#e3dcd3] relative"
                  style={{
                    backgroundColor: "#fffefa",
                    aspectRatio: project.aspectRatio,
                  }}
                >
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#0b0b0b",
                    fontSize: "clamp(16px, 1.8vw, 18px)",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#9f9f9d",
                    fontSize: "clamp(11px, 1vw, 12px)",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  {project.company} • {project.event}
                </p>
              </motion.a>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}