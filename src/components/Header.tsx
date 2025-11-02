import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Rabbit } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("work");
  const [hoveredItem, setHoveredItem] = useState<string | null>(
    null,
  );
  const [itemPositions, setItemPositions] = useState<
    Record<string, { left: number; width: number }>
  >({});
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updatePositions = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const buttons =
          navRef.current.querySelectorAll("button");
        const positions: Record<
          string,
          { left: number; width: number }
        > = {};

        buttons.forEach((button) => {
          const rect = button.getBoundingClientRect();
          const id = button.getAttribute("data-section");
          if (id) {
            positions[id] = {
              left: rect.left - navRect.left,
              width: rect.width,
            };
          }
        });

        setItemPositions(positions);
      }
    };

    // Initial update
    updatePositions();

    // Update on resize
    window.addEventListener("resize", updatePositions);

    // Update after fonts load
    document.fonts.ready.then(updatePositions);

    // Update with a slight delay to ensure DOM is ready
    const timeoutId = setTimeout(updatePositions, 100);

    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timeoutId);
    };
  }, []);

  // Recalculate positions when active section or hovered item changes
  useEffect(() => {
    const updatePositions = () => {
      if (navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const buttons =
          navRef.current.querySelectorAll("button");
        const positions: Record<
          string,
          { left: number; width: number }
        > = {};

        buttons.forEach((button) => {
          const rect = button.getBoundingClientRect();
          const id = button.getAttribute("data-section");
          if (id) {
            positions[id] = {
              left: rect.left - navRect.left,
              width: rect.width,
            };
          }
        });

        setItemPositions(positions);
      }
    };

    // Small delay to ensure any style changes have been applied
    const timeoutId = setTimeout(updatePositions, 50);

    return () => clearTimeout(timeoutId);
  }, [activeSection, hoveredItem]);

  useEffect(() => {
    // Update active section based on current route
    if (location.pathname.startsWith("/project/")) {
      // No active section on project detail pages
      setActiveSection("");
    } else if (location.pathname === "/about") {
      setActiveSection("about");
    } else if (location.pathname === "/fun") {
      setActiveSection("fun");
    } else if (location.pathname === "/") {
      setActiveSection("work");
    }
  }, [location.pathname]);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);

    if (section === "work") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "fun") {
      navigate("/fun");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "about") {
      navigate("/about");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "resume") {
      // Replace this URL with your actual resume link
      window.open(
        "https://drive.google.com/file/d/1k3NtLbSGEXxbkLD4VlHyWK5ESkiixUV-/view",
        "_blank",
      );
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <header className="w-full">
      <nav
        className="px-8 py-4 border-b transition-all duration-300"
        style={{
          borderColor: "#e3dcd3",
          borderStyle: "dotted",
          borderWidth: "0 0 0.67px 0",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Left side - Name and title */}
          <div>
            <a
              href="/"
              onClick={handleLogoClick}
              className="block"
            >
              <div
                className="text-[18px]"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: "#0b0b0b",
                  fontWeight: "400",
                  textTransform: "uppercase",
                }}
              >
                Mary Zhao
              </div>
            </a>
          </div>

          {/* Right side - Desktop Navigation */}
          <div
            ref={navRef}
            className="hidden md:flex items-center gap-3 relative"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {(hoveredItem || activeSection) &&
              itemPositions[hoveredItem || activeSection] && (
                <motion.div
                  layoutId="nav-background"
                  className="absolute h-[28px] rounded-full bg-[#fffefa] border border-[#e3dcd3]"
                  initial={false}
                  animate={{
                    left: itemPositions[
                      hoveredItem || activeSection
                    ].left,
                    width:
                      itemPositions[
                        hoveredItem || activeSection
                      ].width,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  style={{
                    top: 0,
                  }}
                />
              )}
            <button
              data-section="work"
              onClick={() => handleNavigation("work")}
              onMouseEnter={() => setHoveredItem("work")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "work"
                    ? "#0b0b0b"
                    : activeSection === "work"
                      ? "#214BEB"
                      : "#9f9f9d",
              }}
            >
              WORK
            </button>
            <button
              data-section="fun"
              onClick={() => handleNavigation("fun")}
              onMouseEnter={() => setHoveredItem("fun")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "fun"
                    ? "#0b0b0b"
                    : activeSection === "fun"
                      ? "#214BEB"
                      : "#9f9f9d",
              }}
            >
              FUN
            </button>
            <button
              data-section="about"
              onClick={() => handleNavigation("about")}
              onMouseEnter={() => setHoveredItem("about")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "about"
                    ? "#0b0b0b"
                    : activeSection === "about"
                      ? "#214BEB"
                      : "#9f9f9d",
              }}
            >
              ABOUT
            </button>
            <button
              data-section="resume"
              onClick={() => handleNavigation("resume")}
              onMouseEnter={() => setHoveredItem("resume")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "resume"
                    ? "#0b0b0b"
                    : "#9f9f9d",
              }}
            >
              RESUME
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} style={{ color: "#0b0b0b" }} />
            ) : (
              <Menu size={20} style={{ color: "#0b0b0b" }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-4 flex flex-col gap-6">
            <button
              onClick={() => handleNavigation("work")}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "work"
                    ? "#0b0b0b"
                    : "#9f9f9d",
              }}
            >
              WORK
            </button>
            <button
              onClick={() => handleNavigation("fun")}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "fun"
                    ? "#0b0b0b"
                    : "#9f9f9d",
              }}
            >
              FUN
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "about"
                    ? "#0b0b0b"
                    : "#9f9f9d",
              }}
            >
              ABOUT
            </button>
            <button
              onClick={() => handleNavigation("resume")}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color: "#9f9f9d",
              }}
            >
              RESUME
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}