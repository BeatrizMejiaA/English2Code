import { Grid, Card, Col, Row, Button, Text } from "@nextui-org/react";
import people1 from "../img/people1.jpg";
import people2 from "../img/people2.jpg";
import people3 from "../img/people3.jpg";
function Experiences() {
  const containerStyle = {
    backgroundColor: "#18303D",
    backgroundSize: "cover",
    backgroundPosition: "center",
  //  width: "100%",
    //height: "450px",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid.Container gap={2} style={containerStyle} justify="center">
      <Grid xs={12} md={4}>
        <Card isHoverable variant="bordered" css={{ mw: "900px", w: "100%", h: "400px" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={people1.src}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Juan M."
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                &ldquo;Gracias a English for Devs Academy, mejore mi ingles.&rdquo;
                </Text>
                <Text h4 color="#000" size={12}>
                  - Juan M.
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={4} md={4}>
        <Card isHoverable variant="bordered" css={{ w: "100%", h: "400px" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={people3.src}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Maria"
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                  "Gracias a English for Devs Academy, mejore mi ingles."
                </Text>
                <Text h4 color="#000" size={12}>
                  - Maria.
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid xs={4} md={4}>
        <Card isHoverable variant="bordered" css={{ w: "100%", h: "400px" }}>
          <Card.Body css={{ p: 0 }}>
            <Card.Image
              src={people2.src}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Juan M."
            />
          </Card.Body>
          <Card.Footer
            isBlurred
            css={{
              position: "absolute",
              bgBlur: "#ffffff66",
              borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
              bottom: 0,
              zIndex: 1,
            }}
          >
            <Row>
              <Col>
                <Text color="#000" size={12}>
                &ldquo;Gracias a English for Devs Academy, mejore mi ingles.&rdquo;
                </Text>
                <Text h4 color="#000" size={12}>
                  - Carlos.
                </Text>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}

export default Experiences;
