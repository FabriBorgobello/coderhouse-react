import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { Loading } from "../loading/Loading";
import { NotFound } from "../NotFound";
import { OrderDetail } from "./OrderDetail";

export const Order = () => {
    const { orderId } = useParams();
    const [order, setOrder] = useState(null);
    const [load, setLoad] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoad(true);
        const currentOrder = getFirestore().collection("orders").doc(orderId);
        currentOrder
            .get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    const result = { ...data, id: orderId };
                    setOrder(result);
                } else {
                    setNotFound(true);
                }
            })
            .catch(error => console.log("Error getting document:", error))
            .finally(setLoad(false));
    }, [orderId]);

    if (notFound) return <NotFound />;
    else if (load) return <Loading />;

    return <div>{order && <OrderDetail order={order} />}</div>;
};
