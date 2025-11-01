import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const projects = [
  {
    id: '1',
    title: 'Virtual events with language localization',
    description: 'Designing the user flow and widgets for Vosyn\'s co-watching feature in the MVP. Under NDA.',
    image: project1Image,
    status: 'HANDED OFF 2025',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Modern banking experience focused on simplicity and security for everyday transactions.',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxNTU0NzI3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'SHIPPED 2024',
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'Web Design', 'Mobile App', 'Design System'];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="px-[32px] py-[44px] p-[32px]">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 1100: 2 }}
      >
        <Masonry gutter="32px" style={{ gap: '32px' }}>
          {filteredProjects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="group block mb-8" data-cursor-text="true">
              <div className="aspect-[4/3] overflow-hidden bg-[#f9f8f5] mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 style={{ fontFamily: 'var(--font-geist)', color: '#0b0b0b', fontSize: 'clamp(15px, 1.4vw, 16px)' }}>
                  {project.title}
                </h3>
                <div style={{ fontFamily: 'var(--font-geist-mono)', color: '#9f9f9d', fontSize: 'clamp(12px, 1.1vw, 13px)' }}>
                  {project.status}
                </div>
              </div>
              <p style={{ fontFamily: 'var(--font-geist)', color: '#9f9f9d', fontSize: 'clamp(15px, 1.4vw, 16px)', lineHeight: '1.5' }}>
                {project.description}
              </p>
            </Link>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
