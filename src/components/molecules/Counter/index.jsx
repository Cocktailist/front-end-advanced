import { useState } from "react";
import TextOnclick from "../TextWithHandler";

function Counter({ sendUp }) {
  const [value, setValue] = useState(0);

  const handleClick = (type) => {
    return () => {
      if (type === "decrease") setValue((prev) => prev - 1);
      else if (type === "increase") setValue((prev) => prev + 1);
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
        }}
      >
        {value}
      </span>
      <TextOnclick handler={handleClick("increase")}>+</TextOnclick>
    </div>
  );
}

export default Counter;
