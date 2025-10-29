import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="px-8 pt-[140px] pb-[40px]">
      <div>
        {/* Main content */}
        <div className="grid md:grid-cols-[3fr_1fr] gap-16">
            {/* Left Column - Main Content */}
            <div className="space-y-3">
              
              {/* Main heading with gradient */}
              <motion.h1
                className="leading-[1.2] tracking-[-0.02em]"
                style={{
                  fontFamily: "var(--font-geist)",
                  color: "#888888",
                  fontWeight: "bold",
                  fontSize: "clamp(32px, 5vw, 56px)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                I'm Mary, a designer who crafts{" "}
                <span style={{ color: "#000000" }}>
                  intuitive and accessible
                </span>{" "}
                <span style={{ color: "#000000" }}>
                  SaaS products
                </span>
              </motion.h1>
              <div>
                <p
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#999",
                    letterSpacing: "0.05em",
                    fontSize: "clamp(12px, 1.1vw, 13px)",
                  }}
                >
                  Currently at{" "}
                  <a
                    href="https://vosyn.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:opacity-60"
                    style={{
                      color: "#000",
                    }}
                  >
                    Vosyn
                  </a>
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4 pt-5">
                <a
                  href="#work"
                  className="inline-block px-6 py-3 transition-all duration-300 hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderRadius: "9999px",
                    fontSize: "clamp(13px, 1.2vw, 14px)",
                  }}
                >
                  My work
                </a>
                <a
                  href="#contact"
                  className="inline-block px-6 py-3 transition-all duration-300 bg-white hover:bg-[#f5f5f5]"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#000000",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderRadius: "9999px",
                    border: "1px solid #d4d4d4",
                    fontSize: "clamp(13px, 1.2vw, 14px)",
                  }}
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right Column - Work History */}
            <div className="space-y-8 md:pt-12">
              
            </div>
          </div>
        </div>
    </section>
  );
}