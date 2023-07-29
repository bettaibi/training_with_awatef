export const SHIPMENTS = [
  {
    shipmentName: "phones",
    items: [
      { productName: "Iphone 14 pro max", price: 5400, quantity: 12 },
      { productName: "Samsung A51", price: 1800, quantity: 5 },
      { productName: "Samsung S22 ultra", price: 4800, quantity: 3 },
      { productName: "iphone 13 pro max", price: 2000, quantity: 2 },
      { productName: "condor", price: 4800, quantity: 3 },
    ],
  },
  {
    shipmentName: "Air conditioner",
    items: [
      { productName: "kuala", price: 5400, quantity: 12 },
      { productName: "General", price: 1800, quantity: 5 },
      { productName: "condor", price: 4800, quantity: 3 },
      { productName: "LG", price: 2000, quantity: 2 },
    ],
  },
  {
    shipmentName: "ASB travel",
    items: [
      { productName: "bla bla bla", price: 5400, quantity: 12 },
      { productName: "bla bla bla", price: 1800, quantity: 5 },
    ],
  },
];

export type Shipments = typeof SHIPMENTS;
