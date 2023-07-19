import { useState } from "react";
import { Button, Grid, Stack } from "@mui/material";
import { Modal, Input, Row, Checkbox, Text } from "@nextui-org/react";

function TakeTest() {

  const [visible, setVisible] = useState(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          La cita será para evaluar tu nivel de inglés. Selecciona el método
          para contactarte. Luego, al enviarnos tu información, nos
          comunicaremos contigo lo más pronto posible para darte más detalles
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
        <Button auto flat color="error" onClick={closeHandler}>
          Cerrar
        </Button>
        <Button auto onClick={closeHandler}>
          Enviar datos
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TakeTest;
