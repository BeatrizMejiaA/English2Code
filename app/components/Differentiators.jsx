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
} from "@nextui-org/react";
import people1 from "../img/people1.jpg";
import people2 from "../img/people2.jpg";
import people3 from "../img/people3.jpg";

import differentiator from "../img/differentiator.png";
function Differentiators() {
  const containerStyle = {
    backgroundColor: "whitesmoke",
    backgroundSize: "cover",
    backgroundPosition: "center",
   // width: "100%",
   // height: "650px",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={containerStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text h1 size={70} color="#0089B4" weight="bold">
          ¿Qué nos diferencia?
        </Text>
      </div>

      <Grid.Container gap={1} justify="center">
        <Grid xs={12} sm={4}>
          <Card css={{ p: "$6", mw: "400px", backgroundColor: "#03607E" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h1 color="white" css={{ lineHeight: "$xs" }}>
                    Enfoque especializado
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text h4 color="white">
                Nos destacamos por ofrecer un enfoque educativo centrado
                exclusivamente en las necesidades de los desarrolladores.
                Integrando contenido técnico relevante con habilidades del
                idioma inglés, brindamos a nuestros estudiantes las herramientas
                lingüísticas necesarias para sobresalir en su campo profesional.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card css={{ p: "$6", mw: "400px", backgroundColor: "#03607E" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h1 color="white" css={{ lineHeight: "$xs" }}>
                    Entornos técnicos
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text h4 color="white">
                Nuestro programa se basa en la inmersión en entornos técnicos
                reales, lo que permite a los estudiantes familiarizarse con la
                terminología, las prácticas y las demandas de la industria. A
                través de prácticos y ejercicios orientados al desarrollo, los
                estudiantes adquieren la confianza necesaria para comunicarse y
                colaborar en contextos técnicos.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card css={{ p: "$6", mw: "400px", backgroundColor: "#03607E" }}>
            <Card.Header>
              <Grid.Container css={{ pl: "$6" }}>
                <Grid xs={12}>
                  <Text h1 color="white" css={{ lineHeight: "$xs" }}>
                    Comunidad y networking
                  </Text>
                </Grid>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <Text h4 color="white">
                Fomentamos una comunidad de aprendizaje activa y colaborativa
                entre nuestros estudiantes. Ofrecemos oportunidades de
                networking, eventos y colaboración con otros profesionales del
                sector. Esto brinda a nuestros estudiantes un entorno de apoyo
                donde pueden establecer contactos, intercambiar conocimientos y
                potenciar su crecimiento profesional.
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}

export default Differentiators;
