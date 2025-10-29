import { Palette, Users, Lightbulb, Target } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'Visual Design',
    description: 'Creating beautiful, cohesive interfaces with attention to typography, color, and layout.',
  },
  {
    icon: Users,
    title: 'User Research',
    description: 'Understanding user needs through interviews, surveys, and usability testing.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Translating complex problems into simple, intuitive design solutions.',
  },
  {
    icon: Target,
    title: 'Design Systems',
    description: 'Building scalable component libraries and design guidelines for teams.',
  },
];

export function About() {
  return (
    <div className="min-h-screen px-8 pt-32 pb-16">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h1 className="mb-6 leading-[1.2]" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(32px, 5vw, 48px)' }}>About</h1>
          <p className="leading-[1.6]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(16px, 1.8vw, 18px)' }}>
            Product designer and engineer creating thoughtful digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <div className="space-y-6">
              <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>
                I'm a product designer and engineer passionate about creating thoughtful digital experiences. 
                I combine technical knowledge with design thinking to build products that are both beautiful and functional.
              </p>
              <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#666', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>
                Currently studying HCI at Cornell, I've worked across design and engineering roles at companies 
                like Bloomberg, 1Password, and RBC.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="mb-8" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(20px, 2.5vw, 24px)' }}>Skills & Expertise</h2>
            <div className="space-y-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index}>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-5 h-5" style={{ color: '#4D9DE0' }} />
                      <h3 style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(15px, 1.5vw, 16px)' }}>{skill.title}</h3>
                    </div>
                    <p className="leading-[1.6]" style={{ fontFamily: 'var(--font-geist)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}>{skill.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
