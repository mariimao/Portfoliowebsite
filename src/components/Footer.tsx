import { Copy, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Footer() {
  return (
    <footer className="border-t border-dotted" style={{ borderColor: '#e5e5e5' }}>
      {/* Contact Section */}
      <section id="contact" className="px-[32px] py-[64px]">
        <div>
          <h2 className="mb-8" style={{ fontFamily: 'var(--font-geist)', color: '#1a1a1a', fontSize: 'clamp(28px, 4vw, 36px)' }}>Let's connect!</h2>          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText("maryzhao.contact@gmail.com");
                  toast.success("Email copied to clipboard!");
                }}
                className="hover:opacity-60 transition-opacity cursor-pointer"
                data-cursor-text="COPY EMAIL"
                style={{ fontFamily: 'var(--font-geist)', color: '#4D9DE0', fontSize: 'clamp(24px, 4vw, 40px)' }}
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
                style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}
              >
                LinkedIn
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="https://github.com/mariimao"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-all duration-300 inline-flex items-center gap-1 group"
                style={{ fontFamily: 'var(--font-geist-mono)', color: '#999', fontSize: 'clamp(13px, 1.2vw, 14px)' }}
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
