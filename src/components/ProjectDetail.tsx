import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';

const projectsData = [
  {
    id: '1',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform for tracking user behavior and business metrics.',
    image: 'https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjcyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Research', 'Design System', 'Data Viz'],
    category: 'Web Design',
    fullDescription: 'This analytics dashboard was designed for a SaaS company to help their users track and understand complex business metrics. The project involved extensive user research, wireframing, and iterative design to create an intuitive interface for data visualization.',
    challenge: 'The main challenge was presenting large amounts of data in a way that was both comprehensive and easy to understand for users with varying levels of technical expertise.',
    solution: 'I created a modular dashboard system with customizable widgets, allowing users to personalize their view. Clear data hierarchy, thoughtful use of color, and interactive charts made complex data accessible.',
    outcome: 'The new dashboard increased user engagement by 45% and reduced support tickets related to data interpretation by 60%.',
    role: 'Lead UX/UI Designer',
    timeline: '3 months',
    tools: ['Figma', 'Adobe XD', 'Principle'],
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Modern banking experience focused on simplicity and security for everyday transactions.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'UX Research', 'Prototyping'],
    category: 'Mobile App',
    fullDescription: 'A complete redesign of a mobile banking application focused on making everyday banking tasks simple and secure. The project included user interviews, competitive analysis, and usability testing.',
    challenge: 'Users found the existing app confusing and were concerned about security. The goal was to create an app that felt both simple and trustworthy.',
    solution: 'I designed a clean, minimalist interface with clear visual hierarchy and intuitive navigation. Security features were made prominent but not intrusive, and complex tasks were broken down into simple steps.',
    outcome: 'App store ratings improved from 3.2 to 4.7 stars, and active users increased by 35% within the first two months of launch.',
    role: 'UX/UI Designer',
    timeline: '4 months',
    tools: ['Figma', 'Sketch', 'InVision'],
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'End-to-end shopping experience with personalized recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHB8ZW58MXx8fHwxNzYxNjcyOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['E-commerce', 'User Flow', 'UI Design'],
    category: 'Web Design',
    fullDescription: 'Designed a modern e-commerce platform with focus on product discovery, personalized recommendations, and a streamlined checkout process to reduce cart abandonment.',
    challenge: 'The client was experiencing high cart abandonment rates and low conversion. Users found the checkout process too long and complicated.',
    solution: 'I redesigned the entire user flow, implementing a one-page checkout, guest checkout option, and smart product recommendations. The design emphasized product photography and clear CTAs.',
    outcome: 'Cart abandonment decreased by 28% and conversion rates increased by 42%. Average order value also increased by 15%.',
    role: 'Senior UX Designer',
    timeline: '5 months',
    tools: ['Figma', 'Adobe XD', 'Hotjar'],
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Scalable component library and design guidelines for a startup tech company.',
    image: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE2NDg3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Design System', 'Components', 'Documentation'],
    category: 'Design System',
    fullDescription: 'Created a comprehensive design system from scratch for a fast-growing startup, including component library, design tokens, and extensive documentation.',
    challenge: 'The company was growing rapidly and different teams were creating inconsistent user experiences. There was no unified design language or component library.',
    solution: 'I conducted an audit of existing designs, established design principles, and built a scalable component library with detailed usage guidelines. Collaborated closely with developers to ensure proper implementation.',
    outcome: 'Design-to-development handoff time reduced by 60%. Design consistency improved across all products, and new features could be designed and built 40% faster.',
    role: 'Design Systems Lead',
    timeline: '6 months',
    tools: ['Figma', 'Storybook', 'Zeroheight'],
  },
  {
    id: '5',
    title: 'SaaS Product Redesign',
    description: 'Complete redesign of a B2B SaaS platform improving usability and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjAyNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Redesign', 'B2B', 'User Testing'],
    category: 'Web Design',
    fullDescription: 'Led the complete redesign of a B2B SaaS platform that hadn\'t been updated in 5 years. The project focused on modernizing the interface while maintaining familiarity for existing users.',
    challenge: 'The platform was outdated and users complained about poor usability, but they were also resistant to change. We needed to modernize without alienating the current user base.',
    solution: 'Through extensive user research and testing, I redesigned the interface with a phased rollout approach. Key improvements included better information architecture, modern visual design, and improved workflows.',
    outcome: 'User satisfaction scores increased from 6.2 to 8.9 out of 10. Task completion time decreased by 35%, and new user onboarding time was cut in half.',
    role: 'Lead Product Designer',
    timeline: '7 months',
    tools: ['Figma', 'Maze', 'Optimal Workshop'],
  },
  {
    id: '6',
    title: 'Creative Portfolio',
    description: 'Personal portfolio website for a creative professional showcasing their work.',
    image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE1NzU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Portfolio', 'Animation', 'Visual Design'],
    category: 'Web Design',
    fullDescription: 'Designed a portfolio website for a creative professional that showcases their work in an engaging and visually striking way. The site features custom animations and a unique grid layout.',
    challenge: 'The client wanted a portfolio that stood out from typical template-based websites while still being easy to navigate and update.',
    solution: 'I created a custom design with subtle animations, a masonry grid layout, and an intuitive CMS integration. The design balanced creativity with usability.',
    outcome: 'The client reported a 200% increase in project inquiries and received positive feedback from potential clients about the memorable presentation.',
    role: 'UX/UI Designer',
    timeline: '2 months',
    tools: ['Figma', 'Webflow', 'After Effects'],
  },
];

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-8 pt-32">
        <div className="text-center">
          <h1 className="mb-6" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(28px, 4vw, 36px)' }}>Project Not Found</h1>
          <Link to="/" className="hover:opacity-60 transition-opacity" style={{ fontFamily: 'var(--font-geist)', color: '#4D9DE0', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-8 pt-32 pb-16">
      <div className="container mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 hover:opacity-60 mb-12 transition-opacity"
          style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}
        >
          <ArrowLeft size={20} />
          Back to Work
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <div className="mb-6" style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(12px, 1.1vw, 13px)' }}>
            {project.category}
          </div>
          <h1 className="mb-6 leading-[1.2]" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(32px, 5vw, 48px)' }}>{project.title}</h1>
          <p className="leading-[1.6]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(16px, 1.8vw, 18px)' }}>{project.description}</p>
        </div>

        {/* Hero Image */}
        <div className="aspect-video overflow-hidden mb-16 bg-white">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 pb-16 border-b" style={{ borderColor: '#e0e0e0' }}>
          <div>
            <h3 className="mb-3" style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>Role</h3>
            <p style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.role}</p>
          </div>
          <div>
            <h3 className="mb-3" style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>Timeline</h3>
            <p style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.timeline}</p>
          </div>
          <div>
            <h3 className="mb-3" style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>Tools</h3>
            <p style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.tools.join(', ')}</p>
          </div>
        </div>

        {/* Project Content */}
        <div className="space-y-16">
          <div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(24px, 3vw, 28px)' }}>Overview</h2>
            <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.fullDescription}</p>
          </div>

          <div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(24px, 3vw, 28px)' }}>The Challenge</h2>
            <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.challenge}</p>
          </div>

          <div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(24px, 3vw, 28px)' }}>The Solution</h2>
            <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.solution}</p>
          </div>

          <div>
            <h2 className="mb-6" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(24px, 3vw, 28px)' }}>Outcome</h2>
            <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{project.outcome}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 pt-16 border-t" style={{ borderColor: '#e0e0e0' }}>
          <h2 className="mb-12" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(24px, 3vw, 28px)' }}>Check out my other projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 2)
              .map((otherProject) => (
                <Link
                  key={otherProject.id}
                  to={`/project/${otherProject.id}`}
                  className="group block"
                  data-cursor-text="VIEW CASE STUDY"
                >
                  <div className="aspect-video overflow-hidden mb-6 bg-white">
                    <ImageWithFallback
                      src={otherProject.image}
                      alt={otherProject.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex gap-2 mb-4">
                    {otherProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1"
                        style={{
                          fontFamily: 'var(--font-geist-mono)',
                          backgroundColor: '#f0f0f0',
                          color: '#666',
                          fontSize: 'clamp(11px, 1vw, 12px)',
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mb-3" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(20px, 2.5vw, 24px)' }}>
                    {otherProject.title}
                  </h3>
                  <p className="leading-[1.6]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>
                    {otherProject.description}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
