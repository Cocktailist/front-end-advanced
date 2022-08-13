const TextOnclick = ({ children, handler, left, right }) => {
  return (
    <span
      style={{
        width: "1em",
        height: "1em",
        border: "1px solid gray",
        borderRadius: "50%",
        textAlign: "center",
      }}
      onClick={handler}
    >
      {children}
    </span>
  );
};

export default TextOnclick;
