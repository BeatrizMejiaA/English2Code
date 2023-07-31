import { Card, Grid, Text, Link, Row } from "@nextui-org/react";
import Image from "next/image";
import logo from "../img/logo.png"

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

  const handleEmailClick = () => {
    const email = 'english2code@gmail.com';
    const subject = 'Quiero evaluarme';
    const body = 'Buen día, me gustaría realizarme la evaluación';
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client with the pre-populated email
    window.location.href = mailtoLink;
  };
  return (
    <div style={containerStyle}>
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12} md={6} justify="center">
        <Image src={logo} alt="logo" width={40} height={50} />
          <Row justify="left" >
          <button onClick={handleEmailClick}>english2code@gmail.com</button>
            
          </Row>
        </Grid>
        <Grid xs={12} md={6} justify="center" >
          <Text css={{ color: "$FFFFF" }}>+502 4150 0203 </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
}
