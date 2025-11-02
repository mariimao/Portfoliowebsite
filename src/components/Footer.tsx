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
      
      // Reset back to "COPY EMAIL" after 3 seconds
      setTimeout(() => {
        if (emailRef.current) {
          emailRef.current.setAttribute('data-cursor-text', 'COPY EMAIL');
        }
      }, 3000);
    }
  };

  return (
    <footer className="border-t border-dotted" style={{ borderColor: '#e3dcd3' }}>
      {/* Contact Section */}
      <section id="contact" className="px-8 py-4 border-t" style={{ borderColor: '#e3dcd3', borderStyle: 'dotted', borderWidth: '0.67px 0 0 0' }}>
        <div className="flex items-center justify-between">
          {/* Left side - Let's connect text */}
          <div>
            <div
              className="text-[18px]"
              style={{
                fontFamily: 'var(--font-geist-mono)',
                color: '#0b0b0b',
                fontWeight: '400',
                textTransform: 'uppercase',
              }}
            >
              Let's connect
            </div>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-6">
            <a
              ref={emailRef}
              onClick={handleEmailClick}
              className="text-[13px] tracking-[0.02em] transition-colors uppercase hover:opacity-60"
              data-cursor-text="COPY EMAIL"
              style={{
                fontFamily: 'var(--font-geist-mono)',
                color: '#214BEB',
              }}
            >
              EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/mariimao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-[0.02em] transition-colors uppercase hover:opacity-60"
              style={{
                fontFamily: 'var(--font-geist-mono)',
                color: '#9f9f9d',
              }}
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/mariimao"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] tracking-[0.02em] transition-colors uppercase hover:opacity-60"
              style={{
                fontFamily: 'var(--font-geist-mono)',
                color: '#9f9f9d',
              }}
            >
              GITHUB
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
}
