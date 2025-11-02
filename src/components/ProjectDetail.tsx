import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";

const projectsData = [
  {
    id: "1",
    title: "Virtual events in every language",
    description:
      "Transforming Vosyn's multilingual co-watching sessions",
    image:
      "https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjcyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["UX Design", "User Flow", "Widgets"],
    category: "Web Design",
    role: "Product Designer",
    timeline: "June - August 2025",
    skills: [
      "Product Design",
      "Product Strategy",
      "Prototyping",
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "In the summer of 2025, I joined Vosyn as a Product Designer to contribute to the design of their co-watching feature for the MVP. I collaborated closely with a team of 4 designers, 1 product owner, and 1 chief experience officer.",
      },
      {
        id: "impact",
        title: "Impact",
        content:
          "I shaped Vosyn's early user experience strategy for virtual event spaces. By redefining user roles and optimizing critical widgets, I significantly reduced user frustration by 90% and enhanced community engagement, directly contributing to early user retention.",
      },
      {
        id: "approach",
        title: "Approach",
        content:
          "The original user flow oversimplified the structure of online spaces. I remapped it to support 3 target user types. The original design assumed all users experienced the event the same way. However, I advocated for a user flow that catered to distinct roles for attendees and hosts, ensuring each user received precise guidance and tools.\n\nWe iterated many times on how to adapt the design to work within the existing layout. The biggest challenge was adapting the design with the default media player layout to avoid an overhaul of the entire system. While prototyping, I used visual design to differentiate new widgets from old ones, and spatial grouping.\n\nI designed around system limits like unstable connections and participant caps to keep the experience reliable for everyone.",
      },
      {
        id: "outcome",
        title: "Outcome",
        content:
          "After multiple design-test cycles, the final interface was both user-friendly and stayed aligned with technical limitations. Through iterative AI-powered testing, I reduced user errors in key workflows by 90%. This improved task efficiency and created a more seamless experience for early adopters and communities.",
      },
      {
        id: "reflection",
        title: "Reflection",
        content:
          "Designing with AI insights: Although AI-driven synthetic testing cannot replace real users, it can help save time and resources, and prevent the risk of human leakers for proprietary technology. I still needed to design thoughtful tasks, guide the focus of each test, and compile results into a clear, actionable format. But by automating the more time-consuming parts, I could make the most of limited resources.\n\nAdvocating for thoughtful change: Working in a small startup environment challenged me to balance advocacy with feasibility. I learned how to communicate design rationale clearly, align with technical constraints, and push for improvements that made real user impact.",
      },
    ],
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description:
      "Modern banking experience focused on simplicity and security for everyday transactions.",
    image:
      "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile", "UX Research", "Prototyping"],
    category: "Mobile App",
    role: "UX/UI Designer",
    timeline: "4 months",
    skills: ["Figma", "Sketch", "InVision"],
    sections: [
      {
        id: "overview",
        title: "Overview",
        content:
          "A complete redesign of a mobile banking application focused on making everyday banking tasks simple and secure. The project included user interviews, competitive analysis, and usability testing.",
      },
      {
        id: "problem",
        title: "The Problem",
        content:
          "Users found the existing app confusing and were concerned about security. The goal was to create an app that felt both simple and trustworthy.",
      },
      {
        id: "approach",
        title: "Our Approach",
        content:
          "I designed a clean, minimalist interface with clear visual hierarchy and intuitive navigation. Security features were made prominent but not intrusive, and complex tasks were broken down into simple steps.",
      },
      {
        id: "impact",
        title: "Impact",
        content:
          "App store ratings improved from 3.2 to 4.7 stars, and active users increased by 35% within the first two months of launch.",
      },
    ],
  },
];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);
  const [activeSection, setActiveSection] = useState(
    project?.sections?.[0]?.id || "overview",
  );

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -100; // Offset for sticky header
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Track active section based on scroll position
  useEffect(() => {
    if (!project?.sections) return;

    const sectionIds = project.sections.map((s) => s.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // 250px from top as trigger point

      // Find which section we're currently in
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="text-center">
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#0b0b0b",
              fontSize: "clamp(28px, 4vw, 36px)",
            }}
          >
            Project Not Found
          </h1>
          <Link
            to="/"
            className="hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#214BEB",
              fontSize: "clamp(15px, 1.5vw, 16px)",
            }}
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 pt-[96px] pb-[200px] pr-[32px] pl-[32px]">
      <div className="container mx-auto max-w-[1400px]">
        {/* Back Button - Mobile/Tablet (at top) */}
        <div className="lg:hidden mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "var(--font-geist)",
              color: "#9f9f9d",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <ArrowLeft size={16} />
            Back
          </Link>
        </div>

        {/* Main Layout: Sidebar + Content + Right Spacer */}
        <div className="flex gap-12 lg:gap-16 justify-center">
          {/* Left Sidebar Navigation */}
          <aside className="hidden lg:block w-[150px] flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Back Button - Sticky on Desktop */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-[#9f9f9d] hover:text-[#0b0b0b] transition-colors"
                style={{
                  fontFamily: "var(--font-geist)",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <ArrowLeft size={16} />
                Back
              </Link>

              {/* Section Navigation */}
              <nav className="space-y-3">
                {project.sections?.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) =>
                      handleSmoothScroll(e, section.id)
                    }
                    className="block hover:text-[#0b0b0b] transition-colors"
                    style={{
                      fontFamily: "var(--font-geist)",
                      fontSize: "15px",
                      color:
                        activeSection === section.id
                          ? "#0b0b0b"
                          : "#9f9f9d",
                    }}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-[1000px]">
            {/* Project Header */}
            <div className="mb-8">
              <div
                className="mb-3 flex items-center gap-3"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  color: "#9f9f9d",
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {project.category} • CONCEPT 2025
              </div>
              <h1
                className="mb-0 leading-[1.1] libre-caslon-text-bold"
                style={{
                  color: "#0b0b0b",
                  fontSize: "clamp(36px, 4vw, 56px)",
                }}
              >
                {project.title}
              </h1>
            </div>

            {/* Hero Image */}
            <div className="aspect-[16/10] overflow-hidden mb-10 bg-[#f9f8f5]">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Project Details Grid - 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div>
                <h3
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#9f9f9d",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                  }}
                >
                  ROLE
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#0b0b0b",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {project.role}
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#9f9f9d",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                  }}
                >
                  TIMELINE
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#0b0b0b",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {project.timeline}
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#9f9f9d",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                  }}
                >
                  TEAM
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#0b0b0b",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  3 Designers
                </p>
              </div>
              <div>
                <h3
                  className="mb-2 uppercase"
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    color: "#9f9f9d",
                    fontSize: "11px",
                    letterSpacing: "0.05em",
                  }}
                >
                  SKILLS
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-geist)",
                    color: "#0b0b0b",
                    fontSize: "15px",
                    lineHeight: "1.5",
                  }}
                >
                  {project.skills.join("\n")}
                </p>
              </div>
            </div>

            {/* Project Content */}
            <div className="space-y-16">
              {project.sections?.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-geist)",
                      color: "#0b0b0b",
                      fontSize: "clamp(20px, 2.5vw, 24px)",
                    }}
                  >
                    {section.title}
                  </h2>
                  {section.image && (
                    <div className="aspect-[16/10] overflow-hidden mb-6 bg-[#f9f8f5]">
                      <ImageWithFallback
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <p
                    className="leading-[1.7]"
                    style={{
                      fontFamily: "var(--font-geist)",
                      color: "#9f9f9d",
                      fontSize: "16px",
                    }}
                  >
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Spacer - matches left sidebar width for balance */}
          <div className="hidden lg:block w-[150px] flex-shrink-0"></div>
        </div>
      </div>
    </div>
  );
}