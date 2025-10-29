import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

export function ProjectCard({ id, title, description, image, tags, category }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <div 
      onClick={handleClick} 
      className="group cursor-pointer bg-white rounded-lg transition-all duration-300 hover:shadow-lg p-2"
      data-cursor-text="true"
      style={{
        border: '2px dashed #4D9DE0',
      }}
    >
      <div className="aspect-[4/3] overflow-hidden bg-white rounded-md">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(18px, 2vw, 20px)' }}>{title}</h3>
        <p className="mb-3" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>{description}</p>
        <div style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(12px, 1.1vw, 13px)' }}>
          {category}
        </div>
      </div>
    </div>
  );
}
