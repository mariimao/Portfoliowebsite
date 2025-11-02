import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./ui/tabs";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";
import { motion } from "motion/react";

const projects = [
  {
    id: "1",
    title: "Virtual events in every language",
    description:
      "Designing the user flow and widgets for Vosyn's co-watching feature in the MVP. Under NDA.",
    image:
      "https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjcyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "HANDED OFF 2025",
    category: "mobile app",
  },
  {
    id: "2",
    title: "Resource management for coaches",
    description:
      "Designed the Radio Poets poetry archive webpages for America SCORES' internal site and restructured the navigation system. 1 of 21 projects to be featured Develop for Good's Substack.",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "SHIPPED 2025",
    category: "mobile app",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "Web Design",
    "Mobile App",
    "Design System",
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory,
        );

  return (
    <section id="work" className="px-[32px] py-[44px] p-[32px]">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 1100: 2 }}
      >
        <Masonry gutter="32px" style={{ gap: "32px" }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-2"
            >
              <Link
                to={`/project/${project.id}`}
                className="group block"
                data-cursor-text="true"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#f9f8f5] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h3
                    style={{
                      color: "#0b0b0b",
                      fontSize: "clamp(18px, 1.8vw, 20px)",
                    }}
                    className="libre-caslon-text-regular"
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      color: "#9f9f9d",
                      fontSize: "clamp(14px, 1.3vw, 15px)",
                    }}
                  >
                    {project.status}
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#9f9f9d",
                    fontSize: "clamp(15px, 1.4vw, 16px)",
                    lineHeight: "1.5",
                  }}
                >
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}