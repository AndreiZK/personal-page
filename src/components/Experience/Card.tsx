import { animated, useInView, useSpring } from "react-spring";
import useIsMobile from "../../hooks/useIsMobile";

interface ExperienceCardProps {
  index: number;
  img: string;
  description: string;
  stack: string[];
  title: string;
  isExpanded: boolean;
  isOtherExpanded: boolean;
  setIsExpanded: () => void;
}

const ExperienceCard = ({
  index,
  isOtherExpanded,
  isExpanded,
  setIsExpanded,
  img,
  description,
  stack,
  title,
}: ExperienceCardProps) => {
  const isMobile = useIsMobile();
  const wrapperSpring = useSpring({
    maxWidth: isExpanded ? "1200px" : isOtherExpanded ? "200px" : "500px",
  });
  const wrapperSpringMobile = useSpring({
    maxHeight: isExpanded ? "800px" : isOtherExpanded ? "200px" : "400px",
  });

  const wrapperAnimation = {
    from: { opacity: 0, transform: "translateY(50%)" },
    to: { opacity: 1, transform: "translateY(0%)" },
    delay: index * 1000 + 500,
  };

  const [wrapperRef, wrapperComeupSpring] = useInView(() => wrapperAnimation, {
    rootMargin: `0% 0% -10% 0%`,
  });

  const stackSectionSpring = useSpring({
    transform: isExpanded ? "translateX(0%)" : "translateX(100%)",
    maxWidth: isExpanded ? "250px" : "0px",
    opacity: isExpanded ? 1 : 0,
  });
  const stackSectionSpringMobile = useSpring({
    transform: isExpanded ? "translateY(0%)" : "translateY(100%)",
    maxHeight: isExpanded ? "200px" : "0px",
    opacity: isExpanded ? 1 : 0,
  });
  const descriptionSectionSpring = useSpring({
    transform: isExpanded ? "translateX(0%)" : "translateX(-100%)",
    maxWidth: isExpanded ? "400px" : "0px",
    opacity: isExpanded ? 1 : 0,
  });
  const descriptionSectionSpringMobile = useSpring({
    transform: isExpanded ? "translateY(0%)" : "translateY(-100%)",
    maxHeight: isExpanded ? "200px" : "0px",
    opacity: isExpanded ? 1 : 0,
  });

  const wrapperSpringToUse = isMobile ? wrapperSpringMobile : wrapperSpring;

  return (
    <animated.div
      ref={wrapperRef}
      style={{ ...wrapperComeupSpring, ...wrapperSpringToUse }}
      className="card-wrapper"
    >
      <animated.div
        style={isMobile ? stackSectionSpringMobile : stackSectionSpring}
        className="card-stack"
      >
        <h5>Стек проекта</h5>
        <ul>
          {stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </animated.div>
      <div onClick={setIsExpanded} className="card-inner">
        <h4>{title}</h4>
        <div
          className="card-inner-bg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      <animated.div
        style={
          isMobile ? descriptionSectionSpringMobile : descriptionSectionSpring
        }
        className="card-description-container"
      >
        <h5>Описание</h5>
        <p className="card-description">{description}</p>
      </animated.div>
    </animated.div>
  );
};

export default ExperienceCard;
