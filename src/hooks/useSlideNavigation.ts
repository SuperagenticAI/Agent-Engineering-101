import { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from '../data/slides';

export function useSlideNavigation() {
  const totalSlides = slides.length;

  const getInitialSlide = () => {
    const hash = window.location.hash;
    const match = hash.match(/slide=(\d+)/);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num >= 1 && num <= totalSlides) return num;
    }
    return 1;
  };

  const [currentSlide, setCurrentSlide] = useState(getInitialSlide);
  const [direction, setDirection] = useState(0);
  const nextRef = useRef<() => void>(() => {});
  const prevRef = useRef<() => void>(() => {});

  const goTo = useCallback(
    (n: number) => {
      if (n < 1 || n > totalSlides || n === currentSlide) return;
      setDirection(n > currentSlide ? 1 : -1);
      setCurrentSlide(n);
      window.location.hash = `slide=${n}`;
    },
    [currentSlide, totalSlides]
  );

  const next = useCallback(() => goTo(currentSlide + 1), [goTo, currentSlide]);
  const prev = useCallback(() => goTo(currentSlide - 1), [goTo, currentSlide]);

  useEffect(() => { nextRef.current = next; }, [next]);
  useEffect(() => { prevRef.current = prev; }, [prev]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let pendingDir = 0;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      pendingDir = e.deltaY > 0 ? 1 : -1;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        if (pendingDir > 0) nextRef.current();
        else prevRef.current();
        pendingDir = 0;
        timer = null;
      }, 120);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goTo(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goTo(totalSlides);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev, goTo, totalSlides]);

  useEffect(() => {
    const handleHash = () => {
      const match = window.location.hash.match(/slide=(\d+)/);
      if (match) {
        const num = parseInt(match[1], 10);
        if (num >= 1 && num <= totalSlides && num !== currentSlide) {
          setDirection(num > currentSlide ? 1 : -1);
          setCurrentSlide(num);
        }
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [currentSlide, totalSlides]);

  return { currentSlide, direction, totalSlides, goTo, next, prev };
}
