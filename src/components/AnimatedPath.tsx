import { useRef } from "react";
import {
  useSpring,
  useScroll,
  useInView,
  animated,
  config,
} from "@react-spring/web";
import { useTranslation } from "react-i18next";

const AnimatedPath = () => {
  const { t } = useTranslation();

  const pathRef = useRef<SVGPathElement | null>(null);
  const pathContainerRef = useRef<HTMLDivElement>(null!);

  const [pathSpring, api] = useSpring(() => ({
    from: { strokeDashoffset: 2140, strokeDasharray: 2140 },
    config: config.slow,
  }));

  useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      api.set({ strokeDashoffset: 2140 - scrollYProgress * 3500 });
    },
  });

  const captionAnimation = {
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500, friction: 0, tension: 2000 },
  };

  const skillAnimationFromLeft = {
    from: { opacity: 0, transform: "translateX(-50%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  };

  const skillAnimationFromRight = {
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  };

  const [caption1Ref, caption1inView] = useInView(() => captionAnimation, {
    rootMargin: "0% 0% -22% 0%",
  });
  const [caption2Ref, caption2inView] = useInView(() => captionAnimation, {
    rootMargin: "0% 0% -22% 0%",
  });
  const [caption3Ref, caption3inView] = useInView(() => captionAnimation, {
    rootMargin: "0% 0% -22% 0%",
  });
  const [caption4Ref, caption4inView] = useInView(() => captionAnimation, {
    rootMargin: "0% 0% -22% 0%",
  });
  const [caption5Ref, caption5inView] = useInView(() => captionAnimation, {
    rootMargin: "0% 0% -22% 0%",
  });

  const [skill1Ref, skill1Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill2Ref, skill2Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill3Ref, skill3Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill4Ref, skill4Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill5Ref, skill5Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill6Ref, skill6Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill7Ref, skill7Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill8Ref, skill8Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill9Ref, skill9Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill10Ref, skill10Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill11Ref, skill11Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill12Ref, skill12Spring] = useInView(() => skillAnimationFromLeft, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill13Ref, skill13Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });
  const [skill14Ref, skill14Spring] = useInView(() => skillAnimationFromRight, {
    rootMargin: "0% 0% -30% 0%",
  });

  return (
    <div className="path-container" ref={pathContainerRef}>
      <animated.span
        ref={skill1Ref}
        style={{
          ...skill1Spring,
          top: "100px",
          left: "-100px",
          fontSize: "4em",
        }}
        className="skill"
      >
        HTML
      </animated.span>
      <animated.span
        ref={skill2Ref}
        style={{
          ...skill2Spring,
          top: "166px",
          left: "600px",
          fontSize: "3.1em",
        }}
        className="skill"
      >
        CSS
      </animated.span>
      <animated.span
        ref={skill3Ref}
        style={{
          ...skill3Spring,
          top: "300px",
          left: "-150px",
          fontSize: "4.5em",
        }}
        className="skill"
      >
        JavaScript
      </animated.span>
      <animated.span
        ref={skill14Ref}
        style={{
          ...skill14Spring,
          top: "550px",
          left: "400px",
          fontSize: "8em",
        }}
        className="skill"
      >
        React
      </animated.span>
      <animated.span
        ref={skill4Ref}
        style={{
          ...skill4Spring,
          top: "770px",
          left: "-280px",
          fontSize: "3.8em",
        }}
        className="skill"
      >
        Redux
      </animated.span>
      <animated.span
        ref={skill5Ref}
        style={{
          ...skill5Spring,
          top: "200px",
          left: "-350px",
          fontSize: "3em",
        }}
        className="skill"
      >
        Node
      </animated.span>
      <animated.span
        ref={skill6Ref}
        style={{
          ...skill6Spring,
          top: "900px",
          left: "700px",
          fontSize: "4em",
        }}
        className="skill"
      >
        Express
      </animated.span>
      <animated.span
        ref={skill7Ref}
        style={{
          ...skill7Spring,
          top: "1000px",
          left: "-190px",
          fontSize: "5.5em",
        }}
        className="skill"
      >
        Sass
      </animated.span>
      <animated.span
        ref={skill8Ref}
        style={{
          ...skill8Spring,
          top: "1100px",
          left: "250px",
          fontSize: "4em",
        }}
        className="skill"
      >
        React Router
      </animated.span>
      <animated.span
        ref={skill9Ref}
        style={{
          ...skill9Spring,
          top: "1320px",
          left: "650px",
          fontSize: "7em",
        }}
        className="skill"
      >
        Git
      </animated.span>
      <animated.span
        ref={skill10Ref}
        style={{
          ...skill10Spring,
          top: "570px",
          left: "-400px",
          fontSize: "4em",
        }}
        className="skill"
      >
        Typescript
      </animated.span>
      <animated.span
        ref={skill11Ref}
        style={{
          ...skill11Spring,
          top: "870px",
          left: "250px",
          fontSize: "4em",
        }}
        className="skill"
      >
        Vite
      </animated.span>
      <animated.span
        ref={skill12Ref}
        style={{
          ...skill12Spring,
          top: "370px",
          left: "300px",
          fontSize: "3.5em",
        }}
        className="skill"
      >
        React Spring
      </animated.span>
      <animated.span
        ref={skill13Ref}
        style={{
          ...skill13Spring,
          top: "1300px",
          left: "-350px",
          fontSize: "4em",
        }}
        className="skill"
      >
        websockets
      </animated.span>
      <svg
        viewBox="0 0 496 1111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <animated.path
          ref={pathRef}
          style={{ ...pathSpring }}
          d="M159.893 7C483.453 160.32 399.344 308.848 308.795 274.512C180.685 225.934 -71.9116 271.917 31.1126 441.208C134.137 610.5 161.234 628.201 252.454 602.914C345.685 566.314 613.038 500.7 421.478 794.564C229.917 1088.43 106.57 1104 48.2162 1104"
          className="path"
        />
      </svg>
      <animated.div
        style={caption1inView}
        ref={caption1Ref}
        className="caption caption-1"
      >
        <div className="circle" />
        <p className="caption-text">
          React <i className="fa-brands fa-react"></i>
        </p>
      </animated.div>
      <animated.div
        style={caption2inView}
        ref={caption2Ref}
        className="caption caption-2"
      >
        <div className="circle"></div>
        <p className="caption-text">
          Typescript
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="nonzero"
              clip-rule="nonzero"
              d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"
              fill="#000000"
            />
          </svg>
        </p>
      </animated.div>
      <animated.div
        style={caption3inView}
        ref={caption3Ref}
        className="caption caption-3"
      >
        <div className="circle"></div>
        <p className="caption-text">
          Node.js <i className="fa-brands fa-node-js"></i>
        </p>
      </animated.div>
      <animated.div
        style={caption4inView}
        ref={caption4Ref}
        className="caption caption-4"
      >
        <div className="circle"></div>
        <p className="caption-text">
          {t("skills.final")} <i className="fa-regular fa-square-check"></i>
        </p>
      </animated.div>
      <animated.div
        style={caption5inView}
        ref={caption5Ref}
        className="caption caption-5"
      >
        <div className="circle"></div>
        <p className="caption-text">
          {t("skills.resp")} <i className="fa-solid fa-laptop-code"></i>
        </p>
      </animated.div>
    </div>
  );
};

export default AnimatedPath;
