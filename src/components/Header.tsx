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

    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () =>
      window.removeEventListener("resize", updatePositions);
  }, []);

  useEffect(() => {
    // Update active section based on current route
    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      // Find the entry with the highest intersection ratio
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio and pick the most visible one
        const mostVisible = intersectingEntries.reduce(
          (prev, current) => {
            return current.intersectionRatio >
              prev.intersectionRatio
              ? current
              : prev;
          },
        );

        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    const sections = ["work", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    // Immediately update the active section for instant UI feedback
    setActiveSection(id);

    // If navigating to about, go to the about page
    if (id === 'about') {
      navigate('/about');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 100;
          const elementPosition =
            element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 100;
        const elementPosition =
          element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <header className="fixed top-0 w-full bg-[#fafafa] z-50">
      <nav
        className="px-8 py-4 border-b border-dotted transition-all duration-300"
        style={{
          backgroundColor: "#fafafa",
          borderColor: isScrolled ? "#e5e5e5" : "transparent",
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
                  color: "#1a1a1a",
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
                  className="absolute h-[28px] rounded-full bg-[#f0f0f0]"
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
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              )}
            <button
              data-section="work"
              onClick={() => scrollToSection("work")}
              onMouseEnter={() => setHoveredItem("work")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "work"
                    ? "#000000"
                    : activeSection === "work"
                      ? "#4D9DE0"
                      : "#999",
              }}
            >
              WORK
            </button>
            <button
              data-section="about"
              onClick={() => scrollToSection("about")}
              onMouseEnter={() => setHoveredItem("about")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "about"
                    ? "#000000"
                    : activeSection === "about"
                      ? "#4D9DE0"
                      : "#999",
              }}
            >
              ABOUT
            </button>
            <button
              data-section="contact"
              onClick={() => scrollToSection("contact")}
              onMouseEnter={() => setHoveredItem("contact")}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase relative z-10 px-3 h-[28px] flex items-center"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  hoveredItem === "contact"
                    ? "#000000"
                    : activeSection === "contact"
                      ? "#4D9DE0"
                      : "#999",
              }}
            >
              CONTACT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={20} style={{ color: "#1a1a1a" }} />
            ) : (
              <Menu size={20} style={{ color: "#1a1a1a" }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-8 pb-4 flex flex-col gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("work");
              }}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "work" ? "#4D9DE0" : "#999",
              }}
            >
              WORK
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "about"
                    ? "#4D9DE0"
                    : "#999",
              }}
            >
              ABOUT
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="text-[13px] tracking-[0.02em] hover:opacity-60 transition-opacity uppercase text-left"
              style={{
                fontFamily: "var(--font-geist-mono)",
                color:
                  activeSection === "contact"
                    ? "#4D9DE0"
                    : "#999",
              }}
            >
              CONTACT
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}