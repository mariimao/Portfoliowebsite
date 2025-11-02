import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Masonry, {
  ResponsiveMasonry,
} from "react-responsive-masonry";

const funProjects = [
  {
    title: "Can you guess the secret code?",
    company: "WEB GAME",
    event: "CODING PROJECT",
    image:
      "https://github.com/mariimao/Portfoliowebsite/blob/main/src/fun/secret-guessing-game.png?raw=true",
    aspectRatio: "4/3",
    link: "https://mariimao.github.io/Secret-Number-Guessing-Game/",
    platform: "GitHub",
    cursorText: "PLAY GAME",
  },
  {
    title: "Street-style multiplayer racing game",
    company: "UOFT X SHERIDAN",
    event: "ARIA SHOWCASE • CNE INNOVATION GARAGE",
    image:
      "https://github.com/mariimao/Portfoliowebsite/blob/main/src/fun/video-ddd.gif?raw=true",
    aspectRatio: "16/9",
    link: "https://roller-derby-studios.itch.io/double-dare-derby",
    platform: "ITCH.IO",
  }
];

export function Fun() {
  return (
    <div className="min-h-screen px-8 pt-32 pb-16">
      <div>
        <div className="mb-16 w-1/2">
          <h1
            className="mb-6 leading-[1.2] libre-caslon-text-regular"
            style={{
              color: "#0b0b0b",
              fontSize: "clamp(32px, 5vw, 48px)",
            }}
          >
            I like playing around with new technologies and
            ideas.
          </h1>
          <p
            className="leading-[1.6]"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#9f9f9d",
              fontSize: "clamp(16px, 1.8vw, 18px)",
            }}
          >
            Outside of design, I like exploring new ways of
            solving simple problems and creating things that
            make people smile. You can count on me to keep
            experimenting, learning, and having fun while doing
            it.
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
                className="group cursor-pointer mb-2 block w-full"
                data-cursor-text={
                  project.cursorText ||
                  `VIEW ON ${project.platform.toUpperCase()}`
                }
              >
                <div
                  className="overflow-hidden mb-4 relative"
                  style={{
                    backgroundColor: "#fffefa",
                    aspectRatio: project.aspectRatio,
                  }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "'Libre Caslo Text', 'serif'",
                    fontStyle: "normal",
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