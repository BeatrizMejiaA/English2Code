import {
  Grid,
  Card,
  Col,
  Row,
  Button,
  Text,
  Textarea,
  Spacer,
  Link,
  Image,
} from "@nextui-org/react";
import { Inter } from "next/font/google";
import { BsCheckLg } from "react-icons/bs";

const inter = Inter({ subsets: ["latin"] });
const Content = () => {
  const containerStyle = {
    backgroundColor: "whitesmoke",
    backgroundSize: "cover",
    backgroundPosition: "center",
    //width: "100%",
   // height: "450px",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={containerStyle}>
      <Grid.Container gap={2} justify="center">
        <Grid sm={12} md={10} justify="center">
          <Card isHoverable css={{ height: "400px", width: "60%" }}>
            <Card.Header
              css={{ textAlign: "right", backgroundColor: "#56ACDE" }}
            >
              <Text b size={30} css={{ textAlign: "right", color: "white" }}>
                Aprende Inglés hoy!
              </Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10", backgroundColor: "whitesmoke" }}>
              <Text
                className={inter.className}
                b
                size={20}
                css={{ textAlign: "center", color: "#31617D" }}
              >
                Q350 por mes!
              </Text>
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  Supera entrevistas en inglés con éxito.
                </Text>
              </Row>
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  Facilita reuniones diarias como un profesional.
                </Text>
              </Row>
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  Explica tu código con confianza y claridad.
                </Text>
              </Row>
            
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  Clases en línea enfocadas en tecnología.
                </Text>
              </Row>
            
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  Práctica de entrevistas en inglés.
                </Text>
              </Row>
            
              <Row>
                <BsCheckLg />
                <Text
                  variant="h2"
                  style={{
                    paddingLeft: "15px",
                    textAlign: "left",
                    color: "#31617D",
                  }}
                >
                  HackerRanks de diversas tecnologías.
                </Text>
              </Row>
            
            
            
              <Row justify="center">
                <Button
                  style={{ backgroundColor: "#E28100", color: "#FFFFFF" }}
                  size="sm"
                >
                  Unirme a English2Code
                </Button>
              </Row>
              <Text
                size={13}
                weight="thin"
                style={{ textAlign: "center", color: "#18303D" }}
              >
                Cancela en cualquier momento
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Content;
