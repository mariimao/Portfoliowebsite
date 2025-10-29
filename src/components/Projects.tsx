import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

const projects = [
  {
    id: '1',
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics platform for tracking user behavior and business metrics.',
    image: 'https://images.unsplash.com/photo-1634804519576-d7047c5b39d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNjcyOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Research', 'Design System', 'Data Viz'],
    category: 'Web Design',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Modern banking experience focused on simplicity and security for everyday transactions.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'UX Research', 'Prototyping'],
    category: 'Mobile App',
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'End-to-end shopping experience with personalized recommendations and seamless checkout.',
    image: 'https://images.unsplash.com/photo-1506645292803-579c17d4ba6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHB8ZW58MXx8fHwxNzYxNjcyOTM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['E-commerce', 'User Flow', 'UI Design'],
    category: 'Web Design',
  },
  {
    id: '4',
    title: 'Design System',
    description: 'Scalable component library and design guidelines for a startup tech company.',
    image: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE2NDg3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Design System', 'Components', 'Documentation'],
    category: 'Design System',
  },
  {
    id: '5',
    title: 'SaaS Product Redesign',
    description: 'Complete redesign of a B2B SaaS platform improving usability and modern aesthetics.',
    image: 'https://images.unsplash.com/photo-1730794545099-14902983739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzYxNjAyNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Redesign', 'B2B', 'User Testing'],
    category: 'Web Design',
  },
  {
    id: '6',
    title: 'Creative Portfolio',
    description: 'Personal portfolio website for a creative professional showcasing their work.',
    image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE1NzU0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Portfolio', 'Animation', 'Visual Design'],
    category: 'Web Design',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Web Design', 'Mobile App', 'Design System'];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="px-8 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer block" data-cursor-text="true">
            <div className="aspect-[4/3] overflow-hidden bg-white rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mb-2" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(18px, 2vw, 20px)' }}>
              {project.title}
            </h3>
            <p className="mb-3" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>
              {project.description}
            </p>
            <div style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(12px, 1.1vw, 13px)' }}>
              {project.category}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
