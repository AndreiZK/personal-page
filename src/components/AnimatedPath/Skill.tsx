import { animated, useInView } from "@react-spring/web";

interface SkillProps {
  name: string;
  top: string;
  left: string;
  fontSize: string;
  fromRight?: boolean;
}

const skillAnimationFromLeft = {
  from: { opacity: 0, transform: "translateX(-50%)" },
  to: { opacity: 1, transform: "translateX(0%)" },
};

const skillAnimationFromRight = {
  from: { opacity: 0, transform: "translateX(100%)" },
  to: { opacity: 1, transform: "translateX(0%)" },
};

const Skill = ({ name, top, left, fontSize, fromRight }: SkillProps) => {
  const [skillRef, skillSpring] = useInView(
    () => (fromRight ? skillAnimationFromRight : skillAnimationFromLeft),
    {
      rootMargin: "0% 0% -30% 0%",
    }
  );

  return (
    <animated.span
      ref={skillRef}
      style={{ ...skillSpring, top, left, fontSize }}
      className="skill"
    >
      {name}
    </animated.span>
  );
};

export default Skill;
