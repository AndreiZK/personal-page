import React, { useEffect, useRef } from "react";

interface TypewriterProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  delay?: number;
  fontSize?: string;
}

const Typewriter = ({ text, fontSize, delay, ...props }: TypewriterProps) => {
  const ref = useRef<HTMLHeadingElement>(null!);

  useEffect(() => {
    ref.current.textContent &&
      ref.current.style.setProperty(
        "--length",
        String(ref.current.textContent.length)
      );

    if (delay) ref.current.style.setProperty("--delay", `${delay}s`);
    if (fontSize) ref.current.style.fontSize = fontSize;
  }, []);

  return (
    <h1 {...props} className="typewriter" ref={ref}>
      {text}
    </h1>
  );
};

export default Typewriter;
