'use client';

/**
 * IntroLoader.js
 * -----------------------------------------------------------------------
 * Opening animation shown once when the site first loads.
 *
 * Sequence:
 *   1. Curtain sits over the page in the site's own beige tone
 *      (so there's no jarring black flash before the theme loads)
 *   2. "Lumina" wordmark reveals letter-by-letter with a slight rise + blur-in
 *   3. A thin accent line sweeps out under the wordmark
 *   4. Wordmark + line fade up and out
 *   5. Curtain splits and wipes away (top up, bottom down) to reveal the page
 *
 * Install dependency first:
 *   npm install gsap
 *
 * Usage (in src/app/layout.js):
 *
 *   import IntroLoader from "@/components/IntroLoader";
 *
 *   <body className="...">
 *     <IntroLoader />
 *     <Navbar />
 *     {children}
 *     <Footer />
 *   </body>
 * -----------------------------------------------------------------------
 */

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

// Set to true if you want the intro to only play once per browser
// session instead of every page load/refresh.
const PLAY_ONCE_PER_SESSION = false;
const SESSION_KEY = 'introPlayed';

export default function IntroLoader({ wordmark = 'Lumina' }) {
  const panelTopRef = useRef(null);
  const panelBottomRef = useRef(null);
  const lettersWrapRef = useRef(null);
  const lineRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(true);

  const letters = wordmark.split('');

  useEffect(() => {
    if (
      PLAY_ONCE_PER_SESSION &&
      typeof window !== 'undefined' &&
      sessionStorage.getItem(SESSION_KEY)
    ) {
      setShouldRender(false);
      return;
    }

    document.body.style.overflow = 'hidden';

    const letterEls = lettersWrapRef.current.querySelectorAll('span');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => {
        document.body.style.overflow = '';
        if (PLAY_ONCE_PER_SESSION && typeof window !== 'undefined') {
          sessionStorage.setItem(SESSION_KEY, 'true');
        }
        setShouldRender(false);
      },
    });

    tl.set(letterEls, { opacity: 0, y: 28, filter: 'blur(6px)' });
    tl.set(lineRef.current, { scaleX: 0 });
    tl.set([panelTopRef.current, panelBottomRef.current], { yPercent: 0 });

    // 1. Letters rise + sharpen into view, one after another
    tl.to(letterEls, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.7,
      stagger: 0.05,
    });

    // 2. Accent line sweeps out under the wordmark
    tl.to(
      lineRef.current,
      { scaleX: 1, duration: 0.6, ease: 'power2.inOut' },
      '-=0.25'
    );

    // 3. Hold for a beat
    tl.to({}, { duration: 0.45 });

    // 4. Wordmark + line lift away
    tl.to([letterEls, lineRef.current], {
      opacity: 0,
      y: -18,
      duration: 0.45,
      ease: 'power2.in',
    });

    // 5. Curtain splits open, revealing the page
    tl.to(
      panelTopRef.current,
      { yPercent: -100, duration: 0.95, ease: 'expo.inOut' },
      '-=0.1'
    );
    tl.to(
      panelBottomRef.current,
      { yPercent: 100, duration: 0.95, ease: 'expo.inOut' },
      '<'
    );

    return () => tl.kill();
  }, []);

  if (!shouldRender) return null;

  return (
    <div style={styles.container} aria-hidden="true">
      <div ref={panelTopRef} style={{ ...styles.panel, ...styles.panelTop }} />
      <div ref={panelBottomRef} style={{ ...styles.panel, ...styles.panelBottom }} />

      <div style={styles.content}>
        <div ref={lettersWrapRef} style={styles.wordmark}>
          {letters.map((char, i) => (
            <span key={i} style={styles.letter}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
        <div ref={lineRef} style={styles.line} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    pointerEvents: 'none',
  },
  panel: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '50%',
    // Warm beige matching the site's own bg-beige, so the reveal
    // feels continuous rather than a black flash cutting to light.
    background: '#f2ebdf',
  },
  panelTop: {
    top: 0,
    boxShadow: '0 1px 0 rgba(0,0,0,0.03)',
  },
  panelBottom: {
    bottom: 0,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '14px',
  },
  wordmark: {
    display: 'flex',
    fontFamily: 'var(--font-geist-sans, sans-serif)',
    fontSize: 'clamp(32px, 6vw, 56px)',
    fontWeight: 500,
    letterSpacing: '0.02em',
    color: '#3a3128',
  },
  letter: {
    display: 'inline-block',
    willChange: 'transform, opacity, filter',
  },
  line: {
    width: '72px',
    height: '2px',
    background: '#b08d57',
    transformOrigin: 'center',
  },
};