import React, { useState, useEffect } from "react";

export const ItemCount = ({ min, max, item, handleCounter }) => {
    const [quantity, setQuantity] = useState(min);

    useEffect(() => {
        handleCounter(quantity);
    }, [quantity, handleCounter]);

    return (
        <div id="ItemCount">
            <label>Cantidad: (Stock: {item.stock})</label>
            <input
                style={{
                    backgroundColor: "#fff",
                    borderRadius: "0.25rem",
                    opacity: "0.8",
                }}
                type="number"
                min={min}
                max={max}
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
            />
        </div>
    );
};
