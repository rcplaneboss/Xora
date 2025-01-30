import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom 80%",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      });

      titleAnimation.from(".animated-word", {
        top: 200,
        left: 200,
        rotate: "45deg",
        duration: 1,
        opacity: 0.4,
        ease: "power1.inOut",
      });
    }, textRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={containerClass} ref={textRef}>
      {title.split("<br />").map((line, ind) => (
        <div className="flex-center max-w-full flex-wrap  md:gap-3" key={ind}>
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="relative transform-all animated-word mr-3 -ml-1"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
