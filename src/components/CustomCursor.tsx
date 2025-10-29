import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Eye, Copy } from 'lucide-react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;

      // Check if hovering over an element with cursor text
      const target = e.target as HTMLElement;
      const elementWithText = target.closest('[data-cursor-text]') as HTMLElement;
      
      if (elementWithText) {
        const text = elementWithText.getAttribute('data-cursor-text');
        setCursorText(text || '');
        return;
      }

      // Check if hovering over an interactable element (simplified)
      const isInteractable = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null;
      
      setCursorText('');
    };

    const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Reset cursor to default when navigating to a new page
  useEffect(() => {
    setCursorText('');
  }, [location.pathname]);

  const getIconSize = () => {
    return isMouseDown ? 12 : 14;
  };

  const getIcon = () => {
    if (cursorText === 'COPY EMAIL') {
      return <Copy size={getIconSize()} />;
    }
    return <Eye size={getIconSize()} />;
  };

  const getText = () => {
    if (cursorText === 'COPY EMAIL') {
      return 'COPY EMAIL';
    }
    return 'VIEW CASE STUDY';
  };

  const getWidth = () => {
    if (cursorText === 'COPY EMAIL') {
      return isMouseDown ? '110px' : '130px';
    }
    return isMouseDown ? '140px' : '165px';
  };

  const getHeight = () => {
    return isMouseDown ? '28px' : '32px';
  };

  const getFontSize = () => {
    return isMouseDown ? '10px' : '12px';
  };

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999]"
      style={{ 
        willChange: 'transform',
        left: 0,
        top: 0
      }}
    >
      <div
        className="rounded-full flex items-center justify-center gap-2"
        style={{
          backgroundColor: '#4D9DE0',
          color: '#ffffff',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: getFontSize(),
          transform: cursorText ? 'translate(0, 0)' : 'translate(-50%, -50%)',
          letterSpacing: '0.02em',
          transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
          width: cursorText ? getWidth() : '16px',
          height: cursorText ? getHeight() : '16px',
          borderRadius: cursorText ? '16px' : '50%',
          padding: '0',
          opacity: 1
        }}
      >
        <span style={{
          opacity: cursorText ? 1 : 0,
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.1, 1)',
          transitionDelay: cursorText ? '0.15s' : '0s',
          whiteSpace: 'nowrap',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          {cursorText && (
            <>
              {getIcon()}
              {getText()}
            </>
          )}
        </span>
      </div>
    </div>
  );
}
