import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


const TestimonialItems = ({ item, containerClassName }) => {

  const containerRef = useRef(null)
  useEffect(() => {

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: true,
          toggleActions: "play none none reverse",
        }
      })

      timeline.from('.animatedText', {
        opacity: 0,
        duration: 1,
        ease: 'power1.inOut',
        stagger: 1,
      })
    }, containerRef)

    return () => ctx.revert();
  
}, [])

  return (
    <div
      className={clsx(
        "relative px-14 pt-11 pb-14 after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-screen after:bg-s2 after:content-[''] max-md:px-0 max-md:pt-11 after:max-md:-right-4",
        containerClassName
      )} ref={containerRef}
    >
      <blockquote className="animatedText h6 mb-8 text-p4">{item.comment}</blockquote>

      <div className="flex items-center max-xl:-mr-8 ">
        <div className="mr-4 size-20 shrink-0 rounded-half border-2 border-s2 p-1.5" >
          <img
            src={item.avatarUrl}
            alt={item.name}
            className="size-full object-cover"
          />
        </div>
        <div>
          <h4 className="body-2 mb-0.5 texy-p1">{item.name}</h4>
          <p className="small-compact uppercase text-s3">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItems;
