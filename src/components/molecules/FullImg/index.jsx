import { Image } from "@mantine/core";

const FullImg = ({ img }) => {
  return (
    <div
      style={{
        height: "15em",
        width: "calc(100% + 3em)",
        transform: "translateX(-1.5em) translateY(-1.5em)",
        marginBottom: "-1.5em",
      }}
    >
      <Image
        width={"100%"}
        height={"15em"}
        src={img}
        alt="With default placeholder"
        withPlaceholder
      />
    </div>
  );
};

export default FullImg;
