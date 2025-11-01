import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const emailRef = useRef<HTMLAnchorElement>(null);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("maryzhao.contact@gmail.com");
    
    // Change cursor text to "EMAIL COPIED"
    if (emailRef.current) {
      emailRef.current.setAttribute('data-cursor-text', 'EMAIL COPIED');
      
      // Reset back to "COPY EMAIL" after 2 seconds
      setTimeout(() => {
        if (emailRef.current) {
          emailRef.current.setAttribute('data-cursor-text', 'COPY EMAIL');
        }
      }, 2000);
    }
  };

  return (
    <footer className="border-t border-dotted" style={{ borderColor: '#e3dcd3' }}>
      {/* Contact Section */}
      <section id="contact" className="px-[32px] py-[64px]">
        <div>
          <h2 className="mb-8" style={{ fontFamily: 'var(--font-geist)', color: '#0b0b0b', fontSize: 'clamp(28px, 4vw, 36px)' }}>Let's connect!</h2>          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <a
                ref={emailRef}
                onClick={handleEmailClick}
                className="hover:opacity-60 transition-opacity"
                data-cursor-text="COPY EMAIL"
                style={{ fontFamily: 'var(--font-geist)', color: '#214BEB', fontSize: 'clamp(24px, 4vw, 40px)' }}
              >
                maryzhao.contact@gmail.com
              </a>
            </div>

            <div className="flex gap-8">
              <a
                href="https://www.linkedin.com/in/mariimao/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-all duration-300 inline-flex items-center gap-1 group"
                style={{ fontFamily: 'var(--font-geist-mono)', color: '#9f9f9d', fontSize: 'clamp(13px, 1.2vw, 14px)' }}
              >
                LinkedIn
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/mariimao"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-all duration-300 inline-flex items-center gap-1 group"
                style={{ fontFamily: 'var(--font-geist-mono)', color: '#9f9f9d', fontSize: 'clamp(13px, 1.2vw, 14px)' }}
              >
                GitHub
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
