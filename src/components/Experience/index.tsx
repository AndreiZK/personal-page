import { animated, useInView } from "react-spring";
import ExperienceCard from "./Card";
import { useState } from "react";
import { Trans } from "react-i18next/TransWithoutContext";
import useGetRes from "../../hooks/useGetRes";

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
    title: "Amoka",
    img: "/amoka-pic.png",
    description: "Сайт для платежного сервиса c анимациями и мультиязычностью.",
    stack: ["React", "Typescript", "CSS modules", "i18n"],
  },
  {
    title: "W3 Wallet",
    img: "/w3wallet-pic.png",
    description:
      "Лендинг для web3 кошелька c большим количеством анимаций, реализованных с помощью React Spring. Возможность редактирования контента заказчиком реализованна с помозью CMS Storyblok.",
    stack: ["React", "Typescript", "React Spring", "CSS modules", "Storyblok"],
  },
  {
    title: "CSMarket",
    img: "/csmarket-pic.png",
    description: "Торговая площадка для скинов в CS",
    stack: ["Laravel", "Sass"],
  },
  // {
  //   title: "W3 Wallet",
  //   img: "/csmarket-pic.png",
  //   description: "Лендинг для web3 кошелька",
  //   stack: ["React", "Typescript", "CSS modules"],
  // },
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

  const res = useGetRes();

  const checkNeighbourExpanded = (index: number) => {
    if (expandedIndex === index) return false;
    if (res === "lg" && expandedIndex !== null) {
      if (
        expandedIndex % 3 === 0 &&
        (index === expandedIndex + 1 || index === expandedIndex + 2)
      )
        return true;
      if (
        expandedIndex % 3 === 1 &&
        (index === expandedIndex - 1 || index === expandedIndex + 1)
      )
        return true;
      if (
        expandedIndex % 3 === 2 &&
        (index === expandedIndex - 1 || index === expandedIndex - 2)
      )
        return true;
    }
    if (res === "md" && expandedIndex !== null) {
      if (expandedIndex % 2 === 0 && index === expandedIndex + 1) return true;
      if (expandedIndex % 2 === 1 && index === expandedIndex - 1) return true;
    }
    if (res === "sm" && expandedIndex !== null && expandedIndex !== index)
      return true;

    return false;
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
            isOtherExpanded={checkNeighbourExpanded(index)}
            key={index}
            {...item}
          />
        ))}
      </div>
      {/* <div className="experience-cases">
        {cases.map(
          (item, index) =>
            index > 2 && (
              <ExperienceCard
                index={index}
                setIsExpanded={() => handleExpand(index)}
                isExpanded={expandedIndex === index}
                isOtherExpanded={
                  expandedIndex !== null &&
                  expandedIndex !== index &&
                  expandedIndex > 2
                }
                key={index}
                {...item}
              />
            )
        )}
      </div> */}
    </div>
  );
};

export default ExperienceSection;
