import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="px-8 pt-[200px] pb-[0px] pr-[32px] pl-[32px]">
      <div>
        {/* Main content */}
        <div className="w-full grid md:grid-cols-[6fr_2fr] gap-16 items-start">
          {/* Left Column - Main Content */}
          <div>
            <h1
              className="leading-[1.2] tracking-[-0.02em] mb-4"
              style={{
                fontFamily: "var(--font-geist)",
                color: "#9f9f9d",
                fontWeight: "400",
                fontSize: "clamp(32px, 5vw, 56px)",
              }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
              >
                I'm Mary, a{" "}
                <span style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic", fontWeight: "700", color: "#0b0b0b" }}>
                  designer
                </span>{" "}
                curious
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                about{" "}
                <span style={{ fontFamily: "'Libre Caslon Text', serif", fontStyle: "italic", fontWeight: "700", color: "#0b0b0b" }}>
                  interactive software
                </span>.
              </motion.span>
            </h1>
          </div>

          {/* Right Column - Work History */}
          <div className="space-y-3">
            <div className="grid grid-cols-[1fr] gap-4 items-baseline">
              {/* <span style={{ fontFamily: "var(--font-geist)", color: "#9f9f9d", fontSize: "clamp(11px, 1.1vw, 13px)" }}>2025</span> */}
              <span style={{ fontFamily: "var(--font-geist)", color: "#0b0b0b", fontSize: "clamp(11px, 1.1vw, 13px)" }}>I help teams create intuitive, inclusive customer experiences through systems-thinking and user insights.</span>
              {/* <span style={{ fontFamily: "var(--font-geist)", color: "#9f9f9d", fontSize: "clamp(11px, 1.1vw, 13px)" }}>Product Design Intern</span> */}
            </div>
            <div className="grid grid-cols-[1fr] gap-4 items-baseline">
              {/* <span style={{ fontFamily: "var(--font-geist)", color: "#9f9f9d", fontSize: "clamp(11px, 1.1vw, 13px)" }}>2025</span> */}
              {/* <span style={{ fontFamily: "var(--font-geist)", color: "#0b0b0b", fontSize: "clamp(11px, 1.1vw, 13px)" }}>Vosyn</span> */}
              <span style={{ fontFamily: "var(--font-geist)", color: "#9f9f9d", fontSize: "clamp(11px, 1.1vw, 13px)" }}>Product Design Intern at Vosyn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}