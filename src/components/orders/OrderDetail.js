import React from "react";
import { CartItem } from "../cart/CartItem";
import "./OrderDetail.css";

export const OrderDetail = ({ order }) => {
  const formatDate = (date) => {
    const fecha = new Date(date);
    return fecha.toLocaleDateString();
  };

  const renderOrder = () => {
    return (
      <div id="OrderDetail">
        <div id="alert">
          <p>¡Felicitaciones! Su orden se ha registrado correctamente.</p>
        </div>

        <div id="bottom">
          <div id="purchaseDetail">
            <h3 id="orderTitle">Detalle de orden</h3>

            <p>Identificación: {order.id}</p>
            <p>Fecha: {formatDate(order.date)}</p>
            <p>Total abonado: $ {order.total}</p>
            <p>Titular de la compra: {order.buyer.name}</p>
            <p>Email: {order.buyer.email}</p>
            <p>Teléfono: {order.buyer.phone}</p>
          </div>
          <div id="itemsDetail">
            {order.items.map((purchase) => {
              return (
                <CartItem
                  key={purchase.item.id}
                  id={purchase.item.id}
                  title={purchase.item.title}
                  price={purchase.item.price}
                  image={purchase.item.image}
                  quantity={purchase.quantity}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return <>{renderOrder()}</>;
};
