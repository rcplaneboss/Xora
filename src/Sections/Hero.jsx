import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../Components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";


gsap.registerPlugin(ScrollTrigger); 

const Hero = () => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
     const heroAnimated = gsap.timeline()
      heroAnimated.from('.animatedText', {
        opacity: 0,
        duration: 1,
        delay: 1,
        stagger: 1,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])


  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container" ref={containerRef}> 
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3 animatedText" > 
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4  max-md:text-5xl max-md:leading-12 animatedText"  >
              Amaizingly Simple
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10 animatedText" >
           We designed Xora AI video Editor to be an easy to use, quick to
              Learn, and suprisingly powerful.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Try it now!</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(30%)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt=""
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
