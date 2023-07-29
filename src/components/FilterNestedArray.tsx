import React, { useState } from "react";
import { SHIPMENTS } from "../data/shipments";
import { useFilter } from "../hooks/useFilter";

export default function FilterNestedArray() {
  const [term, setTerm] = useState<string>("");
  const shipments = useFilter(term, SHIPMENTS);

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div style={{ padding: "3rem" }}>
      <input
        type="text"
        placeholder="Search for a shipment or a product"
        value={term}
        onChange={handleTermChange}
      />

      <div style={{ marginTop: "2rem" }}>
        {shipments.map((shipment, index) => (
          <div key={`shipment-${index}`} style={{ marginTop: "1rem" }}>
            <h3>Shipment: {shipment.shipmentName}</h3>

            <table>
              <thead>
                <tr>
                  <th>Product name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>

              <tbody>
                {shipment.items.map((item, index) => (
                  <tr key={`item-${index}`}>
                    <td>{item.productName}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
