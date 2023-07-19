import { Text } from "@nextui-org/react";
import Carousel from "./Carousel/Carousel";

const Methodology = () => {
  const containerStyle = {
    backgroundColor: "#18303D",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "700px",
    padding: "40px",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
        css={{ py: "$0", px: "$0" }}
      >
        <Text h1 size={60} color="#56ACDE" weight="bold">
          Nuestra metodología
        </Text>
      </div>
      <Carousel />
    </div>
  );
};

export default Methodology;
