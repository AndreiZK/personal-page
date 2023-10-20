import { animated, useInView } from "react-spring";
import ExperienceCard from "./Card";
import { useState } from "react";
import { Trans } from "react-i18next/TransWithoutContext";

const cases = [
  {
    title: "Ritzip",
    img: "/Screenshot_1.png",
    description:
      "Панель управления платформой для грузоперевозок. Включает в себя много сложных форм и отображение данных водителей и заказов на карте в реальном времени.",
    stack: [
      "React",
      "Typescript",
      "Google Maps API",
      "websocket",
      "React Router",
    ],
  },
  {
    title: "РеабИТ",
    img: "/reabit-pic.png",
    description:
      "Панель управления медицинского сервиса. Отображение большого количества разного рода медицинских данных, работа с формами и API.",
    stack: ["React", "Typescript", "RTK-query", "React Router"],
  },
  {
    title: "CSMarket",
    img: "/csmarket-pic.png",
    description: "Торговая площадка для скинов в CS",
    stack: ["Laravel", "Sass"],
  },
];

const titleAnimation = {
  from: { opacity: 0, transform: "translateY(50%)" },
  to: { opacity: 1, transform: "translateY(0%)" },
};
const ExperienceSection = () => {
  const [titleRef, titleSpring] = useInView(() => titleAnimation, {
    rootMargin: "0% 0% -10% 0%",
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    console.log(index);
    setExpandedIndex((prevExpandedIndex) =>
      prevExpandedIndex === index ? null : index
    );
  };

  return (
    <div className="experience-section">
      <animated.h2 style={titleSpring} ref={titleRef}>
        <Trans i18nKey="experience" components={[<span />]} />
      </animated.h2>
      <div className="experience-cases">
        {cases.map((item, index) => (
          <ExperienceCard
            index={index}
            setIsExpanded={() => handleExpand(index)}
            isExpanded={expandedIndex === index}
            isOtherExpanded={expandedIndex !== null && expandedIndex !== index}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
