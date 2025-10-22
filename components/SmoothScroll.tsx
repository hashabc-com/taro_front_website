import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    let smoother: ScrollSmoother;

    const initSmoothScroll = () => {
      smoother = ScrollSmoother.create({
        smooth: 1.2,
        effects: true,
        smoothTouch: 0.1,
      });
    };

    // Initialize smooth scroll after a short delay to ensure DOM is ready
    const timer = setTimeout(initSmoothScroll, 100);

    return () => {
      clearTimeout(timer);
      if (smoother) {
        smoother.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
