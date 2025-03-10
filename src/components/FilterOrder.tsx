import { Orders } from "../types/orders.type";
import { useState, useEffect } from "react";

interface FilterProps {
  orders: Orders[];
  setFilteredOrders: React.Dispatch<React.SetStateAction<Orders[]>>;
}

const FilterOrder = ({ orders, setFilteredOrders }: FilterProps) => {
  const [selectedStatus, setSelectedStatus] = useState<"All" | "Pending" | "Completed">("All");

  useEffect(() => {
    if (orders.length > 0) {
      handleFilter(selectedStatus);
    }
  }, [orders]); // Runs whenever orders change

  const handleFilter = (status: "All" | "Pending" | "Completed") => {
    setSelectedStatus(status);

    if (status === "All") {
      setFilteredOrders([...orders]); // Ensure a fresh copy of orders is set
    } else {
      setFilteredOrders(orders.filter((order) => order.status === status));
    }
  };

  return (
    <div className="relative">
      <select
        value={selectedStatus}
        onChange={(e) => handleFilter(e.target.value as "All" | "Pending" | "Completed")}
        className="p-2 py-3 bg-white border rounded-lg shadow-md text-gray-700 focus:outline-none"
      >
        <option value="All">All Orders</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default FilterOrder;
