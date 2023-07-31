import Image from "next/image";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { Button, Grid, Stack } from "@mui/material";
import { Modal, Input, Row, Checkbox, Text } from "@nextui-org/react";
import { Mail } from "./Mail";
import { Password } from "./Password";
import { Phone } from "./Phone";
import { Person } from "./Person";

import mypic from "../img/home.png";

function HomePage() {
  const containerStyle = {
    background: `url(${mypic.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  //  width: "100%",
  //  height: "650px",
    backgroundRepeat: "no-repeat",
  };

  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const closeHandler1 = () => {
    setShowModal(false);
  };
  const closeHandler2 = () => {
    setShowSecondModal(false);
  };
  const texto = "Hola mundo";
  const textoModificado = "<" + texto + ">";

  return (
    <div style={containerStyle}>
      {/*overlay- sombra 
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2] " /> */}
      <Grid
        container
        height="100vh"
        alignItems="flex-end"
        justifyContent="center"
        direction="column"
      >
        <div className="mr-14">
          <h1 style={{ color: "#E28100", fontSize: "6rem" }}>English to</h1>
          <h1 style={{ color: "#E28100", fontSize: "6rem" }}>
            <Typewriter
              options={{
                strings: ["< Code >"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>

          {/*<h1 className="text-orange-600 text-8xl">&lt;Code&gt;</h1> */}
        </div>

        <Stack direction="row" columnGap={1} className="mr-16">
          <Button
            size="sm"
            style={{ backgroundColor: "#E28100", color: "#FFFFFF" }}
            onClick={() => setShowModal(true)}
          >
            Unirme a Eglish2Code
          </Button>
          <Button
            size="sm"
            style={{ backgroundColor: "#E28100", color: "#FFFFFF" }}
            onClick={() => setShowSecondModal(true)}
          >
            Unirme a Eglish2Code
          </Button>

          <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={showModal}
            onClose={closeHandler1}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                La cita será para evaluar tu nivel de inglés. Selecciona el
                método para contactarte. Luego, al enviarnos tu información, nos
                comunicaremos contigo lo más pronto posible para darte más
                detalles
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nombre"
                // contentLeft={<Person fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Teléfono"
                //contentLeft={<Phone fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Correo"
                //  contentLeft={<Mail fill="currentColor" />}
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Contactarme por correo</Text>
                </Checkbox>
                <Checkbox>
                  <Text size={14}>Contactarme por telefono</Text>
                </Checkbox>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={closeHandler1}>
                Cerrar
              </Button>
              <Button auto onClick={closeHandler1}>
                Enviar datos
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={showSecondModal}
            onClose={closeHandler2}
          >
            <Modal.Header>
              <Text id="modal-title" size={18}>
                Ingresa tus datos, nos estaremos comunicando muy pronto!
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Nombre"
                contentLeft={<Person fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Teléfono"
                contentLeft={<Phone fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Correo"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Contactarme por correo</Text>
                </Checkbox>
                <Checkbox>
                  <Text size={14}>Contactarme por telefono</Text>
                </Checkbox>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={closeHandler2}>
                Cerrar
              </Button>
              <Button auto onClick={closeHandler2}>
                Enviar datos
              </Button>
            </Modal.Footer>
          </Modal>
        </Stack>
      </Grid>
    </div>
  );
}

export default HomePage;
/* return (
    <div id='picture' style={{paddingTop:"30px"}}>
    <Image
      src={mypic}
      
      alt="Picture of the author"
    />
    </div>
  );*/
