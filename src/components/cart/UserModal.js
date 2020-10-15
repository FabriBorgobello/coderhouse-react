import React from "react";
import { Button, Modal, TextInput } from "react-materialize";

export const UserModal = ({
  setName,
  setPhone,
  setEmail,
  name,
  phone,
  email,
  handlePurchase,
}) => {
  return (
    <Modal
      actions={[
        <Button
          className="col l2 offset-l1 offset-s4 s4"
          node="button"
          waves="light"
          onClick={handlePurchase}
        >
          Comprar
        </Button>,
      ]}
      bottomSheet={false}
      fixedFooter={false}
      header="Introduzca sus datos"
      id="Modal-0"
      open={false}
      options={{
        dismissible: true,
        endingTop: "10%",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: "4%",
      }}
      trigger={
        <Button large className="right orange lighten-2" node="button">
          Comprar
        </Button>
      }
    >
      <TextInput
        id="TextInput-1"
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextInput
        id="TextInput-2"
        label="Teléfono"
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextInput
        id="TextInput-3"
        label="Email"
        email
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </Modal>
  );
};
