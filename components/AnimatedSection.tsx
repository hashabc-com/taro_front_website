'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.8,
  stagger = 0.1
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const elements = sectionRef.current.querySelectorAll('.animate-item');
    
    let fromVars: gsap.TweenVars = {};
    let toVars: gsap.TweenVars = {
      duration,
      delay,
      ease: "power2.out", // 使用更柔和的缓动
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", // 稍微提前触发
        end: "bottom 15%",
        toggleActions: "play none none reverse"
      }
    };

    switch (animationType) {
      case 'fadeUp':
        fromVars = { y: 30, opacity: 0 }; // 减少移动距离
        toVars = { ...toVars, y: 0, opacity: 1 };
        break;
      case 'fadeLeft':
        fromVars = { x: -30, opacity: 0 }; // 减少移动距离
        toVars = { ...toVars, x: 0, opacity: 1 };
        break;
      case 'fadeRight':
        fromVars = { x: 30, opacity: 0 }; // 减少移动距离
        toVars = { ...toVars, x: 0, opacity: 1 };
        break;
      case 'scale':
        fromVars = { scale: 0.95, opacity: 0 }; // 减少缩放幅度
        toVars = { ...toVars, scale: 1, opacity: 1 };
        break;
      case 'rotate':
        fromVars = { rotation: 15, opacity: 0, scale: 0.95 }; // 减少旋转角度
        toVars = { ...toVars, rotation: 0, opacity: 1, scale: 1 };
        break;
    }

    if (elements.length > 1) {
      toVars.stagger = stagger;
    }

    gsap.fromTo(elements, fromVars, toVars);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationType, delay, duration, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

// Hook for mouse parallax effect
export function useMouseParallax(intensity: number = 0.1) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * intensity;
      const deltaY = (e.clientY - centerY) * intensity;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      if (!element) return;
      
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (element) {
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [intensity]);

  return elementRef;
}

// Floating animation component
export function FloatingElement({ 
  children, 
  delay = 0,
  duration = 3,
  intensity = 20
}: { 
  children: ReactNode;
  delay?: number;
  duration?: number;
  intensity?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    gsap.to(element, {
      y: -intensity,
      duration,
      delay,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });

    return () => {
      if (element) {
        gsap.killTweensOf(element);
      }
    };
  }, [delay, duration, intensity]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
}