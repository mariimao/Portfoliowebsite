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
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-16 items-center">
          <div>
            <h1 className="mb-8 leading-[1.1] libre-caslon-text-bold" style={{ color: '#0b0b0b', fontSize: 'clamp(40px, 6vw, 64px)' }}>
              Hi, I'm Mary!
            </h1>
            <div className="space-y-6">
              <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#9f9f9d', fontSize: 'clamp(15px, 1.5vw, 17px)' }}>
                As a designer based in Toronto, I'm passionate about <span style={{ color: '#0b0b0b' }}>reshaping the way people engage with the digital landscape.</span>
              </p>
              <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#9f9f9d', fontSize: 'clamp(15px, 1.5vw, 17px)' }}>
                I craft tailored user interfaces that are <span style={{ color: '#0b0b0b' }}>intuitive, inclusive, and meaningful.</span>
              </p>
              <p className="leading-[1.8]" style={{ fontFamily: 'var(--font-geist)', color: '#9f9f9d', fontSize: 'clamp(15px, 1.5vw, 17px)' }}>
                To me, design is a powerful tool, one that can bridge divides, foster connection, and contribute to a more equitable world.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[340px] aspect-[3/4] overflow-hidden rounded-[24px] bg-[#f9f8f5]">
              <img
                src="https://images.unsplash.com/photo-1579954775307-5a4d00ce40fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFuJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzYyMDQwMTMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mary"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
