import { useState, useEffect } from "react";
import TextOnclick from "../TextWithHandler";

function Counter({ optionName, onChange }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const optionObject = {};
    optionObject[optionName] = value;
    onChange((prev) => {
      const idx = prev.findIndex((e) => e.hasOwnProperty(optionName));
      if (idx === -1) {
        return [...prev, optionObject];
      } else {
        prev[idx] = optionObject;
        return [...prev];
      }
    });
  }, [value, optionName, onChange]);

  const handleClick = (type) => {
    return async () => {
      if (type === "decrease") {
        await setValue((prev) => (prev <= 0 ? prev : prev - 1));
      } else if (type === "increase") {
        await setValue((prev) => (prev >= 5 ? prev : prev + 1));
      }
    };
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "auto",
      }}
    >
      <TextOnclick handler={handleClick("decrease")}>-</TextOnclick>
      <span
        style={{
          width: "3em",
          paddingLeft: "1em",
          paddingRight: "1em",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.4em",
        }}
      >
        {value}
      </span>
      <TextOnclick handler={handleClick("increase")}>+</TextOnclick>
    </div>
  );
}

export default Counter;
