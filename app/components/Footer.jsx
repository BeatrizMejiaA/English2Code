import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
export default function Footer() {
  const containerStyle = {
    backgroundColor: "#E28100",
    backgroundSize: "cover",
    backgroundPosition: "center",
   // width: "100%",
   // height: "100px",
    padding: "40px",
    justifyContent: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={containerStyle}>
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12} md={6} justify="center">
          <img
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width="34px"
            height="34px"
            justify="center"
          />
          <Row justify="left" >
            <Text css={{ color: "$FFFFF" }}>english2code@gmail.com</Text>
          </Row>
        </Grid>
        <Grid xs={12} md={6} justify="center" >
          <Text css={{ color: "$FFFFF" }}>+502 56342389 </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
}
