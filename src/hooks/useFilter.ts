import { Shipments } from "../data/shipments";

export function useFilter(term: string, data: Shipments) {
  if (!term) {
    return data;
  }

  const shipments = data.map((shipment) => {
    const isIncluded = shipment.shipmentName
      .toLowerCase()
      .startsWith(term.toLowerCase());
    if (isIncluded) return shipment;

    const obj = {
      shipmentName: shipment.shipmentName,
      items: shipment.items.filter((item) =>
        item.productName.toLowerCase().startsWith(term.toLowerCase())
      ),
    };

    return obj;
  });

  return shipments.filter((shipment) => shipment.items.length > 0);
}
