import { useSpring, animated } from "react-spring";

interface MenuProps {
  isOpen: boolean;
}

const menuItems = [
  { text: "Опыт работы", href: "/works" },
  { text: "Навыки", href: "/skills" },
  { text: "Контакты", href: "/contacts" },
];

const Menu = ({ isOpen }: MenuProps) => {
  const containerSpring = useSpring({
    transform: `translateX(${isOpen ? "0%" : "100%"}`,
  });

  return (
    <animated.div style={containerSpring} className="menu-container">
      <div className="menu-items-list">
        {menuItems.map(({ text, href }) => (
          <a className="menu-item" data-text={text} href={href}>
            {text}
          </a>
        ))}
      </div>
    </animated.div>
  );
};

export default Menu;
