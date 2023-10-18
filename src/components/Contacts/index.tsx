import { useState } from "react";
import { useTranslation } from "react-i18next";

const contactLinks = [
  {
    link: "https://t.me/joinchat/H399-999999999",
    icon: <i className="fa-brands fa-telegram link-telegram"></i>,
  },
  {
    link: "https://www.linkedin.com/company/h399/",
    icon: <i className="fa-brands fa-linkedin link-linkedin"></i>,
  },
  {
    link: "mailto:andr.soloviov@gmail.com",
    icon: <i className="fa-solid fa-envelope link-email"></i>,
  },
];

const Contacts = () => {
  const { t } = useTranslation();

  const [text, setText] = useState("");
  const sendMessage = () => {
    if (!text.length) return;
    const data = {
      chat_id: "397601442",
      text,
    };
    fetch(
      "https://api.telegram.org/bot6340953112:AAEHFPyMWUycFj2LofLiWLXuu_d1MPiJxXA/sendMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setText("");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="contacts-section">
      <h2>{t("contacts-heading")}</h2>
      <div className="contacts-links">
        {contactLinks.map((item) => (
          <a target="blank" href={item.link}>
            {item.icon}
          </a>
        ))}
      </div>
      <p>{t("contacts-text")}</p>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={sendMessage}>{t("send")}</button>
    </div>
  );
};

export default Contacts;
