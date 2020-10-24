import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-materialize";
import "./UserModal.css";

export const UserModal = ({ handlePurchase }) => {
  const { register, handleSubmit, errors } = useForm();
  const [differentEmail, setDifferentEmail] = useState(false);

  const onSubmit = (data) => {
    if (data.email === data.confirmEmail) {
      handlePurchase(data);
    } else {
      setDifferentEmail(true);
    }
  };

  return (
    <Modal
      style={{ padding: "1rem" }}
      actions=""
      bottomSheet={false}
      fixedFooter={false}
      header="Introduce tus datos"
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
        <Button large className="right btn" node="button">
          Continuar
        </Button>
      }
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nombre y apellido</label>
          <input
            name="name"
            ref={register({
              required: true,
              validate: (value) => value !== "admin" || "Nice try!",
            })}
          />
          {errors.name && <div>Este campo es obligatorio.</div>}
        </div>
        <div>
          <label htmlFor="phone">Teléfono</label>
          <input
            type="number"
            name="phone"
            ref={register({ required: true })}
          />
          {errors.phone && <div>Este campo es obligatorio.</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
            })}
          />
          {errors.email?.type === "required" && (
            <div>Este campo es obligatorio.</div>
          )}
          {errors.email?.type === "pattern" && <div>Formato inválido</div>}
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirmar Email</label>
          <input
            name="confirmEmail"
            type="email"
            ref={register({
              required: true,
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i },
            })}
          />
          {errors.confirmEmail?.type === "required" && (
            <div>Este campo es obligatorio.</div>
          )}
          {errors.confirmEmail?.type === "pattern" && (
            <div>Formato inválido</div>
          )}
          {differentEmail && <div>Los emails no coinciden</div>}
        </div>
        <button type="input" className="right btn" children="Comprar" />
      </form>
    </Modal>
  );
};
