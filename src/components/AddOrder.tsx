import { useState } from "react";
import { Orders } from "../types/orders.type";

interface Props {
  setOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const AddOrder = ({ setOrders }: Props) => {
  const [customer, setCustomer] = useState("");

  const handleAddOrder = () => {
    if (!customer) return;

    const newOrder: Orders = {
      id: `ORD${Math.floor(Math.random() * 100000)}`,
      customer,
      items: ["Burger"], // Default item
      totalPrice: 10.99, // Default price
      status: "Pending",
      timestamp: new Date().toISOString(),
    };

    setOrders((prev) => [...prev, newOrder]);
    setCustomer("");
  };

  return (
    <button
      onClick={handleAddOrder}
      className="p-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
    >
      Add Order
    </button>
  );
};

export default AddOrder;
