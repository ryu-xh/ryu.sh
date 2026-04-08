import React from "react";

const getCodePoint = (emoji: string): string => {
  return Array.from(emoji)
    .map((char) => char.codePointAt(0)!.toString(16))
    .join("-");
};

interface Props {
  emoji: string;
  className?: string;
  style?: React.CSSProperties;
}

const TwemojiFlag: React.FC<Props> = ({ emoji, className, style }) => {
  const codepoint = getCodePoint(emoji);
  const src = `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoint}.svg`;

  return (
    <img
      src={src}
      alt={emoji}
      draggable={false}
      className={className}
      style={{
        height: "1em",
        width: "1em",
        verticalAlign: "-0.1em",
        display: "inline-block",
        ...style,
      }}
    />
  );
};

export default TwemojiFlag;
